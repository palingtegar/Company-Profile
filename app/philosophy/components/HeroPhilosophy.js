import Image from "next/image";
import React from "react";

const HeroPhilosophy = () => {
  return (
    <section className="bg-[#ff9eb1] md:h-[100vh] h-[90vh]">
      <div className="md:mx-72 mx-8 md:pt-32 pt-32">
        <div className="flex justify-end">
          <Image
            src="/logobinal2.png"
            alt="logo binal"
            width={150}
            height={150}
          />
        </div>
        <h1 className="text-white md:text-7xl text-5xl font-bold font-mono mt-20 text-center">
          Our Philosophy
        </h1>

        <text className=" justify-center mt-16 flex italic text-white md:text-3xl text:2xl font-bold font-mono">
          #BINALkanIndonesia
        </text>
      </div>
    </section>
  );
};

export default HeroPhilosophy;
