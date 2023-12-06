import Image from "next/image";
const Hero = () => {
  return (
    <section className="max-w-full">
      <div className="bg-[#ff7d97] h-[100vh]">
        <div className="">
          <div className="lg:mx-72 md:mx-24 mx-7 pt-32">
            <div className="flex justify-end">
              <Image
                src="/logobinal2.png"
                alt="logo binal"
                width={150}
                height={150}
              />
            </div>
            <text className="text-white text-md md:text-sm font-bold font-mono">
              Hello Indonesia !!!
            </text>
            <h1 className="text-white md:text-7xl text-6xl font-bold font-mono mt-3">
              We're a local creative, social, & digital platform.
            </h1>
            <div className="md:mt-16 mt-4 flex justify-end italic">
              <text className=" text-white md:text-3xl text-md font-bold font-mono">
                #BINALkanIndonesia
              </text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
