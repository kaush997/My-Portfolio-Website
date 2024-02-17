import React from 'react'
import { Link } from "react-scroll";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0  justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-6 text-titleCol">
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
       
      <div className='lgl:mt-12 lgl:mr-16'>
      <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className=" bg-designColor border border-drkCol hover:bg-titleCol text-bodyColor font-bold py-2 px-10 rounded ">
              <p>Contact &gt;</p>
          </button>
        </Link>
      </div>
      </div>
  )
}

export default Media