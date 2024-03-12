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
      <div className="ml-[30%] mt-[23%]  lg:ml-[15%] lg:mt-[12%] mr-[3%]">
        <p className="text-7xl font-bold text-[#F9EF3C]">Body Garage</p>
      </div>

      <div className="h-[100px] ml-[30%] lg:ml-[15%] mt-12">
        <Subheading />
      </div>
      <div>
        <button className="bg-[#F9EF3C] p-4 rounded-lg mt-20 lg:mt-4s text-black text-lg font-bold ml-[34%] lg:ml-[17%]">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default MainPage;
