"use client";
const About = () => {
  return (
    <div>
      <div className="flex flex-col m-2 items-center justify-evenly lg:flex-row lg:gap-16 lg:ml-[7%] mr-6">
        <div className="lg:hidden">
          <div className="text-white font-bold text-5xl">About us</div>
        </div>
        <div className="w-auto h-auto mt-8">
          <img src="/about.jpg" alt="gym image" />
        </div>
        <div>
          <div className="mt-8 flex flex-col ">
            <div className=" lg:text-xl lg:font-semibold lg:text-[#7F00FF] lg:mb-4">
              Know
            </div>
            <h1 className=" lg:text-white lg:font-bold lg:text-6xl">
              About us
            </h1>
            <hr className="bg-[#7F00FF] ml-8 mt-4 h-1 w-16"></hr>
            <div className="m-4 mt-5">
              <p className="text-white font-semibold text-xl ml-8 text-justify">
                Welcome to Set Fitness, where fitness meets tradition. Founded
                by passionate fitness enthusiast and owner, Rajputana Gym offers
                a holistic approach to health and wellness. Nestled in the heart
                of our community, we pride ourselves on blending modern fitness
                techniques with the timeless values of our heritage. Our
                experienced trainers provide personalized workout plans tailored
                to your goals, ensuring every session is both challenging and
                rewarding. With state-of-the-art equipment and a supportive
                atmosphere, we strive to empower every individual on their
                fitness journey. Join us at Set Fitness Gym and embrace a
                healthier lifestyle rooted in tradition and vitality.
              </p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default About;
