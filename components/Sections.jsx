import React from "react";
import Image from "next/image";
import img1 from "../Images/hpx-d.png";
import pbtn from "../Images/plybtn.png";
import img2 from "../Images/box_1.png";
const Sections = () => {
  const handleClick = () => {
    alert("Ready on Client Req");
  };

  return (
    <>
      <section className="flex flex-col md:flex-row pt-8 items-center">
        <div className="flex-1 md:w-[50%]">
          <div>
            <h1 className="text-white text-2xl  md:text-5xl font-bold text-center md:text-left">
              Community owned NFT market place with a{" "}
              <span className="fancy-text font-extrabold">10,000x</span> native
              token{" "}
            </h1>
            <h1 className="text-white text-l font-semibold text-center md:text-left mt-2">
              From Community, for comunity
            </h1>
          </div>
          <div>
            <p className="text-stone-300 my-8 text-center md:text-left text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              laborum recusandae quasi incidunt corrupti quae, nesciunt, eaque
              cumque soluta molestias quibusdam quo quas facere repudiandae
              fugit ipsam, suscipit illo id.
            </p>
          </div>
          <div className="flex space-x-3 mt-3 items-center justify-center md:justify-start">
            <div>
              <button className="mybtn1">Marketplace</button>
            </div>{" "}
            <div className="mt-2">
              <Image height={38} src={pbtn} alt="" />
            </div>
            <div>
              <h1 className="font-semibold text-white">More About HPX</h1>
            </div>
          </div>
        </div>
        <div
          onClick={handleClick}
          className="flex items cursor-pointer md:w-[50%] hidden md:block">
          <Image src={img1} alt="" />
        </div>
      </section>
      {/* _________________________________2nd Section__________________________________ */}

      <section className="flex flex-col md:flex-row gap-3 items-center justify-center text-white mt-8">
        <div className="px-4 py-8 md:p-12 border-[1.5px] border-[#0cc77d] bg-[#13161B] rounded-md flex-1">
          <h1 className="text-xl font-semibold">
            <span className="fancy-text">
              Stake <Image src={img2} alt="" />
              $Hpx, earn
              <Image src={img2} alt="" />
            </span>
            PLS, <Image src={img2} alt="" />
            pHex,
            <Image src={img2} alt="" />
            PLSX and
            <Image src={img2} alt="" /> and USDL and daily and reward
          </h1>

          <p className="text-sm text-stone-300 mt-3">
            To reward our earliest sacricers we made a bonus for them, the
            earlier you sacrifice the more points you will earn!
          </p>
          <button className="mybtn1 mt-1">Marketplace</button>
        </div>
        <div className="px-4 py-8 border-[1.5px] border-[#0cc77d] bg-[#13161B] rounded-md flex-1">
          <h1 className="text-xl font-semibold">
            The usefulness of Hpx for Pulsechain
          </h1>
          <p className="text-sm text-stone-300 my-3">
            By making Pulsechain, PulseX and pHex a pay-per-listing method
            (which no other pulse nft marketplace has done). We are increasing
            their prices exponentially.
            <br />
            <br />
            Imagine this, if someone wants to buy an NFT listed by pHex, Pls,
            PlsX, they will be forced to trade them or buy them, in order to pay
            for their favorite NFTs. And above all, there will be more than
            20,000,000 NFTs available on Hpx! Thats almost x100 more than all
            p-erc-20 available on PulseChain!
          </p>
        </div>
      </section>

      {/* _____________3rd section______________ */}
    </>
  );
};

export default Sections;
