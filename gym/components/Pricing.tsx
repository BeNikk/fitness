import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const Pricing = () => {
  return (
    <div>
      <div className="">
        <p className="text-5xl text-[#F9EF3C] font-bold ml-[30%] lg:ml-[45%] mb-4">
          Pricing
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-12 gap-12">
          <div>
            <Card className="min-w-64 min-h-72">
              <CardHeader>
                <CardTitle>Rs 999/mo</CardTitle>
                <CardDescription>Standard</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Group training</p>
                <p>Shared Training</p>
                <p>Diet Consultation</p>
              </CardContent>
              <CardFooter>
                <Button>Contact Us</Button>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="min-w-64 min-h-72">
              <CardHeader>
                <CardTitle>Rs 5k/mo</CardTitle>
                <CardDescription>Personal Training</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Personal Training</p>
                <p>Diet consultation</p>
                <p>Nutrition counselling</p>
              </CardContent>
              <CardFooter>
                <Button>Contact Us</Button>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="min-w-64 min-h-72">
              <CardHeader>
                <CardTitle>1600/mo</CardTitle>
                <CardDescription>Couple Training</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Group training</p>
                <p>Shared Training</p>
                <p>Diet Consultation</p>
              </CardContent>
              <CardFooter>
                <Button>Contact Us</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
