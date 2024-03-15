"use client";
import Navbar from "./Navbar";
import Subheading from "./typed";

const MainPage = () => {
  return (
    <div
      className="flex flex-col relative min-h-screen bg-contain bg-no-repeat bg-center "
      style={{ backgroundImage: 'url("/main.jpg")' }}
    >
      <Navbar />
      <div className="ml-[25%] mt-[20%]  lg:ml-[15%] lg:mt-[12%] mr-[3%]">
        <p className="text-7xl font-bold text-[#7F00FF] ">Step-Up Fitness</p>
      </div>

      <div className="h-[100px] ml-[25%] lg:ml-[15%] mt-12">
        <Subheading />
      </div>
      <div>
        <a
          href="/#Contact us"
          className="bg-[#7F00FF] text-white p-4 rounded-lg mt-20 lg:mt-4 text-lg font-bold ml-[34%] lg:ml-[15%]"
        >
          Contact us
        </a>
      </div>
    </div>
  );
};

export default MainPage;
