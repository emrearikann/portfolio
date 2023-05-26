import React from "react";

const Profile = () => {
   // return <Container>Who Am I - Skills - Certificates</Container>;
   return (
      <main className="container">
         <article className="my-0 text-center">
            <p className="text-center">
               <b className="border-b p-2">WHO AM I</b>
            </p>
            I am continuing my education at Karabük University Computer Engineering Department. During the time since
            the beginning of the pandemic, I have improved myself in the field of Web Development. I am also continuing
            my work on the web security side with the SiberVatan project and Yavuzlar WEB Security Team. I have a
            personality that likes to research and I am curious. I am developing projects as a front-end developer. In
            addition I am on the management team of a community interested in software and technology.
         </article>
         <article className="mt-8 mb-4 text-center w-full shadow-none">
            <p className="text-center">
               <b className="border-b p-2">SKILLS</b>
            </p>
            <div className="flex justify-center items-center max-w-md mx-auto">
               <p className="mb-0 w-52 text-left">HTML5 - CSS3</p>
               <progress className="mb-0" value="90" max="100"></progress>
            </div>
            <div className="flex justify-center items-center max-w-md mx-auto">
               <p className="mb-0 w-52 text-left">Javascript</p>
               <progress className="mb-0" value="80" max="100"></progress>
            </div>
            <div className="flex justify-center items-center max-w-md mx-auto">
               <p className="mb-0 w-52 text-left">React</p>
               <progress className="mb-0" value="70" max="100"></progress>
            </div>
            <div className="flex justify-center items-center max-w-md mx-auto">
               <p className="mb-0 w-52 text-left">TailwindCSS</p>
               <progress className="mb-0" value="80" max="100"></progress>
            </div>
            <div className="flex justify-center items-center max-w-md mx-auto">
               <p className="mb-0 w-52 text-left">PHP</p>
               <progress className="mb-0" value="40" max="100"></progress>
            </div>
            <div className="flex justify-center items-center max-w-md mx-auto">
               <p className="mb-0 w-52 text-left">GoLang</p>
               <progress className="mb-0" value="30" max="100"></progress>
            </div>
            <div className="flex justify-center items-center max-w-md mx-auto">
               <p className="mb-0 w-52 text-left">Adobe Photoshop</p>
               <progress className="mb-0" value="60" max="100"></progress>
            </div>
            <div className="flex justify-center items-center max-w-md mx-auto">
               <p className="mb-0 w-52 text-left">Linux</p>
               <progress className="mb-0" value="65" max="100"></progress>
            </div>
         </article>
         <article className="mt-8 mb-24 text-center w-full shadow-none">
            <p className="text-center">
               <b className="border-b p-2">CERTIFICATES</b>
            </p>
            <div className="grid text-center">
               <div className="text-center my-1 bg-[#11191F] px-4 py-8">
                  Pentest <br /> <p className="m-0 p-0 text-xs opacity-60">BG-TEK</p>
               </div>
               <div className="text-center my-1 bg-[#11191F] px-4 py-8">
                  CEH <br /> <p className="m-0 p-0 text-xs opacity-60">Cyrops</p>
               </div>
               <div className="text-center my-1 bg-[#11191F] px-4 py-8">
                  Javascript <br /> <p className="m-0 p-0 text-xs opacity-60">METU</p>
               </div>
               <div className="text-center my-1 bg-[#11191F] px-4 py-8">
                  Programming <br /> <p className="m-0 p-0 text-xs opacity-60">METU</p>
               </div>
               <div className="text-center my-1 bg-[#11191F] px-4 py-8">
                  WEB Design <br /> <p className="m-0 p-0 text-xs opacity-60">METU</p>
               </div>
            </div>
         </article>
      </main>
   );
};

export default Profile;
