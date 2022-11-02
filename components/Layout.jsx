import React from "react";
import Chart from "./Chart";
import Navbar from "./Navbar";
import Section3 from "./Section3";
import Sections from "./Sections";
import Section4 from "./Section4";
import Section5 from "./Section5";
const Layout = () => {
  return (
    <>
      <main className="">
        {/*________________________________ Navbar */}
        <div className=" px-1 sm:px-2 md:px-10 lg:px-24 2xl:px-56  mygradiant">
          <div className="banner ">
            <Navbar />
            {/* Section */}
            <Sections />
          </div>
        </div>

        {/* Sections 3 */}
        <div className=" bg-[#13161b]  px-1 sm:px-2 md:px-10 lg:px-24 2xl:px-56">
          <Section3 />
          <Chart />
          <div>
            <Section4 />
          </div>
          <div>
            <Section5 />
          </div>
        </div>
        {/*________________________________ Footer */}
      </main>
    </>
  );
};

export default Layout;
