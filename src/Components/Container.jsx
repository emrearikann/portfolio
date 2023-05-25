import React from "react";

const Container = ({ children }) => {
   return (
      <body>
         <section className="container pt-0 flex justify-center items-center">{children}</section>
      </body>
   );
};

export default Container;
