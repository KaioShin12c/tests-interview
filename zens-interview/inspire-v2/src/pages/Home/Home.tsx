import {
  HomeIcon,
  FolderIcon,
  MessageIcon,
  MessagesIcon,
  ModulesIcon,
  SmsIcon,
  StickyIcon,
  TeamIcon,
  BookIcon,
  BookmarkIcon,
  Message2Icon,
} from "@/assets/icons";

import "./Home.css";

import Logo from "@/assets/images/logo.png";
import LogoVertical from "@/assets/images/Lightb.png";
import Image1 from "@/assets/images/image1.png";
import Image2 from "@/assets/images/image2.png";
import Image3 from "@/assets/images/image3.png";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex">
        <div className="w-[240px] 2xl:w-[372px] bg-[#FCFCFC] shadow-lg shadow-gray-500/50">
          <div className="px-6 mb-8">
            <img src={Logo} alt="Logo" />
          </div>
          <ul className="flex flex-col gap-2 xl:gap-4">
            <li className="h-9 2xl:h-16 flex items-center gap-4 text-[20px] 2xl:text-29px text-black-color font-light pl-6 cursor-pointer active">
              <HomeIcon className="w-6 h-6 2xl:w-[43px] 2xl:h-[43px]" />
              HOME
            </li>
            <li className="h-9 2xl:h-16 flex items-center gap-4 text-[20px] 2xl:text-29px text-black-color font-light pl-6 cursor-pointer">
              <ModulesIcon className="w-6 h-6 2xl:w-[43px] 2xl:h-[43px]" />
              MODULES
            </li>
            <li className="h-9 2xl:h-16 flex items-center gap-4 text-[20px] 2xl:text-29px text-black-color font-light pl-6 cursor-pointer">
              <TeamIcon className="w-6 h-6 2xl:w-[43px] 2xl:h-[43px]" />
              TEAM
            </li>
            <li className="h-9 2xl:h-16 flex items-center gap-4 text-[20px] 2xl:text-29px text-black-color font-light pl-6 cursor-pointer">
              <MessagesIcon className="w-6 h-6 2xl:w-[43px] 2xl:h-[43px]" />
              NETWORK&CHAT
            </li>
            <li className="h-9 2xl:h-16 flex items-center gap-4 text-[20px] 2xl:text-29px text-black-color font-light pl-6 cursor-pointer ">
              <FolderIcon className="w-6 h-6 2xl:w-[43px] 2xl:h-[43px]" />
              RESOURCES
            </li>
            <li className="h-9 2xl:h-16 flex items-center gap-4 text-[20px] 2xl:text-29px text-black-color font-light pl-6 cursor-pointer">
              <StickyIcon className="w-6 h-6 2xl:w-[43px] 2xl:h-[43px]" />
              EVENTS
            </li>
            <li className="h-9 2xl:h-16 flex items-center gap-4 text-[20px] 2xl:text-29px text-black-color font-light pl-6 cursor-pointer">
              <MessageIcon className="w-6 h-6 2xl:w-[43px] 2xl:h-[43px]" />
              HELP&FAQ
            </li>
            <li className="h-9 2xl:h-16 flex items-center gap-4 text-[20px] 2xl:text-29px text-black-color font-light pl-6 cursor-pointer">
              <SmsIcon className="w-6 h-6 2xl:w-[43px] 2xl:h-[43px]" />
              CONTACT US
            </li>
          </ul>
        </div>
        <div className="flex-1 px-4 2xl:px-6 py-6 h-full overflow-auto">
          <div className="flex gap-4 2xl:gap-6">
            <div className="flex-1">
              <div className="leading-none text-primary-color text-4xl 2xl:text-69px font-bold mb-4 2xl:mb-5">
                Welcome <span className="text-black-color">Matteo</span>
              </div>
              <div className=" inline-block w-3/4 text-center text-primary-color text-lg 2xl:text-29px font-bold py-2 2xl:py-5 rounded-md mb-4 2xl:mb-7 shadow-[0_0_3px_rgb(0,0,0,0.16)]">
                ANNOUNCEMENTS
              </div>
              <div>
                <p className="text-lg 2xl:text-32px text-secondary-text mb-6 2xl:mb-7">
                  Progress Overview
                </p>
                <div className="grid grid-cols-2 2xl:mb-4">
                  <div>
                    <svg className="w-full h-[200px] 2xl:h-[340px]">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="calc(100% / 2 - 75px)"
                        fill="none"
                        stroke="red"
                        strokeWidth="10%"
                      ></circle>
                      <circle
                        cx="50%"
                        cy="50%"
                        r="calc(100% / 2 - 75px)"
                        fill="none"
                        stroke="green"
                        style={{
                          strokeDashoffset: "197.92px",
                          strokeDasharray: "282.743px",
                          strokeWidth: "10%",
                        }}
                      ></circle>
                    </svg>
                  </div>
                  <div className="leading-tight bg-third-color rounded-lg px-4 py-5 2xl:p-7 text-lg 2xl:text-32px text-secondary-text">
                    Show progression in various modules and major benchmarks
                    completed for completion.
                  </div>
                </div>
              </div>
              <div>
                <p className="text-lg 2xl:text-32px text-secondary-text mb-6 2xl:mb-7">
                  My Modules & Courses
                </p>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] 2xl:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] auto-rows-auto gap-4">
                  {/* Card 1 */}
                  <div className="relative h-[300px] 2xl:h-[360px] rounded-xl">
                    <img
                      src={Image1}
                      alt="image1"
                      className="w-full h-[280px] object-cover object-top rounded-xl"
                    />
                    <div className="absolute bg-white bottom-0 left-0 right-0 shadow-regular shadow-gray-300 rounded-xl p-3 2xl:p-4">
                      <div>
                        <p className="leading-none text-sm 2xl:text-21px text-third-text line-clamp-2">
                          Pre-Course Questionnaire
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div></div>
                        <div className="w-8 h-8 2xl:w-11 2xl:h-11 rounded-full bg-primary-color"></div>
                      </div>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="relative 2xl:h-[360px] rounded-xl">
                    <img
                      src={Image2}
                      alt="image2"
                      className="w-full h-[280px] object-cover object-top rounded-xl"
                    />
                    <div className="absolute bg-white bottom-0 left-0 right-0 shadow-regular shadow-gray-300 rounded-xl p-3 2xl:p-4">
                      <div className="flex mb-4 gap-2">
                        <p className="leading-none text-sm 2xl:text-21px text-third-text line-clamp-2">
                          What is translation in academic research laboratories
                        </p>
                        <div>
                          <div className="w-8 h-8 2xl:w-11 2xl:h-11 rounded-full shadow-md shadow-gray-400"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 2xl:gap-2">
                          <BookIcon className="w-4 h-4 2xl:w-5 2xl:h-5" />
                          <span className="text-sm 2xl:text-lg text-third-text">
                            Module 5
                          </span>
                        </div>
                        <div className="flex items-center gap-1 2xl:gap-2">
                          <span className="text-sm 2xl:text-lg text-third-text">
                            Lesson 2
                          </span>
                          <BookmarkIcon className="w-4 h-4 2xl:w-5 2xl:h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="relative  2xl:h-[360px] rounded-xl">
                    <img
                      src={Image3}
                      alt="image3"
                      className="w-full h-[280px] object-cover object-top rounded-xl"
                    />
                    <div className="absolute bg-white bottom-0 left-0 right-0 shadow-regular shadow-gray-300 rounded-xl p-3 2xl:p-4">
                      <div className="flex mb-4 gap-2">
                        <p className="leading-none text-sm 2xl:text-21px text-third-text line-clamp-2">
                          What is translation in academic research laboratories
                        </p>
                        <div>
                          <div className="w-8 h-8 2xl:w-11 2xl:h-11 rounded-full shadow-md shadow-gray-400"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 2xl:gap-2">
                          <BookIcon className="w-4 h-4 2xl:w-5 2xl:h-5" />
                          <span className="text-sm 2xl:text-lg text-third-text">
                            Module 5
                          </span>
                        </div>
                        <div className="flex items-center gap-1 2xl:gap-2">
                          <span className="text-sm 2xl:text-lg text-third-text">
                            Lesson 2
                          </span>
                          <BookmarkIcon className="w-4 h-4 2xl:w-5 2xl:h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[320px] 2xl:max-w-[460px]">
              <div className="flex justify-center w-full">
                <img className="w-[270px] 2xl:w-[412px]" src={LogoVertical} />
              </div>
              <p className="text-center text-lg 2xl:text-3xl text-primary-color font-bold mb-3">
                Featured Resource
              </p>
              <div className="border border-[#EAEAEA] p-4 rounded-2xl text-purple mb-6 2xl:mb-8 2xl:text-3xl">
                Do Grants For For-Profit Organizations Exist And How Do You Get
                One For Yourself Or Your Business?
              </div>
              <p className="text-center text-lg 2xl:text-3xl text-primary-color font-bold mb-3">
                Tip of the Day
              </p>
              <div className="rounded-2xl py-2 px-4 2xl:text-21px text-third-text bg-[#F8F8F8] shadow-md shadow-gray-300 mb-8">
                In order to succeed, your desire for success should be greater
                than your fear of failure
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-8 inline-flex items-center justify-center w-12 h-12 2xl:w-16 2xl:h-16 rounded-full bg-primary-color">
        <Message2Icon className="w-5 h-5 2xl:w-8 2xl:h-8 rotate-6" />
      </div>
    </>
  );
};

export default Home;
