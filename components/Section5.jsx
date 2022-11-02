/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import img1 from "../Images/utitly.png";
import Link from "next/link";
const Section5 = () => {
  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-2 md:grid lg:grid lg:grid-cols-4 gap-6 text-white justify-center">
        <div className=" bg-gray-700 pb-4 lg:pb-10 rounded-lg px-3">
          <div className="mt-4">
            <Image src={img1} height={40} width={40} />
          </div>
          <h1 className=" text-2xl font-semibold mt-2">Hpx core utility</h1>
          <p className="font-extralight text-sm mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            tenetur tempore, sait voluptatum non qui fugiatepe s
          </p>
        </div>

        <div className=" bg-gray-700 pb-4 lg:pb-10 rounded-lg px-3">
          <div className="mt-4">
            <Image src={img1} height={40} width={40} />
          </div>
          <h1 className=" text-2xl font-semibold mt-2">Hpx core utility</h1>
          <p className="font-extralight text-sm mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            tenetur tempore, sait voluptatum non qui fugiatepe s
          </p>
        </div>
        <div className=" bg-gray-700 pb-4 lg:pb-10 rounded-lg px-3">
          <div className="mt-4">
            <Image src={img1} height={40} width={40} />
          </div>
          <h1 className=" text-2xl font-semibold mt-2">Hpx core utility</h1>
          <p className="font-extralight text-sm mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            tenetur tempore, sait voluptatum non qui fugiatepe s
          </p>
        </div>
        <div className=" bg-gray-700 pb-4 lg:pb-10 rounded-lg px-3">
          <div className="mt-4">
            <Image src={img1} height={40} width={40} />
          </div>
          <h1 className=" text-2xl font-semibold mt-2">Hpx core utility</h1>
          <p className="font-extralight text-sm mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            tenetur tempore, sait voluptatum non qui fugiatepe s
          </p>
        </div>
      </div>
      <div className="text-center my-4">
        <Link href={"/"}>
          <a className="text-white underline underline-offset-2">
            See Hpx Advanced Techspecs
          </a>
        </Link>
      </div>
    </>
  );
};

export default Section5;
