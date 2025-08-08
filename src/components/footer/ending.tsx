import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Image from "next/image";
import logo from "@/assets/lexi.png";

export default function Ending() {
  return (
    <div className="md:flex md:flex-1 p-5 space-y-10 bg-white text-center md:text-start">
      <Image
        src={logo}
        alt="My logo"
        width={100}
        height={50}
        className="mx-auto md:mx-0"
      />
      <div className="max-w-6xl mx-auto md:px-6 md:grid md:grid-cols-3 gap-8 text-sm text-gray-700 space-y-10 md:space-y-0">
        <div>
          <h3 className="font-bold mb-4 text-gray-900">Product</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Demo
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-gray-900">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-gray-900">Contact</h3>
          <div className="flex space-x-4 text-xl justify-center md:justify-start">
            <a href="#" aria-label="Twitter" className="hover:text-blue-500">
              <FaTwitter />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-blue-500">
              <FaGithub />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
              <FaLinkedin />
            </a>
            <a
              href="mailto:info@example.com"
              aria-label="Email"
              className="hover:text-red-500"
            >
              <CiMail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
