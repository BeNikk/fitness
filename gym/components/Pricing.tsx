"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "./ui/button";

const Pricing = () => {
  return (
    <div>
      <div className="">
        <p className="text-5xl text-[#7F00FF] font-bold ml-[30%] lg:ml-[45%] mb-4">
          Pricing
        </p>
        <Carousel className="ml-[10%]">
          <CarouselContent>
            <CarouselItem className=" basis-1/2  md:basis-1/2 lg:basis-1/3 ">
              <Card className="min-w-64 min-h-72 max-w-72 ">
                <CardHeader>
                  <CardTitle className="">Rs 4999/mo</CardTitle>
                  <CardDescription className="">Standard</CardDescription>
                </CardHeader>
                <CardContent className="">
                  <p>Group training</p>
                  <p>Shared Training</p>
                  <p>Diet Consultation</p>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-1/2 lg:basis-1/3  ">
              <Card className="min-w-64 min-h-72 max-w-72">
                <CardHeader>
                  <CardTitle>Rs 40k/12mo</CardTitle>
                  <CardDescription>Popular</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Personal Training</p>
                  <p>Diet consultation</p>
                  <p>Nutrition counselling</p>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-1/2 lg:basis-1/3">
              <Card className="min-w-64 min-h-72 max-w-72 ">
                <CardHeader className="">
                  <CardTitle>27k/6mo</CardTitle>
                  <CardDescription className="">Special</CardDescription>
                </CardHeader>
                <CardContent className="">
                  <p>Group training</p>
                  <p>Shared Training</p>
                  <p>Diet Consultation</p>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Pricing;
