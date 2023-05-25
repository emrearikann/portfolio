import React from "react";
import Container from "../../Components/Container";
import image from "../../static/images/Emre-1 Cropped.jpg";
import { NavLink } from "react-router-dom";

const Homepage = () => {
   return (
      <Container>
         <section className="my-4 flex justify-center items-center flex-col py-4 text-center">
            <img src={image} alt="emrearikan" className="rounded-full mb-8" width={"120px"} />
            <b className="text-xl mb-4">A developer based in Turkey</b>
            Hey, I'm Emre, a developer based in Turkey. I am continuing my education in computer science. I'm developing
            WEB applications and I'm currently working as a frontend developer. I'm also interested in the security side
            of it. In addition, I work in the software development unit of a WEB security team. Lastly, I'm on the
            management team of a community that deals with software.
            <NavLink to="/profile" className="no-underline">
               <button className="focus:outline-none p-2 mt-4 mb-0 bg-transparent border-white hover:bg-white hover:text-[#11191F] duration-300">
                  Jump right in for more!
               </button>
            </NavLink>
         </section>
      </Container>
   );
};

export default Homepage;
