import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhilosophyHome = () => {
  return (
    <>
      <section className="bg-white lg:h-[70vh] md:h-[50vh] h-[120vh]">
        <div className="lg:mx-32 md:mx-20 md:pt-20 mx-6 pt:20 lg:py-12 py-10 md:py-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-24 md:gap-4 gap-4">
            <div className="col-span-2">
              <text className="md:text-lg text-sm text-[#ff9eb1]">
                Our Philosophy
              </text>
              <h1 className=" md:mt-10 mt-5 lg:text-2xl md:text-lg md:font-medium font-medium text-[#ff7d97]">
                BINAL™ | Bisa Kenal bukan sekedar platform, kami adalah inovator
                sosial yang menghubungkan kreativitas lokal dengan dunia
                digital. <br />
                <br />
                Dengan mempererat ikatan sosial, kami memandu perjalanan digital
                yang membawa dampak positif. Dimana, kreativitas bukan hanya
                ekspresi, tapi juga kekuatan yang membentuk komunitas yang kuat
                dan berdampak melalui program yang "BINAL"
              </h1>
              <div
                className="bg-[#ff9eb1]
                hover:bg-[#ff7d97]
                text-white
                font-bold
                py-2
                px-4
                rounded-full
                text-center
                md:mt-10
                mt-4
                md:w-5/12
                w-8/12
                "
              >
                <Link href="../philosophy">Know Me More</Link>
              </div>
            </div>
            <div className="h-[50vh]">
              <Image
                src="/aboutus.jpeg"
                alt="about us"
                width={600}
                height={300}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhilosophyHome;
