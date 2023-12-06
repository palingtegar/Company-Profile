import Image from "next/image";
import Binal from "./components/Binal";
import Megazine from "./components/Megazine";
import Community from "./components/Community";
import Depot from "./components/Depot";
import Heroourwork from "./components/Heroourwork";
import VisiMisi from "../philosophy/components/VisiMisi";

const Ourworks = () => {
  return (
    <>
      <Heroourwork />
      <Binal />
      <Megazine />
      <Community />
      <Depot />
    </>
  );
};

export default Ourworks;
