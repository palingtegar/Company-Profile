import Image from "next/image";
import React from "react";

const Heroourwork = () => {
  return (
    <section className="bg-[#ff7d97] md:h-[120vh] h-[90vh]">
      <div className="md:mx-72 mx-20 md:pt-32 pt-32">
        <div className="flex justify-end">
          <Image
            src="/logobinal2.png"
            alt="logobinal2"
            width={150}
            height={150}
          />
        </div>
        <h1 className="text-white md:text-7xl text-5xl font-bold font-mono mt-20 text-center">
          Our Works
        </h1>

        <text className=" justify-center mt-16 flex italic text-white md:text-3xl text:2xl font-bold font-mono">
          #BINALkanIndonesia
        </text>
      </div>
    </section>
  );
};

export default Heroourwork;
