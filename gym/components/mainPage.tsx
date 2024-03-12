"use client";
import Navbar from "./Navbar";
import Subheading from "./typed";

const MainPage = () => {
  return (
    <div
      className="flex flex-col justify-around  relative min-h-screen bg-contain bg-no-repeat	 bg-right"
      style={{ backgroundImage: 'url("/main.jpg")' }}
    >
      <Navbar />

      <Subheading />
    </div>
  );
};

export default MainPage;
