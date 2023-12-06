import Image from "next/image";
import React from "react";

const Community = () => {
  return (
    <section className="md:h-[100vh] h-[90vh]">
      <div className="md:mx-32 mx-4 py-16">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 bg">
          <div className="md:h-40 h-8">
            <div className="bg-[#ff7d97] p-5 text-center text-white rounded-2xl">
              <text className=" font-bold text-lg">BINALicious COMMUNITY</text>
              <h1 className="text-sm mt-2 font-medium">
                Komunitas yang Penuh Gairah! Temukan keseruan, jalin ikatan, dan
                rasakan kebersamaan dalam Kopdar, Charity & CSR. Bergabunglah
                sekarang untuk pengalaman bermakna penuh kegembiraan dan
                keakraban!
              </h1>
            </div>
          </div>
          <div className="md:h-40 h-0 "></div>
          <div className="md:h-40 h-0"></div>
          <div className="md:h-40 h-0"></div>
          <div className="md:h-40 h-0">
            {" "}
            <div className="flex justify-center bg-white">
              <Image
                src="/community.png"
                alt="logo comunity"
                width={350}
                height={350}
              />
            </div>
          </div>
          <div className="md:h-40 h-0"></div>
          <div className="md:h-40 h-0"></div>
          <div className="md:h-40 h-0"></div>
          <div className="md:h-40 h-0">
            {" "}
            <div className="justify-center mt-16 flex italic text-[#ff9eb1] text-3xl font-bold">
              <text>#BINALBersama</text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
