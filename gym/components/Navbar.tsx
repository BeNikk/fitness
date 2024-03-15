"use client";
import Image from "next/image";

const items = [
  {
    title: "About",
    key: 2,
  },
  {
    title: "Services",
    key: 3,
  },
  {
    title: "Testimonials",
    key: 4,
  },
  {
    title: "Pricing",
    key: 5,
  },
  {
    title: "Contact us",
    key: 6,
  },
];

const Navbar = () => {
  return (
    <div className="mt-4 h-4 w-full">
      <div className="flex flex-row justify-evenly items-center">
        <div className="cursor-pointer">
          <p className="text-[#7F00FF] font-bold text-lg  ">SetFitness</p>
        </div>
        <div className="hidden lg:flex lg:flex-row lg:gap-20">
          {items.map((item) => {
            return (
              <div key={item.key}>
                <a href={`#${item.title}`}>
                  <p className="text-white font-bold hover:text-[#7F00FF]">
                    {item.title}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
