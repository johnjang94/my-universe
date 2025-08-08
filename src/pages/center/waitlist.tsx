"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GoPerson } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { LuSchool } from "react-icons/lu";

type FormData = {
  name: string;
  email: string;
  university: string;
};

export default function Waitlist() {
  const [isClient, setIsClient] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit = (data: FormData) => {
    setSubmittedName(data.name);
    setShowModal(true);
    reset();
  };

  if (!isClient) return null;

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-96 text-center space-y-4 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold">🎉 You've signed up!</h2>
            <p className="text-gray-600">Thanks, {submittedName}!</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="mx-auto md:w-3/6 text-center space-y-12 py-24">
        <div className="space-y-3">
          <h1 className="font-bold md:text-4xl text-2xl">
            Be the First to Experience UniBot
          </h1>
          <p className="text-gray-400 text-xl w-5/6 md:w-full mx-auto">
            Join our exclusive waitlist and get early access to the future of
            university assistance.
          </p>
        </div>
        <div className="space-y-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 p-5 bg-white rounded-lg md:w-4/6 w-5/6 mx-auto"
          >
            <div>
              <h1 className="text-2xl">Join the Waitlist</h1>
              <p className="text-gray-400">
                Get notified when UniBot launches at your university
              </p>
            </div>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring focus-within:ring-indigo-300">
              <GoPerson className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Your full name"
                {...register("name", { required: "Full name is required" })}
                className="w-full outline-none"
              />
            </div>
            {errors.name?.message && (
              <p className="text-red-500 text-sm">
                {String(errors.name.message)}
              </p>
            )}

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring focus-within:ring-indigo-300">
              <CiMail className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Your email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format",
                  },
                })}
                className="w-full outline-none"
              />
            </div>
            {errors.email?.message && (
              <p className="text-red-500 text-sm">
                {String(errors.email.message)}
              </p>
            )}

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring focus-within:ring-indigo-300">
              <LuSchool className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Your university name"
                {...register("university", {
                  required: "University name is required",
                })}
                className="w-full outline-none"
              />
            </div>
            {errors.university?.message && (
              <p className="text-red-500 text-sm">
                {String(errors.university.message)}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition cursor-pointer"
            >
              {isSubmitting ? "Submitting..." : "Join waitlist"}
            </button>
          </form>
          <div>
            <p>
              Already <span className="text-blue-500">2,547</span> students
              waiting
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
