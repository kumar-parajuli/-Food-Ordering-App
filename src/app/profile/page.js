"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { uploadOnCloudinary } from "../utils/cloudinary";

export default function Profile() {
  const router = useRouter();
  const session = useSession();
  // const { data: session, status } = useSession();
  const [userName, setUserName] = useState("");
  const [savedProfile, setSavedProfile] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState(null); // Added state for the new image URL

  const { status } = session;

  // console.log(session);
  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
    }
  }, [session, status]);
  //haldle the form submit function
  async function handleProfileInfoUpdate(e) {
    e.preventDefault();
    setIsSaving(true);
    setSavedProfile(false);
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userName }),
    });
    // console.log(response);
    setIsSaving(false);
    if (response.ok) {
      setSavedProfile(true);
    }
  }
  async function handleFileChange(ev) {
    const files = ev.target.files;

    if (files?.length === 1) {
      const data = new FormData();
      data.set("files", files[0]);

      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: data,
        });

        if (response.ok) {
          const cloudinaryResponse = await response.json();

          // Assuming cloudinaryResponse.url contains the new image URL
          const newImageUrl = cloudinaryResponse.url;

          // Update the UI state with the new image URL
          setNewImageUrl(newImageUrl);
        } else {
          console.error("Image upload failed");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  }

  // //file upload handler
  // async function handleFileChange(ev) {
  //   // console.log(ev);
  //   console.log("upload");
  //   const files = ev.target.files;
  //   if (files?.length === 1) {
  //     const data = new FormData();
  //     data.set("files", files[0]);
  //     await fetch("/api/upload", {
  //       method: "POST",
  //       body: data,
  //       // headers: { "Content-Type": "mutipart/form-data" },
  //     });
  //   }
  // }
  // if (status === "Loading") {
  //   return "Loading...";
  // }
  // if (status === "unauthenticated") {
  //   router.push("/login");
  //   // return redirect("/login");
  // }
  // // Check if user is defined in session.data
  // const user = session.data?.user;
  // if (!user) {
  //   // Handle the case where user is not available in session
  //   return <div>User data not found</div>;
  // }
  // // Check if image is defined in user
  const userImage = session?.data?.user?.image;
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
      <div className="max-w-md mx-auto ">
        {/* //if profile saved then only display */}
        {savedProfile && (
          <h2 className="text-center bg-green-100 p-4 rounded-lg border border-green-300">
            Profiled saved!
          </h2>
        )}
        {isSaving && (
          <h2 className="text-center bg-blue-100 p-4 rounded-lg border border-blue-300">
            Profiled saved!
          </h2>
        )}
        <div className="flex gap-4 items-center">
          <div>
            <div className=" p-2 rounded-lg relative">
              <Image
                className="rounded-lg w-full h-full mb-1"
                src={userImage}
                width={250}
                height={250}
                alt={"avatar"}
              />
              <label>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
                  Edit
                </span>
              </label>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <input
              type="text"
              placeholder="  First and last name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              disabled={true}
              value={session?.data?.user?.email || ""}

              // value={session.data.user.email}
            />

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
