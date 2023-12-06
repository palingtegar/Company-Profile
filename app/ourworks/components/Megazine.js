import Image from "next/image";
import React from "react";

const Megazine = () => {
  return (
    <section className="md:h-[100vh] h-[80vh]">
      <div className="md:mx-32 mx-4 md:mt-0 mt-20 md:py-14 py-2 md:border-8 border-4 border-[#ff9eb1] rounded-3xl ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          <div className="md:h-40 h-0"></div>
          <div className="md:h-40 h-8">
            <div className="bg-[#ff7d97] md:mx-0 mx-4 p-5 text-center text-white rounded-2xl shadow-2xl">
              <text className=" font-bold text-medium">BINAL Megazine</text>
              <h1 className="text-sm mt-2 font-medium">
                Majalah terkini yang dapat diakses darimanapun. Selalu
                mengahdirkan konten Inspirasi terbaik untuk menunjang harimu
                semakin luar biasa
              </h1>
            </div>
          </div>
          <div className="md:h-40 h-0"></div>
          <div className="md:h-40 h-0"></div>
          <div className="md:h-40 h-8">
            <div className="flex justify-center md:p-0 p-6 bg-white">
              <Image
                src="/megazine.png"
                alt="logo megazine"
                width={350}
                height={350}
              />
            </div>
          </div>
          <div className="md:h-40 h-0"></div>
          <div className="md:h-40 h-0"></div>
          <div className="md:h-40 h-0">
            {" "}
            <div className="justify-center mt-16 flex italic text-[#ff9eb1] text-3xl font-bold">
              <text>#InspirasiBINAL</text>
            </div>
          </div>
          <div className="md:h-40 h-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Megazine;
