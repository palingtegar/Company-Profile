import Image from "next/image";
import React from "react";
import FormCard from "./components/FormCard";

const Contact = () => {
  return (
    <>
      <section className="bg-[#ff7d97] h-[70vh] md:h-[100vh]">
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
            LET'S TALK
          </h1>

          <text className=" justify-center mt-16 flex italic text-white md:text-3xl text:2xl font-bold font-mono">
            #HubungiBINAL
          </text>
        </div>
      </section>
      <FormCard />
    </>
  );
};

export default Contact;
