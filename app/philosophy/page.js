import React from "react";

import VisiMisi from "./components/VisiMisi";
import Filosofi from "./components/Filosofi";
import HeroPhilosophy from "./components/HeroPhilosophy";
import Milestone from "./components/Milestone";
import TeamTeaser from "../teams/components/TeamTeaser";

const Philosophy = () => {
  return (
    <>
      <HeroPhilosophy />
      <Filosofi />
      <VisiMisi />
      <Milestone />
      <TeamTeaser />
    </>
  );
};

export default Philosophy;
