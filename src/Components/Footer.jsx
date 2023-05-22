import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
   return (
      <section className="absolute bottom-0  mb-0 p-8 w-full">
         <div className="flex justify-between items-center max-w-3xl w-full mx-auto">
            <ul className="flex justify-center items-center m-auto pb-3">
               <NavLink
                  className="no-underline border-r border-r-white border-opacity-50 px-3"
                  to="https://github.com/Bliadzee"
                  target="_blank"
               >
                  <li className="list-none opacity-60 text-white text-sm">GitHub</li>
               </NavLink>
               <NavLink
                  className="no-underline border-r border-r-white border-opacity-50 px-3"
                  to="https://www.linkedin.com/in/emrearikan/"
                  target="_blank"
               >
                  <li className="list-none opacity-60 text-white text-sm">LinkedIn</li>
               </NavLink>
               <NavLink
                  className="no-underline border-r border-r-white border-opacity-50 px-3"
                  to="https://twitter.com/emreeaarikan"
                  target="_blank"
               >
                  <li className="list-none opacity-60 text-white text-sm">Twitter</li>
               </NavLink>
               <NavLink className="no-underline px-3" to="https://www.instagram.com/emree.arikann/" target="_blank">
                  <li className="list-none opacity-60 text-white text-sm">Instagram</li>
               </NavLink>
            </ul>
         </div>
         <div className="flex justify-center items-center">
            <small className="text-xs text-center">
               This website was made with love and caffeine. <br />© 2023 Copyright:&nbsp;&nbsp;
               <span className="hover:cursor-pointer" onClick={() => (window.location = "mailto:yourmail@domain.com")}>
                  emrearikan
               </span>
            </small>
         </div>
      </section>
   );
};

export default Footer;
