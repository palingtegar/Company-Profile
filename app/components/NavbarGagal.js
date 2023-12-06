import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section className="fixed w-full z-50">
      <nav className="p-2 bg-white text-[#ff7d97] shadow-2xl">
        <div className="flex justify-between mx-16 items-center">
          <div>
            <Link href="../">
              <Image
                src="/binalnav3.png"
                alt="logonavbar"
                width={130}
                height={130}
              />
            </Link>
          </div>
          <div>
            <ul className="flex space-x-10 py-3 font-medium text-sd md:text-lg">
              <li>
                <Link href="../philosophy" className="hover:bg-white">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="../ourworks" className="hover:bg-white">
                  Our Works
                </Link>
              </li>
              <li>
                <Link href="../teams" className="hover:bg-white">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="../contact" className="hover:bg-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
