import Image from "next/image";
import React from "react";

const CardTeam = ({ team }) => {
  return (
    <section className="">
      <div className="md:py-2 py-1">
        <div className="md:p-3 max-w-full mt-5 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
          <Image
            src={team.picture.large}
            alt={`photo ${team.name.first}`}
            width={800}
            height={800}
            className="rounded-full"
          />
          <div class="px-5 mt-5 pb-3 text-center">
            <h1 class="text-xl font-thin tracking-tight text-gray-900 dark:text-white">
              {team.name.first}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardTeam;
