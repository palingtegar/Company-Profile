import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurworkCard = () => {
  return (
    <section className="lg:h-[90vh] md:h-[60vh] h-[90vh] pt-16">
      <div className="lg:mx-32 md:mx-24 mx-8 flex justify-between">
        <text className="items-center md:text-lg text-sm text-[#ff9eb1]">
          Our Work
        </text>
        <div
          className="bg-[#ff9eb1]
                hover:bg-[#ff7d97]
                text-white
                md:font-bold
                font-semibold
                py-2
                px-2
                rounded-full
                text-center
                lg:w-2/12
                md:w-4/12
                w-7/12
                md:mb-0
                mb-4
                "
        >
          <Link href="../ourworks">KeBINALan Lain</Link>
        </div>
      </div>
      <div className="lg:mx-32 md:mx-24 mx-4 md:mt-5 lg:py-16 md:py-16 py-10 lg:px-0 md:px-16  px-16 p-16 grid justify-center items-center border-4 border-[#ff7d97] rounded-3xl">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-x-48 md:gap-x-20 md:gap-y-20 gap-y-10">
          <div className="md:h-36">
            <Image
              src="/LOGOBISAKENAL2.png"
              alt="logo binal"
              width={300}
              height={150}
              className="drop-shadow-xl"
            />
          </div>
          <div className="md:h-40">
            <Image
              src="/community.png"
              alt="logo binal"
              width={300}
              height={150}
              className="drop-shadow-xl"
            />
          </div>
          <div className="md:h-40">
            {" "}
            <Image
              src="/megazine.png"
              alt="logo binal"
              width={300}
              height={150}
              className="drop-shadow-xl"
            />
          </div>
          <div className="ms:Hh-40">
            <Image
              src="/DEPOT3.png"
              alt="logo binal"
              width={300}
              height={150}
              className="drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurworkCard;
