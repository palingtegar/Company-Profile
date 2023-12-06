import Image from "next/image";
import React from "react";

const Depot = () => {
  return (
    <section className="md:h-[100vh] h-[100vh]">
      <div className="md:mx-32 mx-4 md:py-14 py-5 border-8 border-[#ff7d97] md:p-0 p-5 rounded-3xl">
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-2 bg">
          <div className="md:h-40 h-8"></div>
          <div className="md:h-40 h-8">
            {" "}
            <div className="justify-center mt-16 flex italic text-[#ff9eb1] text-3xl font-bold">
              <text>#JualyangBINAL</text>
            </div>
          </div>
          <div className="md:h-40 h-8"></div>
          <div className="md:h-40 h-8"></div>
          <div className="md:h-40 h-16">
            {" "}
            <div className="flex justify-center bg-white">
              <Image
                src="/DEPOT3.png"
                alt="logo depot"
                width={350}
                height={350}
              />
            </div>
          </div>
          <div className="md:h-40 h-8"></div>
          <div className="md:h-40 h-8"></div>
          <div className="md:h-40 h-24">
            <div className="bg-[#ff7d97] md:p-5 p-5 text-center text-white rounded-2xl shadow-2xl">
              <text className=" font-bold text-lg">DEPOT BINAL</text>
              <h1 className="text-sm mt-2 font-medium">
                Destinasimu untuk belanja "online" yang tak hanya
                mempersembahkan produk berkualitas tinggi, tetapi juga merangkul
                gaya hidup yang menggoda. Menghadirkan pula pengalaman
                e-commerce yang menyenangkan dan interaktif.
              </h1>
            </div>
          </div>
          <div className="h-40"></div>
        </div>
      </div>
    </section>
  );
};

export default Depot;
