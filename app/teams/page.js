import Image from "next/image";
import React from "react";
import CardTeam from "./components/CardTeam";
import HeroTeams from "./components/HeroTeams";

const Teams = async () => {
  const response = await fetch(
    "https://randomuser.me/api/?results=6&nat=in&gender=female"
  );
  const { results } = await response.json();

  console.log(results);

  return (
    <div>
      <HeroTeams />

      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-10 gap-2 md:mx-32 mx-8">
        {results.map((team, index) => {
          return <CardTeam key={index} team={team} class />;
        })}
      </div>
    </div>
  );
};

export default Teams;
