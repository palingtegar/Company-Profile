import React from "react";

const Navbar2 = () => {
  const [navbar2, setNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(navbar2);
  }, [navbar2]);
  return (
    <div>
      <nav className="w-full dark:bg-zinc-800 fixed z-10 ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* Logo */}
              <Link href="/">
                <span>
                  <MdOutlineCodeOff />
                  <h2 className="text-2xl text-cyan-600 font-bold ">
                    JOE DevTech
                  </h2>
                </span>
              </Link>
              {/* Hamburger */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <fiMenu color="white" width={50} height={30} alt="logo" />
                  ) : (
                    <TiThMenu color="cyan" width={50} height={30} alt="logo" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-4 ${
                isMenuOpen ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-600 border-blue-900 md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="../" onClick={() => setNavbar(!navbar)}>
                    Philosophy
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-600 border-blue-900 md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="..philosophy" onClick={() => setNavbar(!navbar)}>
                    Our Works
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-600 border-blue-900 md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="../ourworks" onClick={() => setNavbar(!navbar)}>
                    Teams
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-blue-600 border-blue-900 md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="../contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
