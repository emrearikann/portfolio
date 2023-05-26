import React from "react";

const Container = ({ children }) => {
   return (
      <div>
         <section className="container pt-0 flex justify-center items-center">{children}</section>
      </div>
   );
};

export default Container;
