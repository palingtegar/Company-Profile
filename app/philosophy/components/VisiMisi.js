import React from "react";

const VisiMisi = () => {
  return (
    <section className="bg-white md:h-[110vh] h-[180vh]">
      <div className="lg:mx-32 md:mx-20 mx-8 md:pt-20 pt-60">
        <h1 className="md:text-4xl text-xl font-medium text-[#ff7d97] text-center ">
          VISI
        </h1>
        <div className="bg-[#ff7d97] md:mt-6 mt-5 p-5 rounded-2xl lg:mx-60 md:mx-20 shadow-2xl">
          <h1 className="  md:text-2xl  font-medium text-white md:p-5 text-center">
            Menjadi pusat kreativitas dan inovasi sosial yang menginspirasi
            transformasi positif di tingkat lokal dan global.
          </h1>
        </div>
        <div>
          <h1 className=" md:mt-8 mt-8 md:text-4xl text-xl font-medium text-[#ff7d97] text-center">
            MISI
          </h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 md:gap-10 gap-5 md:mt-10 mt-4">
            <div className="bg-[#ff7d97] p-5 text-center text-white rounded-2xl shadow-2xl">
              <text className=" font-bold md:text-2xl text-md">
                Membangun Komunitas yang Kuat
              </text>
              <h1 className="md:text-lg text-sm mt-5 font-medium">
                Merangkul keragaman dan mempererat ikatan sosial melalui event,
                proyek kolaboratif, dan interaksi online yang memberikan nilai
                tambah bagi setiap anggota komunitas.
              </h1>
            </div>
            <div className="bg-[#ff7d97] p-5 text-center text-white rounded-2xl shadow-2xl">
              <text className="  font-bold md:text-2xl text-md">
                Memberdayakan Kreativitas Lokal
              </text>
              <h1 className="md:text-lg text-sm mt-5 font-medium">
                Mendorong dan memberdayakan setiap individu dalam
                mengekspresikan kreativitas mereka, menjadi panggung bagi
                seniman dan inovator lokal untuk bersinar.
              </h1>
            </div>
            <div className="bg-[#ff7d97] p-5 text-center text-white rounded-2xl shadow-2xl">
              <text className="  font-bold md:text-2xl text-md">
                Mendukung Kesejahteraan Komunitas
              </text>
              <h1 className="md:text-lg text-sm mt-5 font-medium">
                Menjalankan kegiatan amal dan proyek filantropi untuk mendukung
                kesejahteraan masyarakat lokal, membawa kontribusi positif pada
                bidang-bidang seperti pendidikan, lingkungan, dan kesehatan.
              </h1>
            </div>
            <div className="bg-[#ff7d97] p-5 text-center text-white rounded-2xl shadow-2xl">
              <text className="  font-bold md:text-2xl text-md">
                Sumber Inspirasi Inklusif
              </text>
              <h1 className="md:text-lg text-sm mt-5 font-medium">
                Menjadi kurator utama tren lokal, mendukung seniman dan desainer
                fashion lokal, dan mempromosikan keberagaman dalam industri
                fashion melalui megazine yang menginspirasi.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
