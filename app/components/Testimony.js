import Image from "next/image";
import React from "react";

const Testimony = () => {
  return (
    <section className="md:mx-32 mx-4 md:h-[100vh] h-[200vh]">
      <div>
        <text className="items-center md:text-lg text-sm text-[#ff9eb1]">
          Users Testimonial
        </text>
      </div>
      <div className="grid mt-5 mb-8 border border-[#ff9eb1] rounded-lg shadow-sm dark:border-[#ff9eb1] md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-[#ff9eb1] rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-[#ff9eb1]">
          <blockquote className="max-w-2xl mx-auto mb-2 text-gray-500 lg:mb-1 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Ide Yang Mindblowjob
            </h3>
            <p className="my-4 italic">
              "BINALicious Community telah membuka pintu bagi saya untuk bertemu
              dengan banyak orang luar biasa. Setiap event yang diselenggarakan
              selalu menyenangkan dan membuka wawasan."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <Image
              className="rounded-full w-14 h-14"
              src="/imam.jpg"
              alt="profile picture"
              width={9}
              height={9}
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>Imam Afizy</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 ">
                Founder Amarillo
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-[#ff9eb1] md:rounded-se-lg dark:bg-gray-800 dark:border-[#ff9eb1]">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-1 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Makin Kesini Makin Kesana
            </h3>
            <p className="my-4 italic">
              "BINAL | BISA KENAL benar-benar memberikan pengalaman sosial media
              yang segar dan berbeda. Bergabung dengan komunitas BINALicious
              Community membuat saya merasa terhubung dengan banyak orang yang
              berpikiran serupa. Ini adalah tempat yang sangat menginspirasi!"
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <Image
              className="rounded-full w-9 h-9"
              src="/logobinalsocio.png"
              alt="profile picture"
              width={9}
              height={9}
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>Jordy Juniqno Grifith Repi</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                CEO Palse Shepere
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-[#ff9eb1] md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-[#ff9eb1]">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-1 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Pencari Asbak Tanah Lot
            </h3>
            <p className="my-4 italic">
              "Saya selalu menemukan produk yang unik di DEPOT BINAL. Mereka
              benar-benar mendukung brand lokal dan menghadirkan barang-barang
              yang sulit ditemukan di tempat lain."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <Image
              className="rounded-full w-16 h-16"
              src="/joe.jpeg"
              alt="profile picture"
              width={9}
              height={9}
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>Ihsan Hafids</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                CTO at Joe Dev Tech
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-[#ff9eb1] rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-[#ff9eb1]">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-1 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Fashion Cross Dress Radikal
            </h3>
            <p className="my-4 italic">
              BINAL Megazine bukan hanya sekadar majalah mode biasa. Ini adalah
              sumber inspirasi yang membawa saya lebih dekat dengan seni lokal
              dan tren fashion terkini."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <Image
              className="rounded-full w-9 h-9"
              src="/logobinalsocio.png"
              alt="profile picture"
              width={9}
              height={9}
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>Ilham Maulana</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                CTO at BINAL
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimony;
