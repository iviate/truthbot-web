import React from "react";

import { Img, Line, Text } from "components";
import BotDescription from "components/BotDescription";

const LoginPage = () => {
  return (
    <>
      <div className="font-poppins h-[1571px] mx-auto pr-[15px] relative w-full">
        <div className="h-[1571px] m-auto max-w-[1482px] md:px-5 w-full">
          <Img
            src="images/img_macosmonterey.png"
            className="h-[1571px] m-auto object-cover w-full"
            alt="macosmonterey"
          />
          <div className="absolute h-[1521px] md:h-[1571px] inset-[0] justify-center m-auto w-[81%] md:w-full">
            <div className="h-[1521px] md:h-[1571px] m-auto w-full">
              <div className="h-[1521px] md:h-[1571px] m-auto w-full">
                <div className="absolute bg-gradient3  h-[1571px] m-auto w-full"></div>
                <div className="absolute bottom-[33%] flex flex-col gap-[26px] inset-x-[0] items-center justify-start mx-auto shadow-bs1 w-[19%]">
                  <div className="bg-green_400 flex flex-row gap-[35px] items-center justify-start p-[5px] rounded-[20px] w-full">
                    <Img
                      src="images/img_image7.png"
                      className="h-8 md:h-auto ml-3 object-cover w-[17%]"
                      alt="imageSeven"
                    />
                    <Text
                      className="font-bold text-center text-white_A700"
                      as="h6"
                      variant="h6"
                    >
                      Line
                    </Text>
                  </div>
                  <div className="bg-blue_A400 flex flex-row gap-[23px] items-start justify-start p-[5px] rounded-[20px] w-full">
                    <Img
                      src="images/img_logosfacebook.svg"
                      className="h-7 ml-[3px]"
                      alt="logosfacebook"
                    />
                    <Text
                      className="font-bold text-white_A700"
                      as="h6"
                      variant="h6"
                    >
                      Facebook
                    </Text>
                  </div>
                </div>
                <div className="absolute bottom-[42%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <Line className="bg-white_A700 h-px sm:mt-0 my-3.5 w-[43%]" />
                    <Text
                      className="font-bold text-center text-white_A700"
                      as="h6"
                      variant="h6"
                    >
                      CONTACT
                    </Text>
                    <Line className="bg-white_A700 h-px sm:mt-0 my-3.5 w-[42%]" />
                  </div>
                </div>
                <div className="absolute flex md:flex-col flex-row gap-[11px] h-max inset-[0] items-start justify-center m-auto w-[23%]">
                  <Text className="text-white_A700" variant="body1">
                    Don’t have account?
                  </Text>
                  <a href="javascript:" className="text-yellow_A400">
                    <Text variant="body1">Register</Text>
                  </a>
                </div>
              </div>
              <Img
                src="images/img_blackcreativelamp.png"
                className="absolute h-[450px] inset-x-[0] mx-auto object-cover top-[0] w-[42%]"
                alt="blackcreativela"
              />
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto rounded-[20px] shadow-bs1 top-[27%] w-[31%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-blue_gray_100_33 flex flex-col items-center justify-end p-[17px] rounded-[20px] w-full">
                  <Text
                    className="font-bold mt-[3px] text-white_A700_66"
                    as="h6"
                    variant="h6"
                  >
                    username
                  </Text>
                </div>
                <Text
                  className="bg-blue_gray_100_33 font-bold h-[69px] justify-center mt-16 pb-4 pt-[22px] sm:px-5 px-[35px] relative rounded-[20px] text-white_A700_66 w-[364px]"
                  as="h6"
                  variant="h6"
                >
                  password
                </Text>
                <div className="flex flex-row items-center justify-between mt-11 w-full">
                  <a
                    href="javascript:"
                    className="bg-indigo_A700_7a font-bold h-[47px] justify-center sm:px-5 px-[35px] py-2 rounded-[20px] text-shadow-ts text-white_A700 w-[147px]"
                  >
                    <Text as="h6" variant="h6">
                      LOGIN
                    </Text>
                  </a>
                  <div className="h-[47px] relative w-[41%]">
                    <Text
                      className="flex flex-col font-bold items-center justify-center m-auto min-w-0 text-center text-white_A700 w-[0]"
                      as="h6"
                      variant="h6"
                    >
                      TEST
                    </Text>
                    <div className="absolute bg-yellow_A400_93 h-[47px] inset-[0] justify-center m-auto rounded-[20px] shadow-bs1 w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BotDescription className="absolute block bottom-[0] flex-col font-prompt items-start justify-start left-[10%] pl-[49px] md:px-5 py-[49px] sm:w-full" />
      </div>
    </>
  );
};

export default LoginPage;
