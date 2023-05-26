import React from "react";

const Volunteering = () => {
   return (
      <main className="container">
         <article className="my-0 text-center w-full shadow-none">
            <p className="text-center mb-12">
               <b className="border-b p-2">MY VOLUNTEERINGS</b>
            </p>
            <details className="max-w-xl mx-auto">
               <summary role="button" class="secondary">
                  Zplay Game Development Hackathon
               </summary>
               <p className="text-left px-4">
                  We competed with 24 teams at Seed Game Jam. I learned game development steps, creating assets,
                  teamwork and how to write clean code. It was my first big project in C# programming language.
               </p>
            </details>
            <details className="max-w-xl mx-auto">
               <summary role="button" class="secondary">
                  Yavuzlar Software Development Unit
               </summary>
               <p className="text-left px-4">
                  Yavuzlar is a web security team formed under the roof of SiberVatan. I am working as a frontend
                  developer in Yavuzlar Software Development Unit. I use React and other JavaScript frameworks
                  extensively in projects. We have a project and report published so far.
               </p>
            </details>
            <details className="max-w-xl mx-auto">
               <summary role="button" class="secondary">
                  ThreatMap Project
               </summary>
               <p className="text-left px-4">
                  ThreatMap is a project that was implemented as a result of the StartupWeekend competition organized by
                  TechStars at Bülent Ecevit University in Zonguldak in 2022. The developments of the cyber threat
                  intelligence product, which has been started to be developed with a team of 7 people, are still
                  ongoing.
               </p>
            </details>
            <details className="max-w-xl mx-auto">
               <summary role="button" class="secondary">
                  Karabuk University - IT Club Core Membership
               </summary>
               <p className="text-left px-4">
                  I have been working as a vice president in the management unit of the IT Club, one of the most active
                  clubs in our school, for almost 2 years.
               </p>
            </details>
         </article>
         <article className="mt-8 mb-24 text-center w-full shadow-none">
            <p className="text-center mb-12">
               <b className="border-b p-2">MY VOLUNTEERINGS</b>
            </p>
            <article className="bg-[#11191F] shadow-none max-w-lg mx-auto">
               <p className="m-0 p-0 text-center">Techstars Startup Weekend</p>
               <p className="m-0 p-0 text-center text-xs opacity-75">First place with the best idea</p>
            </article>
            <article className="bg-[#11191F] shadow-none max-w-lg mx-auto">
               <p className="m-0 p-0 text-center">Certificate of Appreciation</p>
               <p className="m-0 p-0 text-center text-xs opacity-75">
                  18 hours of web application security training on Karabük University
               </p>
            </article>
         </article>
      </main>
   );
};

export default Volunteering;
