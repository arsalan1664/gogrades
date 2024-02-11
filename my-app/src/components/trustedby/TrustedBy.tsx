import {
  FlagOffIcon,
  HexagonIcon,
  DribbbleIcon,
  GroupIcon,
  DollarSignIcon,
  FacebookIcon,
  MagnetIcon,
  RedoIcon,
  RadioIcon,
  CircleIcon,
  RadiationIcon,
  PlaneLandingIcon,
} from "lucide-react";
import React from "react";

function TrustedBy() {
  return (
    <div className="relative h-screen w-screen ">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="container px-6 py-16 text-center text-gray-300 ">
        <h1 className="text-4xl font-bold mb-2">Trusted by 85,000 Students</h1>
        <p className="text-xl mb-8">
          connecting with over 4500 Trusted Experts.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 items-center justify-center">
          <FlagOffIcon className="h-12" />
          <HexagonIcon className="h-12" />
          <DribbbleIcon className="h-12" />
          <GroupIcon className="h-12" />
          <DollarSignIcon className="h-12" />
          <FacebookIcon className="h-12" />
          <MagnetIcon className="h-12" />
          <RedoIcon className="h-12" />
          <RadioIcon className="h-12" />
          <CircleIcon className="h-12" />
        </div>
      </div>
    </div>
  );
}

export default TrustedBy;
