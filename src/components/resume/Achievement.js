import React from 'react'
import AchievementCards from './AchievementCards';
import { clougl,csolo,csssolo,htmlsolo,phpsolo,pythondssolo,pythonsolo,pythonuom,sqlsolo, } from "../../assets/index";

const Achievement = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 "
    >
      <div className="flex justify-center items-center text-center">
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <AchievementCards
          title="Introduction to C"
          des="Offered by Sololearn"
          src={csolo}
        />
        <AchievementCards
          title="Cloud Foundations"
          des="Offered by Great Learning Academy"
          src={clougl}
        />
        <AchievementCards
          title="Introduction to CSS"
          des="Offered by Sololearn"
          src={csssolo}
        />
        <AchievementCards
          title="Introduction to HTML"
          des="Offered by Sololearn"
          src={htmlsolo}
        />
        <AchievementCards
          title="PHP"
          des="Offered by Sololearn"
          src={phpsolo}
        />
        <AchievementCards
          title="Introduction to Python"
          des="Offered by Sololearn"
          src={pythonsolo}
        />
            <AchievementCards
          title="Python Data Structures"
          des="Offered by Sololearn"
          src={pythondssolo}
        />
            <AchievementCards
          title="Python for Beginners"
          des="Offered by University of Moratuwa Distance Learning Platform"
          src={pythonuom}
        />
            <AchievementCards
          title="Introduction to SQL"
          des="Offered by Sololearn"
          src={sqlsolo}
        />
      </div>
    </section>
  );
}

export default Achievement