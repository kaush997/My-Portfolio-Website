import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,project4,project5 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-white"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Projects"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Criminal Identification System"
          des="This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection."
          src={projectOne}
        />
        <ProjectsCard
          title="My Personal Portfolio"
          des=" This is my personal portfolio that I created using ReactJS and Thailwind CSS to provide my services online.
          And also this is a mobile responsive project."
          src={projectTwo}
        />
        <ProjectsCard
          title="Online Clothe Odering System"
          des=" This is a group project that I worked on. We created an e-commerce website using HTML, CSS, and PHP. I designed the front-end part of the website using HTML and CSS. The website we developed is an online clothing ordering system."
          src={projectThree}
        />
        <ProjectsCard
          title="Simple Login Pages"
          des="I created this project using ReactJS and CSS. This project includes simple login, reset password, fogot password, 4 digit code pages."
          src={project4}
        />
        <ProjectsCard
          title="Interview Question Bank"
          des="This website was created using ReactJS and contains a collection of simple interview questions for four programming languages, namely PHP, Python, Java, and MySQL. "
          src={project5}
        />
       
      </div>
    </section>
  );
}

export default Projects