import Image from "next/image";
import React from "react";

const Filosofi = () => {
  return (
    <section className="bg-white md:h-[60vh] h-[100vh]">
      <div className="lg:mx-32 md:mx-20 mx-8 md:pt-20 pt-10">
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-24 gap-2">
          <div className="col-span-2">
            <text className="text-lg text-[#ff9eb1]">Our Philosophy</text>
            <h1 className=" mt-10 md:text-2xl font-medium text-[#ff7d97]">
              BINAL™ | Bisa Kenal bukan sekedar platform, kami adalah inovator
              sosial yang menghubungkan kreativitas lokal dengan dunia digital.{" "}
              <br />
              <br />
              Dengan mempererat ikatan sosial, kami memandu perjalanan digital
              yang membawa dampak positif. Dimana, kreativitas bukan hanya
              ekspresi, tapi juga kekuatan yang membentuk komunitas yang kuat
              dan berdampak melalui program yang "BINAL"
            </h1>
            <hr class="h-px my-8 bg-[#ff7d97] border-0 dark:bg-gray-700"></hr>
          </div>
          <div className="md:h-[50vh] h-[70vh] rounded-2xl">
            {" "}
            <Image
              src="/aboutus.jpeg"
              alt="aboutus"
              width={600}
              height={300}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filosofi;
