import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 ">
         <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[300px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc (Hons) in Computing & Information Systems"
            subTitle="Sabaragamuwa University of Sri Lanka (2020 - Present)"
            //result=""
            des="I am currently learning on 3rd year 2nd semester. I have completed 5 semesters of the program and I completed 37 subjects according to this degree program."
          />
         {/*<ResumeCard
            title="GCE Advanced Level"
            subTitle="Mahinda Rajapaksha College (2018)"
            //result=""
            des=""
            des1="Combined Mathematics - C"
            des2="Physics - C"
            des3="Chemistry - C"
            des4="General Information Technology - A"

  />*/}
          {/*<ResumeCard
            title="GCE Ordinary Level"
            subTitle="Somananda College (2012)"
            //result=""
            des="Information Technology - A"
            des1="Mathematics - A"
            des2="Commerce - A"
            des3="Sinhala - A"
            des4="Buddhism - A"
            des5="English - B"
            des6="Science - B"
            des7="History - B"
            des8="Dancing - B"

/>*/}
          
        </div>
      </div>
      {/* part Two */}

      <div>
        {/*<div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
  </div> */}
        <div className="mt-6 lgl:mt-28 w-full h-[300px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Diploma in Business English"
            subTitle="IUHS Campus Nugegoda (Jan 2022 - July 2022)"
            //result=""
            des="I have successfully fulfilled the assessment requirements
           and improved my English communication skills as well as my presentation skills."
          />
          {/*<ResumeCard
            title="Section First - Combined Mathematics"
            subTitle="Mahinda Rajapaksha College (2014)"
            //result=""
            des="In my school's annual prize giving ceremony, I received an award for scoring 
            the highest marks in Combined Mathematics for the entire year's 3 semester examinations."
/>*/}
          {/*<ResumeCard
            title="Section First - General Information Technology"
            subTitle="Mahinda Rajapaksha College (2014)"
           // result=""
            des="In my school's annual prize giving ceremony, I received an award for scoring the highest marks in 
            General Information Technology for the entire year's 3 semester examinations."
/>*/}
        </div>
      </div>
    </motion.div>
  );
}

export default Education