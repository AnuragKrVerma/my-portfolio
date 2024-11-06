"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import project1 from "../assets/project/project 1.png";
import project2 from "../assets/project/project 2.png";

const projects = [
  {
    title: "Smart Contact Manager",
    desc: "It is a cloud-based contact management application designed to streamline contact organization and access. Users can securely manage, search, and store their contacts on the cloud with an intuitive and responsive interface.",
    devStack:
      "Java, Spring Web, SpringBoot, HTML, TailwindCSS, JavaScript, MySQL, Redis, Thymeleaf, Google & GitHub OAuth",
    link: "",
    github: "https://github.com/AnuragKrVerma/SCM",
    src: project2,
  },
  {
    title: "Cake Shop",
    desc: "Developed a responsive, secure online cake store where users can browse and purchase cakes. The platform includes user authentication, role-based access, and smooth shopping workflows.",
    devStack:
      "HTML, CSS, Java, Spring Boot, Spring Data JPA, Spring Security, Thymeleaf, MySQL, Google, OAuth",
    link: "",
    github: "https://github.com/AnuragKrVerma/Cake-Shop",
    src: project1,
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <div>
      <div className="bg-black"></div>
      <div
        className="text-white bg-gradient-to-b from-black to-[#381a5f]"
        id="portfolio"
      >
        <div className="flex justify-center items-center">
          <h1 className="text-white text-6xl font-semibold p-4">
            Selected <span className="text-orange-400">Projects</span>
          </h1>
        </div>
        <div className="px-5 md:px-0 max-w-[1000px] mx-auto mt-20 ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className={`mt-20 flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse gap-10" : "md:flex-row"
              }`}
            >
              <div className="space-y-2 max-w-[550px]">
                <h2 className="text-7xl my-4 text-white-70">{`0${
                  index + 1
                }`}</h2>
                <h2 className="text-4xl">{project.title}</h2>
                <p className="text-lg text-white/70 break-words p-4">
                  {project.desc}
                </p>
                <p className="text-xl text-orange-400 font-semibold">
                  {project.devStack}
                </p>
                <div className="w-64 h-[1px] bg-gray-400 my-4">
                  {project.link && (
                    <a href={project.link} className="mr-6">
                      Link
                    </a>
                  )}
                  <a href={project.github}>Github</a>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src={project.src}
                  alt={project.title}
                  className="h-[350px] w-[500px] object-cover border rounded border-gray-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
