import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
       <div className="flex flex-col gap-4">
          <p className="text-xl mt-10 text-wite tracking-[4px]">Experience</p>
          <h2 className="text-4xl font-bold"> </h2>
  </div> 
        <div className="mt-14 w-full h-[200px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="John Keells Holdings PLC"
            subTitle1="Assistant Head Cashier"
            subTitle2="Human Resource Assistant"
          />
         {/* <ResumeCard
            title=""
            subTitle=""
            result=""
            des="7. Object Oriented Programming"
            des1="8. Database Systems"
            des2="9. Emerging Technologies for Information Systems"
            des3="10. Advanced Mathematics "
            des4="11. Analysis of Algorithms"
            des5="12. Human Computer Interaction"
           
          />
          <ResumeCard
            title=""
            subTitle=""
            result=""
            des="13. Personal Productivity with IS technology "
            des1="14. Software Project Management"
            des2="15. Object Oriented Analysis & Design"
            des3="16. Platform Technologies "
            des4="17. System Analysis & Design"
            des5="18. Information Assurance & Security"
            des6="19. Social and Professional Issues "
          
  />*/}
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold"> </h2>
</div>
        {/*<div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=""
            subTitle=""
            result=""
            des="20. System Administration & Maintenance"
            des1="21. Operating System Concepts"
            des2="22. System Integration & Architecture"
            des3="23. IS Risk Management"
            des4="24. IT Governance"
            des5="25. Business Intelligence"
            des6="26. Web Technologies"
           
          />
          <ResumeCard
            title=""
            subTitle=""
            result=""
            des="27. Rapid Application Development"
            des1="28. Electronic Business Strategy, Architectur & Design"
            des2="29. Enterprise Architecture"
            des3="30. Management Information Systems"
            des4="31. IT Auditing"
            des5="32. Entrepreneurship and Innovation"
         
          />
          <ResumeCard
            title=""
            subTitle=""
            result=""
            des="33. Software Engineering "
            des1="34. Geographical Information Systems"
            des2="35. Advanced Database Systems"
            des3="36. Software Quality Assurance"
            des5="37. Design Patterns and Applications"
          
          />
  </div>*/}
      </div>
    </motion.div>
  );
};

export default Experience;
