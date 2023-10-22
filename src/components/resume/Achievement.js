import React from 'react'
import AchievementCards from './AchievementCards';

const Achievement = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-white"
    >
      <div className="flex justify-center items-center text-center">
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <AchievementCards
          title="Introduction to C"
          des="Offered by Sololearn"
          src="/csolo.png"
        />
        <AchievementCards
          title="Cloud Foundations"
          des="Offered by Great Learning Academy"
          src="/clougl.png"
        />
        <AchievementCards
          title="Introduction to CSS"
          des="Offered by Sololearn"
          src="/csssolo.png"
        />
        <AchievementCards
          title="Introduction to HTML"
          des="Offered by Sololearn"
          src="/htmlsolo.png"
        />
        <AchievementCards
          title="PHP"
          des="Offered by Sololearn"
          src="/phpsolo.png"
        />
        <AchievementCards
          title="Introduction to Python"
          des="Offered by Sololearn"
          src="/pythonsolo.png"
        />
            <AchievementCards
          title="Python Data Structures"
          des="Offered by Sololearn"
          src="/pythondssolo.png"
        />
            <AchievementCards
          title="Python for Beginners"
          des="Offered by University of Moratuwa Distance Learning Platform"
          src="/pythonuom.png"
        />
            <AchievementCards
          title="Introduction to SQL"
          des="Offered by Sololearn"
          src="/sqlsolo.png"
        />
      </div>
    </section>
  );
}

export default Achievement