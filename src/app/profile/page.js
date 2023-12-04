"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter, redirect } from "next/navigation";
export default function Profile() {
  const router = useRouter();
  const session = useSession();
  console.log(session);
  const { status } = session;
  if (status === "Loading") {
    return "Loading...";
  }
  if (status === "unauthenticated") {
    router.push("/login");
    // return redirect("/login");
  }
  // Check if user is defined in session.data
  const user = session.data?.user;
  if (!user) {
    // Handle the case where user is not available in session
    return <div>User data not found</div>;
  }

  // Check if image is defined in user
  const userImage = user.image;
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
      <form className="maz-w-xs  md mx-auto ">
        <div cassName="flex gap-2 item-center">
          <div>
            <Image src={userImage} width={80} height={80} alt={"avatar"} />
          </div>
          <div className="grow">
            <input type="text" placeholder="  First and last name" />
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </section>
  );
}
