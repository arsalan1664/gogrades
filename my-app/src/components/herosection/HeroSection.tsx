import { HeroSectionCard } from "@/components/herosection/Herosection_card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";

function HeroSection() {
  return (
    <div className="h-screen w-screen pt-10">
      <div className="flex items-center justify-between h-screen w-[80%] text-gray-300 mx-auto">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            UX/UI Design Courses
            <br />
            On-demand & Online{"\n                  "}
          </h1>
          <p className="text-lg mb-6 w-[400px]">
            Kickstart your career, advance in your role, or upskill as a
            freelancer with industry-leading courses and products.
          </p>

          <div className="flex space-x-4 mb-6">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
              View courses
            </Button>
            <Button className="bg-transparent hover:bg-white hover:text-black border border-white">
              Success Stories
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            {/* <Avatar>
              <AvatarImage
                alt="Student 1"
                src="/placeholder.svg?height=32&width=32"
              />
            </Avatar>
            <Avatar>
              <AvatarImage
                alt="Student 2"
                src="/placeholder.svg?height=32&width=32"
              />
            </Avatar>
            <Avatar>
              <AvatarImage
                alt="Student 3"
                src="/placeholder.svg?height=32&width=32"
              />
            </Avatar>
            <Avatar>
              <AvatarImage
                alt="Student 4"
                src="/placeholder.svg?height=32&width=32"
              />
            </Avatar>
            <Avatar>
              <AvatarImage
                alt="Student 5"
                src="/placeholder.svg?height=32&width=32"
              />
            </Avatar> */}
            <span className="text-yellow-500">10,000+ students</span>
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
            <Star className="text-yellow-500" />
          </div>
        </div>
        <HeroSectionCard />
      </div>
    </div>
  );
}

export default HeroSection;
