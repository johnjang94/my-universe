import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { SlEnergy } from "react-icons/sl";
import Image from "next/image";
import lexi_2 from "@/assets/lexi_2.png";

export default function Intro() {
  return (
    <div className="text-white mx-auto font-bold md:w-3/6 text-center space-y-8 py-14">
      <div className="mx-auto bg-white/80 rounded-full w-fit">
        <Image src={lexi_2} alt="My logo" width={200} height={200} />
      </div>
      <div className="space-y-3">
        <h1 className="md:text-6xl text-4xl">Lexi,</h1>
        <h1 className="md:text-5xl text-4xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Your personal academic companion
        </h1>
      </div>
      <div className="w-5/6 text-start mx-auto">
        <p className="font-normal text-gray-300 text-2xl">Try our beta.</p>
        <div className="md:flex md:items-center space-x-3 justify-between font-medium">
          <p>need tips on prompting?</p>
          <p>
            click{" "}
            <span className="p-1 bg-white rounded-lg hover:underline text-black hover:cursor-pointer">
              here
            </span>{" "}
            for more information.
          </p>
        </div>
      </div>
      <div className="bg-white backdrop-blur-md rounded-xl space-y-3 md:w-full w-11/12 mx-auto shadow-[rgba(0,0,0,0.24)_0px_3px_8px]">
        <div className="rounded-lg px-3 py-1 h-40 overflow-y-auto text-black text-sm"></div>
        <form className="flex items-center space-x-2 p-2">
          <input
            type="text"
            placeholder="Ask Lexi anything..."
            className="flex-1 border-t-2 border-gray-200 text-black rounded-lg focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-400 text-white px-3 rounded-lg hover:bg-blue-500 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
