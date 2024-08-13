import Action from "@/lib/action";
import { Check, Star } from "lucide-react";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";

const Banner = async () => {
  const country = await Action();
  return (
    <div className="">
      <div
        style={{
          backgroundImage: "url('/GGImages/Banner/UK-Banner.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[110vh] bg-red-400"
      >
        <div className="grid lg:grid-cols-3 grid-cols-1 p-16 ">
          <div className="lg:col-span-2 ">
            <div className="text-yellow-500 font-extrabold text-2xl">
              GOGRADES ™ SPECIAL OFFER
            </div>
            <div className="text-green-400 font-extrabold text-xl pt-3">
              - AFFORDABLE - FASTEST - 100% SECURED & CONFIDENTIAL -
            </div>
            <div className="font-bold text-4xl text-gray-100 pt-2 ">
              {country} Premier Assignment Help
            </div>
            <div className="flex items-center pt-3 text-gray-100 font-medium text-lg">
              🔅 Retired Professors at the Helm 🔅 Retired Professors at the
              Helm
            </div>
            <div className="font-semibold text-white text-2xl pt-3 ">
              All Subjects Covered - Grab Your Deal Now!
            </div>
            <div className="flex items-center gap-4 py-3">
              <div className="font-semibold text-yellow-400 text-2xl">
                GET A+ GRADE
              </div>
              <button className="rounded-full py-3 px-4 flex items-center bg-green-700 text-white font-semibold text-lg hover:animate-bounce transition ease-in duration-200 delay-200">
                Order Now
              </button>
              <button
                aria-label="order"
                className="rounded-full py-3 px-4 flex items-center bg-gray-300 text-slate-800 font-semibold text-lg "
              >
                Get a Free Quote
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Image
                className=""
                src="/hero11.png"
                width={50}
                height={100}
                alt="hero11"
              ></Image>
              <div className="flex-col leading-none">
                <div className="font-medium text-white text-xl">
                  4500+ Experts
                </div>
                <div className="text-white font-light">
                  Online to help you 24x7
                </div>{" "}
              </div>

              <Image
                className=""
                src="/hero2.png"
                width={50}
                height={100}
                alt="hero11"
              ></Image>
              <div className="flex-col leading-none">
                <div className="font-medium text-white text-xl">
                  Rated 4.8/5
                </div>
                <div className="text-white font-light">Out of 5087 Reviews</div>{" "}
              </div>

              <Image
                className=""
                src="/hero3.png"
                width={50}
                height={100}
                alt="hero11"
              ></Image>
              <div className="flex-col leading-[0]">
                <div className="font-medium  text-white text-lg">FREE</div>
                <div className="text-white text-xl font-medium  ">
                  Turnitin Report
                </div>{" "}
              </div>
            </div>
            <div className="flex items-center py-3 gap-2">
              <div className="flex-col bg-blue-900 p-2 rounded-xl">
                <div className="flex items-center text-white font-normal">
                  <Check className="stroke-green-400 " />
                  Satisfaction Guaranteed{" "}
                </div>
                <div className="flex items-center text-white font-normal">
                  <Check className="stroke-green-400 " />
                  Experienced Teachers{" "}
                </div>
                <div className="flex items-center text-white font-normal">
                  <Check className="stroke-green-400 " />
                  Time Flexibility{" "}
                </div>
              </div>

              <div className="flex-col bg-blue-900 p-2 rounded-xl">
                <div className="flex items-center text-white font-normal">
                  <Check className="stroke-green-400 " />
                  Very Low Pricing
                </div>
                <div className="flex items-center text-white font-normal">
                  <Check className="stroke-green-400 " />
                  Fastest Turnaround Time
                </div>
                <div className="flex items-center text-white font-normal">
                  <Check className="stroke-green-400 " />
                  Professional Proofreaders{" "}
                </div>
              </div>

              <div className="flex-col bg-blue-900 p-2 rounded-xl">
                <div className="flex items-center text-white font-normal">
                  <Check className="stroke-green-400 " />
                  100% Secure & Trusty{" "}
                </div>
                <div className="flex items-center text-white font-normal">
                  <Check className="stroke-green-400 " />
                  24/7 Chat Support
                </div>
                <div className="flex items-center text-white font-normal">
                  <Check className="stroke-green-400 " />
                  Guaranteed Results{" "}
                </div>
              </div>
            </div>
            <div className="flex items-center py-3 gap-3">
              <Image
                src="/sitejaabr.svg"
                width={40}
                height={100}
                alt="sitejabber"
              ></Image>
              <div className="flex-col leading-none">
                <div className="flex text-xl font-medium text-gray-200">
                  Sitejabber
                </div>
                <div className="flex">
                  <Star className="stroke-yellow-500 fill-yellow-500" />
                  <Star className="stroke-yellow-500 fill-yellow-500" />
                  <Star className="stroke-yellow-500 fill-yellow-500" />
                  <Star className="stroke-yellow-500 fill-yellow-500" />
                </div>
              </div>

              <Image
                src="/reseller.svg"
                width={40}
                height={100}
                alt="sitejabber"
              ></Image>
              <div className="flex-col leading-none">
                <div className="flex text-xl font-medium text-gray-200">
                  Reseller Ratings
                </div>
                <div className="flex">
                  <Star className="stroke-yellow-500 fill-yellow-500" />
                  <Star className="stroke-yellow-500 fill-yellow-500" />
                  <Star className="stroke-yellow-500 fill-yellow-500" />
                  <Star className="stroke-yellow-500 fill-yellow-500" />
                </div>
              </div>

              <Image
                src="/favicon.webp"
                width={40}
                height={100}
                alt="sitejabber"
              ></Image>
              <div className="flex-col leading-none">
                <div className="flex text-xl font-medium text-gray-200">
                  Gogrades.org
                </div>
                <div className="flex">
                  <Star className="stroke-yellow-500 fill-yellow-500" />
                  <Star className="stroke-yellow-500 fill-yellow-500" />
                  <Star className="stroke-yellow-500 fill-yellow-500" />
                  <Star className="stroke-yellow-500 fill-yellow-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] max-w-[400px] rounded-lg overflow-hidden">
            <div
              className="relative  pr-10 pl-10 bg-black bg-center bg-cover"
              style={{ backgroundImage: "url('/GGImages/DLF/UK-DLF.jpg')" }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative flex items-center justify-center pt-3 ">
                <div className="text-2xl font-semibold text-white pr-1">
                  Pakistan{" "}
                </div>
                <div className="text-white font-semibold text-lg">
                  Special Discount
                </div>
              </div>
              <div className="relative text-sky-300 font-semibold text-center text-xl">
                Flat 50% OFF
              </div>
              <div className="relative text-center font-medium text-gray-200">
                Also Get Free Plagiarism Report Fill & Generate Discount Coupon
              </div>
            </div>
            <div className="bg-gray-300">
              <div className="flex items-center justify-center gap-2 pt-3">
                <Image
                  src="/guaranteed.svg"
                  width={100}
                  height={100}
                  alt="guarantee"
                ></Image>
                <Image
                  src="/moneyback.svg"
                  width={100}
                  height={100}
                  alt="guarantee"
                ></Image>
                <Image
                  src="/privacy-icon.svg"
                  width={70}
                  height={100}
                  alt="guarantee"
                ></Image>
              </div>
              <div className="p-7">
                <form action="">
                  <div className="flex items-center border border-gray-300 bg-white rounded-md py-2">
                    <div className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-user"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <input
                      className="outline-none"
                      type="text"
                      placeholder="Enter Fullname"
                      name="fullname"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
