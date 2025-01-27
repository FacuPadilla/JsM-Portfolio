import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your </span>
          digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me and let&apos;s discuss how I can help you achieve your
          goals.
        </p>
        <a
          href="mailto:facupadilla1904@gmail.com
        "
        >
          <MagicButton
            title="Lest's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-2">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Facundo Padilla
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className=" flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-75 rounded-lg border border-black-300 bg-black-200 saturate-180 w-10 h-10 cursor-pointer"
            >
              <a href={profile.ref}>
                <img width={20} height={20} src={profile.img} alt={""} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
