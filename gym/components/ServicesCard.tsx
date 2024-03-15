"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const serve = [
  {
    title: "Personal Training",
    description:
      "Offer personalized one-on-one training sessions with certified trainers to help clients achieve their fitness goals effectively.",
    key: 1,
    image: "/service1.jpg",
  },
  {
    title: "Group Fitness Classes",
    description:
      "Provide a variety of group classes such as yoga, spin, HIIT, Zumba, and more, catering to different fitness levels and interests",
    key: 2,
    image: "/service2.jpg",
  },
  {
    title: "Nutrition counselling",
    description:
      " Offer nutrition consultations to educate members on healthy eating habits and create customized meal plans to complement their fitness routines.",
    image: "/service3.jpg",
  },
];
import React from "react";

const ServicesCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around gap-8 m-16 ">
      {serve.map((service) => {
        return (
          <Card key={service.key} className=" bg-black mb-4">
            <CardHeader>
              <CardTitle className="text-[#7F00FF]">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-white">
              <p className="font-bold">{service.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ServicesCard;
