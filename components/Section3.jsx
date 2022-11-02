/* eslint-disable @next/next/no-img-element */
import React from "react";
import Table from "./Table";
const Section3 = () => {
  return (
    <>
      <section className="flex flex-col ">
        <div>
          <h1 className="fancy-text font-semibold  text-center text-xl mt-6 md:mt-14 lg:mt-18">
            What can Hpx really do.?
          </h1>
        </div>

        <div>
          <h1 className="text-3xl font-semibold text-white mt-8 text-center">
            Meet the founder of HPX
          </h1>
        </div>
        <div>
          <div className="mt-12">
            <div className=".iframe-container lg:p-[7rem]">
              <iframe
                className="w-full aspect-[16/9]"
                src="https://www.youtube.com/embed/gElfIo6uw4g" //https://youtu.be/gElfIo6uw4g
                title="Embed a YouTube Video in HTML and Make it Responsive (CSS included)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </div>
        </div>

        {/* Table div */}

        <Table />
      </section>
    </>
  );
};

export default Section3;
