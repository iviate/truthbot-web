import React from "react";

import { Button, Img, List, SelectBox, Text } from "components";
import BotDescription from "components/BotDescription";

const ibot1679145282615OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Home1Page = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-prompt h-[762px] justify-end mx-auto relative w-full">
        <div className="h-[1578px] mt-auto mx-auto md:px-5 w-full">
          <Img
            src="images/img_macosmonterey_1578x1470.png"
            className="h-[1578px] m-auto object-cover w-full"
            alt="macosmonterey"
          />
          <div className="absolute bg-gradient3  flex flex-col inset-x-[0] items-end justify-start mx-auto shadow-bs3 top-[0] w-full">
            <div className="flex flex-col items-center justify-start mr-[119px] w-[19%] md:w-full">
              <div className="flex flex-row gap-5 items-center justify-start pl-5 w-auto">
                <Button
                  className="cursor-pointer font-bold min-w-[75px] text-base text-black_900 text-center"
                  shape="RoundedBorder16"
                  size="md"
                  variant="OutlineLightgreen90094"
                >
                  เติมเงิน
                </Button>
                <div className="flex flex-col pt-[18px] relative w-[64%]">
                  <SelectBox
                    className="font-medium mx-auto text-base text-left text-white_A700 w-full"
                    placeholderClassName="text-white_A700"
                    indicator={
                      <Img
                        src="images/img_frame.svg"
                        className="h-3.5 mr-[0] w-3.5 right-[0] mt-[-NaNpx] z-[1]"
                        alt="Frame"
                      />
                    }
                    isMulti={false}
                    name="groupfortyfour"
                    options={ibot1679145282615OptionsList}
                    isSearchable={false}
                    placeholder="ibot1679145282615"
                  />
                  <div className="flex flex-row gap-[5px] items-start justify-start mt-[-19.21px] mx-auto pr-[5px] py-[5px] w-full z-[1]">
                    <Img
                      src="images/img_qrcode.svg"
                      className="h-3.5 mt-[18px] w-3.5"
                      alt="qrcode"
                    />
                    <Text
                      className="font-medium mt-4 text-lime_400"
                      variant="body6"
                    >
                      50,000.00
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] sm:h-[1503px] h-[1578px] md:h-[2397px] left-[2%] md:px-5 w-[90%] md:w-full">
          <div className="absolute bottom-[0] h-[1503px] md:h-[2397px] right-[0] w-[91%] md:w-full">
            <div className="bg-gradient3  h-[1503px] m-auto w-full"></div>
            <div className="absolute flex flex-col md:gap-10 gap-[66px] inset-x-[0] justify-start mx-auto top-[3%] w-[95%]">
              <div className="flex md:flex-col flex-row gap-8 items-end justify-start w-[85%] md:w-full">
                <div className="flex flex-col gap-3 justify-start w-[26%] md:w-full">
                  <Text className="text-white_A700" as="h1" variant="h1">
                    เกม
                  </Text>
                  <div
                    className="bg-cover bg-gradient4  bg-no-repeat flex flex-col h-[200px] items-center justify-end md:ml-[0] ml-[47px] p-[3px] rounded-[16px] shadow-bs1 w-[200px]"
                    style={{
                      backgroundImage: "url('images/img_div_200x200.png')",
                    }}
                  >
                    <div className="flex flex-col items-center justify-end mb-6 mt-10 pt-[63px] w-full">
                      <div className="flex flex-row gap-[5px] items-start justify-start sm:px-5 px-[31px] w-full">
                        <Text
                          className="font-semibold mt-0.5 text-center text-white_A700"
                          variant="body3"
                        >
                          สถานะ :
                        </Text>
                        <div className="flex flex-row items-start justify-center mb-0.5 pr-0.5 w-[55%]">
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-4 mt-0.5 w-4"
                            alt="checkmark"
                          />
                          <Text
                            className="font-semibold ml-[3px] text-center text-white_A700"
                            variant="body3"
                          >
                            Online
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-semibold mt-[3px] text-center text-white_A700"
                        as="h4"
                        variant="h4"
                      >
                        Game Card
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-poppins gap-[17px] items-start justify-start md:mt-0 mt-[31px] w-[71%] md:w-full">
                  <div className="flex flex-col h-[30px] md:h-auto items-center justify-start w-[85px]">
                    <Text
                      className="text-white_A700 uppercase w-auto"
                      variant="body4"
                    >
                      ห้องเเนะนำ
                    </Text>
                  </div>
                  <div className="flex relative w-full">
                    <div className="bg-indigo_900 flex flex-col items-center justify-end my-auto p-3 rounded-[15px] w-[24%]">
                      <Img
                        src="images/img_vector.svg"
                        className="h-[59px] mt-2.5 rounded-sm"
                        alt="vector"
                      />
                      <div className="flex flex-col items-center justify-start mt-[17px] w-auto">
                        <Text
                          className="text-center text-gray_500"
                          variant="body8"
                        >
                          <>
                            Game Card <br />
                            Room 1
                          </>
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[125px] mt-[7px]"
                        leftIcon={
                          <div className="mt-[5px] mb-[3px] mr-[5px] border-green_A200 border border-solid">
                            <Img src="images/img_arrow_2.svg" alt="Arrow 2" />
                          </div>
                        }
                        shape="RoundedBorder12"
                        size="sm"
                        variant="OutlineIndigoA100"
                      >
                        <div className="font-medium leading-[normal] text-[11px] text-gray_500 text-left">
                          ออนไลน์ 65 คน
                        </div>
                      </Button>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[-138.32px] mr-auto my-auto w-[97%] z-[1]">
                      <Img
                        src="images/img_vector_59x112.png"
                        className="h-[59px] md:h-auto md:mt-0 mt-[21px] object-cover"
                        alt="vectorone"
                      />
                      <div className="bg-indigo_900 flex flex-col items-center justify-end md:ml-[0] ml-[38px] p-3 rounded-[15px] w-1/4 md:w-full">
                        <div className="h-[65px] md:h-[72px] mt-2 relative w-[83%]">
                          <Img
                            src="images/img_vector_63x109.png"
                            className="absolute h-[63px] inset-[0] justify-center m-auto object-cover rounded-sm"
                            alt="vectortwo"
                          />
                          <Img
                            src="images/img_vector_59x112.png"
                            className="absolute h-16 inset-[0] justify-center m-auto object-cover"
                            alt="vectorthree"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[13px] w-auto">
                          <Text
                            className="text-center text-gray_500"
                            variant="body8"
                          >
                            <>
                              Game Card <br />
                              Room 2
                            </>
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[125px] mt-[7px]"
                          leftIcon={
                            <div className="mt-[5px] mb-[3px] mr-[5px] border-green_A200 border border-solid">
                              <Img src="images/img_arrow_2.svg" alt="Arrow 2" />
                            </div>
                          }
                          shape="RoundedBorder12"
                          size="sm"
                          variant="OutlineIndigoA100"
                        >
                          <div className="font-medium leading-[normal] text-[11px] text-gray_500 text-left">
                            ออนไลน์ 30 คน
                          </div>
                        </Button>
                      </div>
                      <div className="flex ml-4 md:ml-[0] relative w-[51%] md:w-full">
                        <div className="bg-indigo_900 flex flex-col items-center justify-end my-auto p-3 rounded-[15px] w-[49%]">
                          <Img
                            src="images/img_vector.svg"
                            className="h-[59px] mt-2.5 rounded-sm"
                            alt="vectorfour"
                          />
                          <div className="flex flex-col items-center justify-start mt-[17px] w-auto">
                            <Text
                              className="text-center text-gray_500"
                              variant="body8"
                            >
                              <>
                                Game Card <br />
                                Room 3
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[125px] mt-[7px]"
                            leftIcon={
                              <div className="mt-[5px] mb-[3px] mr-[5px] border-green_A200 border border-solid">
                                <Img
                                  src="images/img_arrow_2.svg"
                                  alt="Arrow 2"
                                />
                              </div>
                            }
                            shape="RoundedBorder12"
                            size="sm"
                            variant="OutlineIndigoA100"
                          >
                            <div className="font-medium leading-[normal] text-[11px] text-gray_500 text-left">
                              ออนไลน์ 65 คน
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[38px] items-start justify-between ml-[-138.32px] my-auto w-[94%] z-[1]">
                          <Img
                            src="images/img_vector_59x112.png"
                            className="h-[59px] md:h-auto mt-[21px] object-cover"
                            alt="vectorfive"
                          />
                          <div className="bg-indigo_900 flex flex-col items-center justify-end p-3 rounded-[15px]">
                            <div className="h-[65px] md:h-[72px] mt-2 relative w-[83%]">
                              <Img
                                src="images/img_vector_63x109.png"
                                className="absolute h-[63px] inset-[0] justify-center m-auto object-cover rounded-sm"
                                alt="vectorsix"
                              />
                              <Img
                                src="images/img_vector_59x112.png"
                                className="absolute h-16 inset-[0] justify-center m-auto object-cover"
                                alt="vectorseven"
                              />
                            </div>
                            <Text
                              className="mt-[13px] text-center text-gray_500"
                              variant="body8"
                            >
                              <>
                                Game Card <br />
                                Room 4
                              </>
                            </Text>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[125px] mt-[7px]"
                              leftIcon={
                                <div className="mt-[5px] mb-[3px] mr-[5px] border-green_A200 border border-solid">
                                  <Img
                                    src="images/img_arrow_2.svg"
                                    alt="Arrow 2"
                                  />
                                </div>
                              }
                              shape="RoundedBorder12"
                              size="sm"
                              variant="OutlineIndigoA100"
                            >
                              <div className="font-medium leading-[normal] text-[11px] text-gray_500 text-left">
                                ออนไลน์ 30 คน
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:gap-10 gap-[81px] items-start justify-start ml-10 md:ml-[0] w-[97%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[39px] items-center justify-between w-full">
                  <div
                    className="bg-cover bg-gradient4  bg-no-repeat flex flex-col h-[200px] items-center justify-end p-[3px] rounded-[16px] shadow-bs1 w-[200px]"
                    style={{ backgroundImage: "url('images/img_div_1.png')" }}
                  >
                    <div className="flex flex-col items-center justify-end mb-6 mt-10 pt-[63px] w-full">
                      <div className="flex flex-row gap-[5px] items-start justify-start sm:px-5 px-[31px] w-full">
                        <Text
                          className="font-semibold mt-0.5 text-center text-white_A700"
                          variant="body3"
                        >
                          สถานะ :
                        </Text>
                        <div className="flex flex-row items-start justify-center mb-0.5 pr-0.5 w-[55%]">
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-4 mt-0.5 w-4"
                            alt="checkmarkone"
                          />
                          <Text
                            className="font-semibold ml-[3px] text-center text-white_A700"
                            variant="body3"
                          >
                            Online
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-semibold mt-[3px] text-center text-white_A700"
                        as="h4"
                        variant="h4"
                      >
                        Steel Ball
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col font-poppins items-center justify-start w-[79%] md:w-full">
                    <div className="flex flex-col h-[200px] md:h-auto items-center justify-start max-w-[850px] w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col items-center justify-start w-[19%] md:w-full">
                          <div className="bg-indigo_900 flex flex-col items-center justify-end pl-1 py-1 rounded-[15px] w-full">
                            <div className="h-[60px] md:h-[76px] mt-[17px] relative w-[73%]">
                              <Img
                                src="images/img_vector.svg"
                                className="absolute h-[59px] inset-[0] justify-center m-auto rounded-sm"
                                alt="vectoreight"
                              />
                              <Img
                                src="images/img_vector_59x112.png"
                                className="absolute h-[59px] inset-[0] justify-center m-auto object-cover"
                                alt="vectornine"
                              />
                            </div>
                            <Text
                              className="mt-[17px] text-center text-gray_500"
                              variant="body8"
                            >
                              <>
                                Steel ball <br />
                                Room 1
                              </>
                            </Text>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[125px] my-[7px]"
                              leftIcon={
                                <div className="mt-[5px] mb-[3px] mr-[5px] border-green_A200 border border-solid">
                                  <Img
                                    src="images/img_arrow_2.svg"
                                    alt="Arrow 2"
                                  />
                                </div>
                              }
                              shape="RoundedBorder12"
                              size="sm"
                              variant="OutlineIndigoA100"
                            >
                              <div className="font-medium leading-[normal] text-[11px] text-gray_500 text-left">
                                ออนไลน์ 65 คน
                              </div>
                            </Button>
                          </div>
                        </div>
                        <div className="bg-indigo_900 flex md:flex-1 flex-col items-center justify-end py-3 rounded-[15px] w-[19%] md:w-full">
                          <div className="h-[65px] md:h-[72px] mt-2 relative w-[71%]">
                            <Img
                              src="images/img_vector_63x109.png"
                              className="absolute h-[63px] inset-[0] justify-center m-auto object-cover rounded-sm"
                              alt="vectorten"
                            />
                            <Img
                              src="images/img_vector_59x112.png"
                              className="absolute h-16 inset-[0] justify-center m-auto object-cover"
                              alt="vectoreleven"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-start mt-[13px] w-[159px]">
                            <Text
                              className="text-center text-gray_500"
                              variant="body8"
                            >
                              <>
                                Steel ball <br />
                                Room 2
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[125px] mt-[7px]"
                            leftIcon={
                              <div className="mt-[5px] mb-[3px] mr-[5px] border-green_A200 border border-solid">
                                <Img
                                  src="images/img_arrow_2.svg"
                                  alt="Arrow 2"
                                />
                              </div>
                            }
                            shape="RoundedBorder12"
                            size="sm"
                            variant="OutlineIndigoA100"
                          >
                            <div className="font-medium leading-[normal] text-[11px] text-gray_500 text-left">
                              ออนไลน์ 30 คน
                            </div>
                          </Button>
                        </div>
                        <div className="h-[180px] sm:h-[273px] relative w-3/5 md:w-full">
                          <div className="absolute bg-indigo_900 flex flex-col h-max inset-y-[0] items-center justify-end left-[0] my-auto py-3 rounded-[15px] w-[32%]">
                            <Img
                              src="images/img_vector.svg"
                              className="h-[59px] mt-2.5 rounded-sm"
                              alt="vectortwelve"
                            />
                            <div className="flex flex-col items-center justify-start mt-[17px] w-[159px]">
                              <Text
                                className="text-center text-gray_500"
                                variant="body8"
                              >
                                <>
                                  Steel ball <br />
                                  Room 3
                                </>
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[125px] mt-[7px]"
                              leftIcon={
                                <div className="mt-[5px] mb-[3px] mr-[5px] border-green_A200 border border-solid">
                                  <Img
                                    src="images/img_arrow_2.svg"
                                    alt="Arrow 2"
                                  />
                                </div>
                              }
                              shape="RoundedBorder12"
                              size="sm"
                              variant="OutlineIndigoA100"
                            >
                              <div className="font-medium leading-[normal] text-[11px] text-gray_500 text-left">
                                ออนไลน์ 65 คน
                              </div>
                            </Button>
                          </div>
                          <div className="absolute flex sm:flex-col flex-row gap-[38px] h-full inset-y-[0] items-start justify-between my-auto right-[0] w-[96%]">
                            <div className="sm:h-[60px] h-[67px] md:h-[82px] sm:mt-0 mt-[22px] relative w-[24%] sm:w-full">
                              <Img
                                src="images/img_vector_59x112.png"
                                className="absolute h-[59px] inset-x-[0] mx-auto object-cover top-[0]"
                                alt="vectorthirteen"
                              />
                              <Img
                                src="images/img_nowifiicon1.png"
                                className="absolute bottom-[0] h-[60px] object-cover right-[20%] w-[60px]"
                                alt="nowifiiconone"
                              />
                            </div>
                            <List
                              className="sm:flex-col flex-row gap-[13px] grid grid-cols-2 w-[69%] sm:w-full"
                              orientation="horizontal"
                            >
                              <div className="bg-indigo_900 flex flex-col items-center justify-end sm:ml-[0] p-3 rounded-[15px] w-full">
                                <div className="h-[65px] md:h-[72px] mt-2 relative w-[83%]">
                                  <Img
                                    src="images/img_vector_63x109.png"
                                    className="absolute h-[63px] inset-[0] justify-center m-auto object-cover rounded-sm"
                                    alt="vector"
                                  />
                                  <Img
                                    src="images/img_vector_59x112.png"
                                    className="absolute h-16 inset-[0] justify-center m-auto object-cover"
                                    alt="vectorone"
                                  />
                                </div>
                                <Text
                                  className="mt-[13px] text-center text-gray_500"
                                  variant="body8"
                                >
                                  <>
                                    Steel ball <br />
                                    Room 4
                                  </>
                                </Text>
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[125px] mt-[7px]"
                                  leftIcon={
                                    <div className="mt-[5px] mb-[3px] mr-[5px] border-green_A200 border border-solid">
                                      <Img
                                        src="images/img_arrow_2.svg"
                                        alt="Arrow 2"
                                      />
                                    </div>
                                  }
                                  shape="RoundedBorder12"
                                  size="sm"
                                  variant="OutlineIndigoA100"
                                >
                                  <div className="font-medium leading-[normal] text-[11px] text-gray_500 text-left">
                                    ออนไลน์ 30 คน
                                  </div>
                                </Button>
                              </div>
                              <div className="bg-indigo_900 flex flex-col items-center justify-end sm:ml-[0] p-3 rounded-[15px] w-full">
                                <div className="h-[65px] md:h-[72px] mt-2 relative w-[83%]">
                                  <Img
                                    src="images/img_vector_63x109.png"
                                    className="absolute bottom-[0] h-[63px] inset-x-[0] mx-auto object-cover rounded-sm"
                                    alt="vector"
                                  />
                                  <Img
                                    src="images/img_vector_59x112.png"
                                    className="absolute h-16 inset-[0] justify-center m-auto object-cover"
                                    alt="vectorone"
                                  />
                                </div>
                                <Text
                                  className="mt-[13px] text-center text-gray_500"
                                  variant="body8"
                                >
                                  <>
                                    Steel ball <br />
                                    Room 4
                                  </>
                                </Text>
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[125px] mt-[7px]"
                                  leftIcon={
                                    <div className="mt-[5px] mb-[3px] mr-[5px] border-green_A200 border border-solid">
                                      <Img
                                        src="images/img_arrow_2.svg"
                                        alt="Arrow 2"
                                      />
                                    </div>
                                  }
                                  shape="RoundedBorder12"
                                  size="sm"
                                  variant="OutlineIndigoA100"
                                >
                                  <div className="font-medium leading-[normal] text-[11px] text-gray_500 text-left">
                                    ออนไลน์ 30 คน
                                  </div>
                                </Button>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[39px] items-center justify-start w-[85%] md:w-full">
                  <div
                    className="bg-cover bg-gradient4  bg-no-repeat flex flex-col h-[200px] items-center justify-end p-[3px] rounded-[16px] shadow-bs1 w-[200px]"
                    style={{ backgroundImage: "url('images/img_div_2.png')" }}
                  >
                    <div className="flex flex-col items-center justify-end mb-6 mt-10 pt-16 w-full">
                      <div className="flex flex-row gap-[5px] items-center justify-start sm:px-5 px-[31px] w-full">
                        <Text
                          className="font-semibold text-center text-white_A700"
                          variant="body3"
                        >
                          สถานะ :
                        </Text>
                        <div className="flex flex-row items-start justify-center pr-0.5 w-[55%]">
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-4 w-4"
                            alt="checkmarktwo"
                          />
                          <Text
                            className="font-semibold ml-[3px] text-center text-white_A700"
                            variant="body3"
                          >
                            Online
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-semibold mt-1 text-center text-white_A700"
                        as="h4"
                        variant="h4"
                      >
                        Drago Tiger
                      </Text>
                    </div>
                  </div>
                  <div className="flex font-poppins relative w-[74%] md:w-full">
                    <div className="bg-indigo_900 flex flex-col items-center justify-end my-auto p-3 rounded-[15px] w-[24%]">
                      <Img
                        src="images/img_vector.svg"
                        className="h-[59px] mt-2.5 rounded-sm"
                        alt="vectorfourteen"
                      />
                      <div className="flex flex-col items-center justify-start mt-[17px] w-auto">
                        <Text
                          className="text-center text-gray_500"
                          variant="body8"
                        >
                          <>
                            Drago Tiger
                            <br />
                            Room 1
                          </>
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[125px] mt-[7px]"
                        leftIcon={
                          <div className="mr-[5px] border-green_A200 border border-solid my-1">
                            <Img src="images/img_arrow_2.svg" alt="Arrow 2" />
                          </div>
                        }
                        shape="RoundedBorder12"
                        size="sm"
                        variant="OutlineIndigoA100"
                      >
                        <div className="font-medium leading-[normal] text-[11px] text-gray_500 text-left">
                          ออนไลน์ 65 คน
                        </div>
                      </Button>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-[-138.32px] mr-auto my-auto w-[97%] z-[1]">
                      <Img
                        src="images/img_vector_59x112.png"
                        className="h-[59px] md:h-auto md:mt-0 mt-[21px] object-cover"
                        alt="vectorfifteen"
                      />
                      <div className="bg-indigo_900 flex flex-col items-center justify-end md:ml-[0] ml-[38px] p-3 rounded-[15px] w-1/4 md:w-full">
                        <div className="h-[65px] md:h-[72px] mt-2 relative w-[83%]">
                          <Img
                            src="images/img_vector_63x109.png"
                            className="absolute h-[63px] inset-[0] justify-center m-auto object-cover rounded-sm"
                            alt="vectorsixteen"
                          />
                          <Img
                            src="images/img_vector_59x112.png"
                            className="absolute h-16 inset-[0] justify-center m-auto object-cover"
                            alt="vectorseventeen"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[13px] w-auto">
                          <Text
                            className="text-center text-gray_500"
                            variant="body8"
                          >
                            <>
                              Drago Tiger
                              <br />
                              Room 2
                            </>
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[125px] mt-[7px]"
                          leftIcon={
                            <div className="mr-[5px] border-green_A200 border border-solid my-1">
                              <Img src="images/img_arrow_2.svg" alt="Arrow 2" />
                            </div>
                          }
                          shape="RoundedBorder12"
                          size="sm"
                          variant="OutlineIndigoA100"
                        >
                          <div className="font-medium leading-[normal] text-[11px] text-gray_500 text-left">
                            ออนไลน์ 30 คน
                          </div>
                        </Button>
                      </div>
                      <div className="flex ml-4 md:ml-[0] relative w-[51%] md:w-full">
                        <div className="bg-indigo_900 flex flex-col items-center justify-end my-auto p-3 rounded-[15px] w-[49%]">
                          <Img
                            src="images/img_vector.svg"
                            className="h-[59px] mt-2.5 rounded-sm"
                            alt="vectoreighteen"
                          />
                          <div className="flex flex-col items-center justify-start mt-[17px] w-auto">
                            <Text
                              className="text-center text-gray_500"
                              variant="body8"
                            >
                              <>
                                Drago Tiger
                                <br />
                                Room 3
                              </>
                            </Text>
                          </div>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[125px] mt-[7px]"
                            leftIcon={
                              <div className="mr-[5px] border-green_A200 border border-solid my-1">
                                <Img
                                  src="images/img_arrow_2.svg"
                                  alt="Arrow 2"
                                />
                              </div>
                            }
                            shape="RoundedBorder12"
                            size="sm"
                            variant="OutlineIndigoA100"
                          >
                            <div className="font-medium leading-[normal] text-[11px] text-gray_500 text-left">
                              ออนไลน์ 65 คน
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[38px] items-start justify-between ml-[-138.32px] my-auto w-[94%] z-[1]">
                          <Img
                            src="images/img_vector_59x112.png"
                            className="h-[59px] md:h-auto mt-[21px] object-cover"
                            alt="vectornineteen"
                          />
                          <div className="bg-indigo_900 flex flex-col items-center justify-end p-3 rounded-[15px]">
                            <div className="h-[65px] md:h-[72px] mt-2 relative w-[83%]">
                              <Img
                                src="images/img_vector_63x109.png"
                                className="absolute h-[63px] inset-[0] justify-center m-auto object-cover rounded-sm"
                                alt="vectortwenty"
                              />
                              <Img
                                src="images/img_vector_59x112.png"
                                className="absolute h-16 inset-[0] justify-center m-auto object-cover"
                                alt="vectortwentyone"
                              />
                            </div>
                            <Text
                              className="mt-[13px] text-center text-gray_500"
                              variant="body8"
                            >
                              <>
                                Drago Tiger
                                <br />
                                Room 4
                              </>
                            </Text>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[125px] mt-[7px]"
                              leftIcon={
                                <div className="mr-[5px] border-green_A200 border border-solid my-1">
                                  <Img
                                    src="images/img_arrow_2.svg"
                                    alt="Arrow 2"
                                  />
                                </div>
                              }
                              shape="RoundedBorder12"
                              size="sm"
                              variant="OutlineIndigoA100"
                            >
                              <div className="font-medium leading-[normal] text-[11px] text-gray_500 text-left">
                                ออนไลน์ 30 คน
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BotDescription className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[30px] sm:px-5 w-full" />
          </div>
          <Img
            src="images/img_pro21.png"
            className="absolute h-[87px] left-[0] object-cover top-[0] w-[15%]"
            alt="protwentyone"
          />
        </div>
      </div>
    </>
  );
};

export default Home1Page;
