import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import myImage from "./1f8f9d5c-327d-46b7-b2a7-b2209149013a.jpeg";

const buttonVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0 },
};

const techs = [
   "Linux",
   "HTML-CSS",
   "Javascript",
   "ReactJS",
   "GoLang",
   "PHP",
   "TailwindCSS",
   "Material UI",
   "ANT Design",
   "Bootstrap",
   "Docker",
   "Postman",
   "Figma",
   "Photoshop",
   "Canva",
];

const works = [
   "Personal Website",
   "SRET Studio Landing Page",
   "Cyber Security Tools",
   "CTFgo (coming soon)",
   "ThreatMap (coming soon)",
];

const awards = [
   {
      name: "First place with the best idea",
      from: "Techstars Startup Weekend",
   },
   {
      name: "Certificate of Appreciation",
      from: "Instructor in 18-hour web application security training - Karabük University",
   },
   {
      name: "Certificate of Appreciation",
      from: "Instructor in 10-day web application security training - Western Black Sea Development Agency",
   },
];

const professionalExperiences = [
   {
      company: "Players Rift Software Services And Consultancy",
      role: "Intern Front-end Developer",
      website: "https://www.playersrift.com/",
   },
   {
      company: "Yavuzlar - Software Development Unit",
      role: "Front-end Developer",
      website: "https://siberyavuzlar.com/",
   },
];

const Homepage = () => {
   const [techRef, techInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });

   const [workRef, workInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });

   const [awardRef, awardInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });

   const [experienceRef, experienceInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });

   return (
      <>
         <div className=" custom-image w-full h-full flex flex-col items-center justify-center">
            <img src={myImage} alt="No Place like 127.0.0.1" />
            <p className="text-hoveredColor">↓</p>
         </div>
         <div className="flex flex-col justify-center items-center">
            <div className="mt-32">
               <h2 className="text-defaultTextColor text-4xl font-bold flex items-center justify-center">
                  Hi, I'm Emre <span className="animate-wave px-2">👋</span>
               </h2>
               <h4 className="text-defaultDescColor pt-8 text-lg max-w-2xl text-center tracking-wide leading-8">
                  I'm a developer based in Turkey. I'm developing WEB applications and I'm currently working as a
                  frontend developer. I'm also interested in the security side of it. In addition, I work in the
                  software development unit of a WEB security team. Lastly, I'm on the management team of a community
                  that deals with software. <br /> <br /> Got any questions?{" "}
                  <a
                     href="mailto:emrearikance@gmail.com"
                     className="text-defaultDescColor2 custom-cursor hover:text-hoveredDescColor ease-linear duration-100"
                  >
                     Contact me!
                  </a>
               </h4>
            </div>
            <div className="mt-60">
               <h2 className="text-defaultTextColor text-4xl font-bold flex items-center justify-center mb-6">
                  Technologies
               </h2>
               <motion.div
                  className="p-4 max-w-4xl text-center"
                  initial="hidden"
                  animate={techInView ? "visible" : "hidden"}
                  ref={techRef}
                  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
               >
                  {techs.map((tech, index) => (
                     <motion.button
                        key={index}
                        className="text-md border py-3 px-8 text-defaultDescColor2 m-2 rounded-lg custom-cursor hover:text-hoveredDescColor ease-linear duration-100"
                        whileHover={{ transform: "rotate(4deg)" }}
                        variants={buttonVariants}
                     >
                        {tech}
                     </motion.button>
                  ))}
               </motion.div>
            </div>
            <div className="mt-60">
               <h2 className="text-defaultTextColor text-4xl font-bold flex items-center justify-center mb-4">
                  Recent Work
               </h2>
               <motion.div
                  className="p-4 max-w-4xl text-center flex flex-col justify-center"
                  initial="hidden"
                  animate={workInView ? "visible" : "hidden"}
                  ref={workRef}
                  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
               >
                  {works.map((work, index) => (
                     <motion.button
                        key={index}
                        className="text-xl py-2 text-defaultDescColor2 m-2 custom-cursor hover:text-hoveredDescColor ease-linear duration-100 block text-center"
                        variants={buttonVariants}
                     >
                        <span className="animate-underline animate-underline-black py-2">
                           <span className="text-sm pr-2">{index + 1} -</span>
                           {work}
                        </span>
                     </motion.button>
                  ))}
               </motion.div>
            </div>
            <div className="mt-60">
               <h2 className="text-defaultTextColor text-4xl font-bold flex items-center justify-center mb-4">
                  Awards
               </h2>
               <motion.div
                  className="p-4 max-w-4xl text-center flex flex-col justify-center"
                  initial="hidden"
                  animate={awardInView ? "visible" : "hidden"}
                  ref={awardRef}
                  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
               >
                  {awards.map((award, index) => (
                     <motion.button
                        key={index}
                        className="text-xl py-2 text-defaultDescColor2 m-2 custom-cursor hover:text-hoveredDescColor ease-linear duration-100 block text-center"
                        variants={buttonVariants}
                     >
                        {award.name} <br />
                        <small className="text-sm">{award.from}</small>
                     </motion.button>
                  ))}
               </motion.div>
            </div>
            <div className="mt-60">
               <h2 className="text-defaultTextColor text-4xl font-bold flex items-center justify-center mb-4">
                  Experiences
               </h2>
               <motion.div
                  className="p-4 max-w-4xl text-center flex flex-col justify-center"
                  initial="hidden"
                  animate={experienceInView ? "visible" : "hidden"}
                  ref={experienceRef}
                  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
               >
                  {professionalExperiences.map((experience, index) => (
                     <motion.a
                        key={index}
                        className="text-xl py-2 text-defaultDescColor2 m-2 custom-cursor hover:text-hoveredDescColor ease-linear duration-100 block text-center"
                        variants={buttonVariants}
                        href={experience.website}
                        target="_blank"
                     >
                        {experience.role} <br />
                        <small className="text-sm flex items-center justify-center">
                           {experience.company}
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-4 h-4 ml-1"
                           >
                              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                           </svg>
                        </small>
                     </motion.a>
                  ))}
               </motion.div>
            </div>
            <div className="mt-40 flex flex-col justify-center items-center">
               <div className="flex items-center justify-center">
                  <span className="text-nonHoveredColor mb-4 hover:text-hoveredColor ease-linear duration-300 mx-1">
                     <a
                        href="https://github.com/Bliadzee"
                        target="_blank"
                        className="text-4xl custom-cursor"
                        rel="noreferrer"
                     >
                        <AiFillGithub />
                     </a>
                  </span>
                  <span className="text-nonHoveredColor mb-4 hover:text-hoveredColor ease-linear duration-300 mx-1">
                     <a
                        href="https://www.linkedin.com/in/emrearikan/"
                        target="_blank"
                        className="text-4xl custom-cursor"
                        rel="noreferrer"
                     >
                        <AiFillLinkedin />
                     </a>
                  </span>
                  <span className="text-nonHoveredColor mb-4 hover:text-hoveredColor ease-linear duration-300 mx-1">
                     <a
                        href="https://twitter.com/emreeaarikan"
                        target="_blank"
                        className="text-4xl custom-cursor"
                        rel="noreferrer"
                     >
                        <AiFillTwitterCircle />
                     </a>
                  </span>
               </div>
               <small className="text-nonHoveredColor text-center">
                  © 2023 Copyright:&nbsp;&nbsp;<span className="text-hoveredColor">emrearikan</span> <br />
                  emrearikann.dev was made with love and caffeine
               </small>
            </div>
         </div>
      </>
   );
};

export default Homepage;
