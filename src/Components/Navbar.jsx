import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
   return (
      <section className="max-w-5xl mx-auto p-8">
         <nav>
            <ul>
               <li>
                  <strong>
                     <NavLink to="/" className="text-white text-xl">
                        Emre Arikan
                     </NavLink>
                  </strong>
               </li>
            </ul>
            <ul>
               <li>
                  <NavLink to="/profile" className="text-[#fff] text-md">
                     Profile
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/projects" className="text-[#fff] text-md">
                     Projects
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/volunteering" className="text-[#fff] text-md">
                     Volunteering
                  </NavLink>
               </li>
            </ul>
         </nav>
      </section>
   );
};

export default Navbar;
