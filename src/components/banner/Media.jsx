import React from 'react'
import { FaFacebookF, FaLinkedinIn,FaReact, FaGithub, FaPython } from "react-icons/fa";
import { SiJava, } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href='https://www.facebook.com/sanduni.kaushalya.31?mibextid=ZbWKwL'><FaFacebookF /></a>
            </span>
            <span className="bannerIcon">
              <a href='https://github.com/kaush997'><FaGithub /></a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/kaushalya-hulathdoowage-994248245'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
       
          <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
           SKILLS
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <FaPython/>
            </span>
            <span className="bannerIcon">
              <SiJava />
            </span>
        
            <span className="bannerIcon">
            <FaReact />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media