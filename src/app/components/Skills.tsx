"use client";
import React from "react";
import { FaHtml5, FaCss3Alt,  FaJava, FaPython, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiDocker, SiJunit5, SiMysql, SiRedis, SiSpringboot } from "react-icons/si";

const skillIcons = [
  { icon: <FaJava size={40} />, label: "Java" },
  { icon: <SiSpringboot size={40} />, label: "Spring Boot" },
  { icon: <SiJunit5 size={40} />, label: "Junit5" },
  { icon: <SiCplusplus size={40} />, label: "C++" },
  { icon: <FaPython size={40} />, label: "Python" },
  { icon: <SiMysql size={40} />, label: "MySQL" },
  { icon: <SiDocker size={40} />, label: "Docker" },
  { icon: <SiRedis size={40} />, label: "Redis" },
  { icon: <FaHtml5 size={40} />, label: "HTML" },
  { icon: <FaCss3Alt size={40} />, label: "CSS" },
  { icon: <FaGithub size={40} /> , label: "Github" },
];

const Skills = () => {
  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32">
      <div className="text-white lg:w-[400px] lg:min-w-[950px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-4">My Skills</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 sm:grid-cols-5  pr-5 md:p-0  gap-x-10 gap-y-5">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="h-[100px] w-[100px] flex flex-col justify-between items-center bg-white/10 p-2 rounded-xl"
            >
              {skill.icon}
              <p className="mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
