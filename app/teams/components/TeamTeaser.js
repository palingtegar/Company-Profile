import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamTeaser = () => {
  return (
    <section className="bg-white lg:h-[100vh] md:h-[80vh] h-[180vh] mt-2">
      <div className="lg:mx-32 md:mx-16 m-8 md:pt-5"></div>
      <h1 className="md:text-2xl font-thin text-[#ff7d97] text-center md:pt-2 pt-8">
        Team
      </h1>
      <div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-2 mt-10 lg:mx-32 md:mx-16 m-8">
          <div className="bg-white p-5 text-center text-[#ff7d97] rounded-2xl shadow-xl">
            <div className="mb-5">
              <Image
                src="/tegar.jpg"
                alt="logo binal"
                width={350}
                height={150}
                className="rounded-full"
              />
            </div>
            <text className=" font-bold lg:text-2xl text-2xl md:text-lg">
              TEGAR IWAFA
            </text>
            <h1 className="md:text-sm text-lg lg:text-lg font-medium">
              Founder
            </h1>
          </div>
          <div className="bg-white p-5 text-center text-[#ff7d97] rounded-2xl shadow-xl">
            <div className="mb-5">
              <Image
                src="/tanteernipp.jpg"
                alt="tante erni"
                width={350}
                height={150}
                className="rounded-full"
              />
            </div>
            <text className="font-bold lg:text-2xl text-2xl md:text-lg">
              ERNI
            </text>
            <h1 className="md:text-sm text-lg lg:text-lg font-medium">
              Co-Founder
            </h1>
          </div>
          <div className="bg-white p-5 text-center text-[#ff7d97] rounded-2xl shadow-xl">
            <div className="mb-5">
              <Image
                src="/tanteatien.webp"
                alt="tante atien"
                width={350}
                height={150}
                className="rounded-full"
              />
            </div>
            <text className="font-bold lg:text-2xl text-2xl md:text-lg">
              ATIEN
            </text>
            <h1 className="md:text-sm text-lg lg:text-lg font-medium">
              General Manager
            </h1>
          </div>
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
                md:w-5/12
                w-8/12
                "
          >
            <Link href="../teams">Our Teams</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamTeaser;
