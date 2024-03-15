"use client";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div>
      <div className="ml-[20%] lg:ml-[40%] mt-16 ">
        <div className="text-[#7F00FF] text-xl font-bold">Our</div>
        <h1 className="text-white font-bold text-6xl "> Services</h1>
      </div>
      <div>
        <ServicesCard />
      </div>
    </div>
  );
};

export default Services;
