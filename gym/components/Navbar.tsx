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
    <div className="top-6 h-4 w-full">
      <div className="flex flex-row justify-evenly items-center">
        <div className="cursor-pointer">
          <Image
            src="/dumbbel-logo.svg"
            alt="dumbbel logo"
            height={36}
            width={36}
            priority={true}
          />
        </div>
        <div className="hidden lg:flex lg:flex-row lg:gap-20">
          {items.map((item) => {
            return (
              <div key={item.key}>
                <a href={`#${item.title}`}>
                  <p className="text-white font-bold hover:text-[#F9EF3C]">
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
