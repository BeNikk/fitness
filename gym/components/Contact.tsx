"use client";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";

const Contact = () => {
  return (
    <div className="ml-[10%] lg:ml-[40%]">
      <Card className="mt-12 max-w-96 bg-black border-black">
        <CardHeader className="text-5xl font-bold text-[#7F00FF]">
          Contact Us
        </CardHeader>
        <CardDescription className="text-white font-semibold text-lg px-4">
          We are committed to make you fit
        </CardDescription>
        <CardContent>
          <a className="flex flex-row items-center" href="">
            <img
              src="/alternate-map-marker.svg"
              alt=""
              className="bg-white w-8 h-8 mt-16 rounded-lg"
            />
            <p className="text-white text-xl lg:text-2xl mt-16 ml-8 font-bold">
              Jane street new york
            </p>
          </a>
          <a className="flex flex-row items-center" href="">
            <img
              src="/instagram.svg"
              alt=""
              className="bg-white w-8 h-8 mt-16 rounded-lg"
            />
            <p className="text-white text-xl lg:text-2xl mt-16 ml-8 font-bold">
              Follow us on Instagram{" "}
            </p>
          </a>
          <a
            className="flex flex-row items-center"
            href="https://wa.me/918130016009"
          >
            <img
              src="/whatsappp.svg"
              alt=""
              className=" w-8 h-8 mt-16 rounded-lg"
            />
            <p className="text-white text-xl lg:text-2xl mt-16 ml-8 font-bold">
              Text us on Whatsapp{" "}
            </p>
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
