import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div>
      <div className="ml-[20%] lg:ml-[40%] mt-16 ">
        <div className="text-[#F9EF3C] text-xl font-bold">Our</div>
        <h1 className="text-white font-bold text-6xl "> Services</h1>
      </div>
      <div>
        <ServicesCard />
      </div>
    </div>
  );
};

export default Services;
