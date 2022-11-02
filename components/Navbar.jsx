import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
      <Script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
      <nav className="flex md:items-center md:justify-between text-white transition-all duration-700 pt-3">
        <div>
          <h1 className="text-base">HPX</h1>
        </div>

        <div
          onClick={handleClick}
          className="md:hidden text-white text-2xl absolute top-0 right-2">
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <div className="mt-10 md:mt-0 ">
          <div className="flex items-center w-full justify-center">
            <ul
              className={`flex absolute md:static space-y-3 md:space-y-0 md:space-x-3 flex-col md:flex-row md:items-center  p-2 md:p-0 bg-stone-500 transition-all duration-500 left-1 md:bg-inherit bg-opacity-75 rounded ${
                open ? "top-10" : "top-[-480px]"
              }`}>
              <li className="hover:border-b-2 md:border-none">
                <Link href={"/"}>
                  <a>Sacrifice</a>
                </Link>
              </li>
              <li className="hover:border-b-2 md:border-none">
                <Link href={"/"}>
                  <a>Tokenomic</a>
                </Link>
              </li>
              <li className="hover:border-b-2 md:border-none">
                <Link href={"/"}>
                  <a>Airdrop</a>
                </Link>
              </li>
              <li className="hover:border-b-2 md:border-none">
                <Link href={"/"}>
                  <a>Team</a>
                </Link>
              </li>
              <li className="hover:border-b-2 md:border-none">
                <Link href={"/"}>
                  <a>FAQs</a>
                </Link>
              </li>
              <li className="hover:border-b-2 md:border-none">
                <Link href={"/"}>
                  <a>About</a>
                </Link>
              </li>
              <li className="">
                <div>
                  {" "}
                  <button className="mybtn1">Marketplace</button>
                </div>
              </li>
              <li>
                <div>
                  <button className="mybtn">Referral</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
