import React from "react";

const Projects = () => {
   return (
      <main className="container">
         <article className="mt-8 mb-24 text-center w-full shadow-none">
            <p className="text-center mb-12">
               <b className="border-b p-2">PROJECTS THAT I WORKED ON</b>
            </p>
            <details className="max-w-xl mx-auto">
               <summary role="button" className="secondary">
                  Personal Website
               </summary>
               <p className="text-left px-4">
                  Since the beginning of the Covid-19 pandemic, I have been trying to improve myself in the fields of
                  WEB Development and WEB Security. As a result of the information I have learned, I have my own website
                  among the first projects I have put out publicly.Dec. The site you are currently browsing was designed
                  from scratch, written in ReactJS and powered by TailwindCSS and PicoCSS.
               </p>
            </details>
            <details className="max-w-xl mx-auto">
               <summary role="button" className="secondary">
                  SRET Studio - Landing Page
               </summary>
               <p className="text-left px-4">
                  SRET is a community founded by me and my friends during the pandemic. We designed our own website
                  using a ready-made template. I learned using templates, advanced CSS animations and use some API’s.
               </p>
            </details>
            <details className="max-w-xl mx-auto">
               <summary role="button" className="secondary">
                  Yavuzlar - Scraping Tool
               </summary>
               <p className="text-left px-4">
                  Yavuzlar is a WEB security team established under the SiberVatan project. The first cyber security
                  tool that we developed as all members of Yavuzlar was a scraper and it is working on CLI. This scraper
                  developed with GoLang and it is not publicly accessible.
               </p>
            </details>
            <details className="max-w-xl mx-auto">
               <summary role="button" className="secondary">
                  Yavuzlar - Fuzzing Tool
               </summary>
               <p className="text-left px-4">
                  Another project that we developed as all members of the Yavuzlar WEB security team was the WEB Fuzzing
                  tool. This project was also developed using GoLang, it is working on CLI, and this project has not
                  been published publicly either.
               </p>
            </details>
            <details className="max-w-xl mx-auto">
               <summary role="button" className="secondary">
                  Another Small Projects
               </summary>
               <p className="text-left px-4">
                  While I was trying to learn a language and improve on that language, I also developed certain small
                  projects. Todo Application, Giveaway Application and Hangman Game I made while learning Javascript,
                  Todo Application and Personal Website Tryings I made while learning ReactJS, Movie Poster Page,
                  Translation Application, Exchange Rates Application and GitHub Profile Page application I made while
                  learning API usage are some of them.
               </p>
            </details>
         </article>
      </main>
   );
};

export default Projects;
