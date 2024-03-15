"use client";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const test = [
  {
    title: "Strength and Empowerment",
    description:
      "Joining Set Fitness Gym has been a life-changing experience. The trainers here don't just focus on physical strength but also empower you mentally. Their personalized training programs helped me surpass my limits, both in the gym and in life",
    person: "Nikhil Bhatt",
    personDescription: "College Student",
    img: "/gymboy1.jpg",
  },
  {
    title: " Community and Support",
    description:
      "At Set Fitness Gym, it's not just about lifting weights; it's about lifting each other up. The sense of community here is incredible. Whether you're a beginner or an experienced athlete, you'll find unwavering support and encouragement from both the trainers and fellow members.",
    person: "Reeta",
    personDescription: "Home maker",
    img: "/girl3.jpg",
  },

  {
    title: " Results-Driven Approach",
    description:
      "I've tried many gyms before, but none compare to Set Fitness Gym. The trainers here are dedicated to helping you achieve your goals. With their expert guidance and tailored workout plans, I've seen incredible results in a short amount of time. It's not just a gym; it's a place where dreams become realities.",
    person: "Sagar Sharma",
    personDescription: "Software Engineer",
    img: "/gymboy2.jpg",
  },
  {
    title: "Cleanliness and Professionalism",
    description:
      "Cleanliness and professionalism are top priorities at Set Fitness Gym. From the sparkling clean facilities to the friendly staff, every aspect of the gym exudes professionalism. I feel safe and comfortable working out here, knowing that hygiene and customer satisfaction are taken seriously",
    person: "Niharika",
    personDescription: "Consultant",
    img: "/girl2.jpg",
  },

  {
    title: "Motivation and Inspiration",
    description:
      "Set Fitness Gym isn't just a place to exercise; it's a source of motivation and inspiration. The positive energy and enthusiasm from the trainers are contagious, pushing you to be the best version of yourself. I've never felt more motivated to achieve my fitness goals than I do here",
    person: "Vijendra chauhan",
    personDescription: "Police inspector(retired)",
    img: "/boy3.jpg",
  },
];
const Testimonials = () => {
  return (
    <div
      className="bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: 'url("/main.jpg")' }}
    >
      <div>
        <div className="text-white font-bold text-5xl lg:ml-[35%] ml-[11%] ">
          What people says about us
        </div>
        <div className="flex flex-col m-2 items-center justify-evenly lg:flex-row lg:gap-16 lg:ml-[7%] mr-6">
          <div>
            <div className="mt-8 flex flex-col ">
              <div className=" lg:text-xl lg:font-semibold lg:text-[#7F00FF] lg:mb-4"></div>

              <div className="m-4 mt-5 ml-[10%] lg:ml-[35%]">
                <Carousel className="w-[400px] lg:w-[600px]">
                  <CarouselContent>
                    {test.map((index) => (
                      <CarouselItem key={index.title}>
                        <div className="">
                          <Card className="bg-black w-[350px] lg:w-[400px] m-4 ml-2 h-auto lg:m-8">
                            <CardTitle>
                              <Avatar className="mt-4 w-20 h-20 ml-[10%] lg:ml-4">
                                <AvatarImage src={index.img} className="" />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>

                              <p className="mt-2 m-2 font-bold p-4 text-3xl lg:text-3xl text-[#7F00FF]">
                                {index.title}
                              </p>
                            </CardTitle>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <span className="text-lg font-semibold text-white">
                                {index.description}
                              </span>
                            </CardContent>
                            <CardFooter>
                              <div className="text-white text-xl font-semibold">
                                {index.person}
                              </div>
                              <br />
                              sss
                              <div className="text-white text-md">
                                {index.personDescription}
                              </div>
                            </CardFooter>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden lg:block"></CarouselPrevious>
                  <CarouselNext className="hidden lg:block"></CarouselNext>
                </Carousel>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
