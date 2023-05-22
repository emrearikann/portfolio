import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "@picocss/pico";

// import fixed components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// pages
import Homepage from "./Pages/Homepage/Homepage";
import Profile from "./Pages/Profile/Profile";
import Projects from "./Pages/Projects/Projects";
import Volunteering from "./Pages/Volunteering/Volunteering";

const App = () => {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/volunteering" element={<Volunteering />} />
         </Routes>
         <Footer />
      </>
   );
};

export default App;
