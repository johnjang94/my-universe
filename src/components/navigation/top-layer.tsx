import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/assets/lexi.png";

export default function TopLayer() {
  return (
    <div className="flex justify-between py-5 items-center">
      <div>
        <Image src={logo} alt="My logo" width={50} height={50} />
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
