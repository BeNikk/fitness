"use client";
import React from "react";
import { Card, CardHeader } from "./ui/card";

const Contact = () => {
  return (
    <div className=" mt-20">
      <div>
        <p className="text-[#7F00FF] font-bold text-5xl ml-[15%] lg:ml-[44%]">
          Contact Us
        </p>
      </div>
      <a
        className="ml-[10%] lg:ml-[30%] mt-20 flex flex-row gap-4 items-center"
        href="https://www.google.com/maps/dir//488%2F6,+Sagar+Market,+Block+A,+Dilshad+Garden,+New+Delhi,+Delhi,+110095/@28.6787223,77.2322855,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cfb3c8f6b9077:0xf65c771ef15d92ac!2m2!1d77.3146869!2d28.6787472?entry=ttu"
      >
        <img
          src="/home.svg"
          alt="gmail logo"
          className="h-8 w-8 lg:h-12 lg:w-12 bg-white rounded-md "
        />
        <p className="text-white text-3xl font-semibold">
          01 Ram Vihar,Delhi-110092
        </p>
      </a>
      <a
        className="ml-[10%] lg:ml-[30%] mt-20 flex flex-row gap-4 items-center"
        href="https://www.instagram.com/setfitness.ramvihar/"
      >
        <img
          src="/instagram.svg"
          alt="gmail logo"
          className="h-8 w-8 lg:h-12 lg:w-12  "
        />
        <p className="text-white text-3xl font-semibold">setfitness.ramvihar</p>
      </a>
      <a
        className="ml-[10%] lg:ml-[30%] lg:w-96 w-52 rounded-lg mt-20 flex flex-row gap-4 items-center bg-green-500"
        href="https://wa.me/918130016009"
      >
        <img
          src="/whatsapp.svg"
          alt="gmail logo"
          className="h-8 w-8 lg:h-12 lg:w-12 bg-green-500 p-2"
        />
        <p className="text-white text-3xl font-semibold">Chat with us</p>
      </a>
      <div className="ml-[10%] lg:ml-[30%] mt-20 flex flex-row gap-4 items-center">
        <img
          src="/phone.svg"
          alt="gmail logo"
          className="h-8 w-8 lg:h-12 lg:w-12 bg-white rounded-md "
        />
        <p className="text-white text-3xl font-semibold">8130016009</p>
      </div>
    </div>
  );
};

export default Contact;
