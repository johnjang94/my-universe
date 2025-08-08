import Link from "next/link";
import React from "react";

export default function TopLayer() {
  return (
    <div className="flex justify-between py-5 items-center">
      <div className="flex space-x-2 items-center cursor-pointer">
        <p className="bg-blue-600 text-white rounded-lg p-2">AI</p>
        <p className="font-bold text-2xl">UniBot</p>
      </div>
      <div className="space-x-8 text-gray-400 text-xl hidden md:block">
        <button className="cursor-pointer">Features</button>
        <button className="cursor-pointer">About</button>
        <button className="cursor-pointer">Contact</button>
      </div>
      <div>
        <Link href="">
          <button className="bg-blue-600 text-white rounded-lg p-2 cursor-pointer">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
}
