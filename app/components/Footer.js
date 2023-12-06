import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src="BINALFOOTER2.png" class="h-8" alt="Binal Logo" />
              <span class="self-center text-lg font-thin whitespace-nowrap dark:text-white">
                SOCIO.CREATIVE
              </span>
            </a>
            <span class="self-center text-lg font-thin whitespace-nowrap dark:text-white stroke">
              LET'S TALK
            </span>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="../philosophy" class="hover:underline me-4 md:me-6">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="../ourworks" class="hover:underline me-4 md:me-6">
                  Our Works
                </a>
              </li>
              <li>
                <a href="../contact" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              BINAL™ | Bisa Kenal
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
      ;
    </>
  );
};

export default Footer;
