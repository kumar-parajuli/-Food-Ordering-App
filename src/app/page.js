import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeader.js";

export default function () {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader />
        subHeader={"Our story"}
        mainHeader={"About us"}
        <div className="max-w-md mx-auto mt-4 text-gray-500 flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            excepturi, at tempore libero sequi cum ipsa iusto est fugit facere
            architecto enim eveniet odio quasi mollitia ipsum quia praesentium
            maiores!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            ut voluptatibus corporis! Quisquam, ex molestias maiores soluta
            nihil qui, maxime corporis consequuntur praesentium eius laboriosam
            suscipit quibusdam, iste quam! Quisquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            laborum inventore, adipisci enim quis excepturi ullam laudantium
            placeat delectus
          </p>
        </div>
      </section>
    </>
  );
}
