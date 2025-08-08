import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { SlEnergy } from "react-icons/sl";

export default function Intro() {
  return (
    <div className="text-white mx-auto font-bold md:w-3/6 text-center space-y-8 py-14">
      <div>
        <h1 className="md:text-6xl text-4xl">Your Smart</h1>
        <h1 className="md:text-6xl text-4xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          University Assistant
        </h1>
      </div>
      <div>
        <p className="font-normal text-gray-300 text-2xl w-5/6 mx-auto">
          Meet UniBot - the intelligent chatbot designed to help students
          navigate university life with ease. Get instant answers, academic
          support, and personalized guidance 24/7.
        </p>
      </div>
      <div className="md:flex md:items-center space-x-3 justify-center">
        <Link href="">
          <button className="px-5 py-2 bg-white text-blue-500 gap-5 rounded-lg flex items-center md:hidden w-5/6 mx-auto">
            <span className="mx-auto">Join Waitlist</span>
          </button>
        </Link>
        <Link href="">
          <button className="px-5 py-2 bg-white text-blue-500 gap-5 rounded-lg md:flex hidden items-center mx-auto">
            <span className="text-center">Join Waitlist</span> <FaArrowRight />
          </button>
        </Link>
        <Link href="">
          <button className="px-5 py-2 bg-white text-blue-500 gap-5 rounded-lg flex items-center md:hidden w-5/6 mx-auto">
            <span className="mx-auto">Learn More</span>
          </button>
        </Link>
        <Link href="">
          <button className="px-5 py-2 bg-white text-blue-500 gap-5 rounded-lg md:flex hidden items-center mx-auto">
            Learn More
          </button>
        </Link>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-5 space-y-8 md:space-y-0">
        <div className="space-y-2">
          <div className="p-5 rounded-full bg-white/20 w-fit mx-auto">
            <IoChatbubbleOutline className="text-white" />
          </div>
          <div className="w-3/6 md:w-full mx-auto">
            <h1 className="font-bold">Instant Answers</h1>
            <p className="text-gray-400 text-sm">
              Get immediate responses to your academic and campus questions
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="p-5 rounded-full bg-white/20 w-fit mx-auto">
            <GoPeople className="text-white" />
          </div>
          <div className="w-3/6 md:w-full mx-auto">
            <h1 className="font-bold">Personalized Support</h1>
            <p className="text-gray-400 text-sm">
              Tailored guidance based on your academic journey and interests
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="p-5 rounded-full bg-white/20 w-fit mx-auto">
            <SlEnergy className="text-white" />
          </div>
          <div className="w-3/6 md:w-full mx-auto">
            <h1 className="font-bold">Always Active</h1>
            <p className="text-gray-400 text-sm">
              24/7 accessibility whenever you need academic assistance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
