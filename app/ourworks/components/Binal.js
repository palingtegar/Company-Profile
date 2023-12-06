import Image from "next/image";
import React from "react";

const Binal = () => {
  return (
    <section className="md:h-[100vh] h-[180vh]">
      <div className="md:mx-32 mx-4 md:py-16 py-10">
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-12 gap-4">
          <div className="md:h-40 h-8">
            {" "}
            <Image
              src="/dashboard.jpg"
              alt="dashboard binal"
              width={450}
              height={150}
              className="border-4 border-[#ff9eb1] shadow-xl rounded-2xl"
            />
          </div>
          <div className="h-40"></div>
          <div className="md:h-40 h-8">
            <div className="bg-[#ff7d97] md:p-5 p-5 text-center text-white rounded-2xl shadow-2xl">
              <text className=" font-bold text-lg">BINAL | BISA KENAL</text>
              <h1 className="text-sm mt-2 font-medium">
                Platform Sosial Media yang menghubungkan orang dengan cara unik.
                Temukan komunitas yang beragam, bagikan cerita, dan bangun
                ikatan sosial. Pengalaman inklusif, kreatif, dan ramah.
                Bergabunglah sekarang untuk benar-benar mengenal satu sama lain!
              </h1>
            </div>
          </div>
          <div className="h-40"></div>
          <div className="md:h-40 h-8">
            <div className="flex justify-center">
              <Image
                src="/LOGOBISAKENAL2.png"
                alt="logo binal"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="h-40"></div>
          <div className="h-40">
            <Image
              src="/login.png"
              alt="login binal"
              width={450}
              height={150}
              className="border-4 border-[#ff9eb1] shadow-xl rounded-2xl"
            />
          </div>
          <div className="h-40">
            <div className="justify-center md:pt-20 pt-20 flex italic text-[#ff9eb1] text-3xl font-bold">
              <text>#BINALicious</text>
            </div>
          </div>
          <div className="h-40">
            <Image
              src="/registrasi.png"
              alt="register binal"
              width={450}
              height={150}
              className="border-4 rounded-2xl border-[#ff9eb1] shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Binal;
