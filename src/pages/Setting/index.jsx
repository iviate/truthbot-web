import React from "react";

import { Button, Img, Line, List, Switch, Text } from "components";
import UserInformation from "components/UserInformation";

const SettingPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-prompt h-[762px] justify-end mx-auto relative w-full">
        <div className="h-[1743px] mt-auto mx-auto md:px-5 w-full">
          <Img
            src="images/img_macosmonterey_1578x1470.png"
            className="h-[1743px] m-auto object-cover w-full"
            alt="macosmonterey"
          />
          <div className="absolute bottom-[0] md:h-[1667px] h-[1668px] inset-x-[0] mx-auto w-[61%] md:w-full">
            <div className="md:h-[1667px] h-[1668px] m-auto w-full">
              <div className="absolute bg-gradient3  flex flex-col h-full inset-[0] items-start justify-center m-auto p-[15px]">
                <Text
                  className="mb-[1166px] mt-[428px] text-white_A700"
                  as="h2"
                  variant="h2"
                >
                  เกมการ์ด (Card Game) ห้อง 1
                </Text>
              </div>
              <div className="absolute h-[413px] md:h-[796px] right-[0] top-[1%] w-[835px] md:w-full">
                <div className="bg-gray_900_30 h-[413px] my-auto rounded-[16px] w-[93%]"></div>
                <div className="absolute flex md:flex-col flex-row gap-[5px] h-full inset-[0] items-start justify-center m-auto w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[22%] md:w-full">
                    <div
                      className="bg-cover bg-gradient4  bg-no-repeat flex flex-col h-[135px] items-start justify-start pb-[82.5px] pl-[15px] sm:pr-5 pr-[33.3px] pt-[14.5px] rounded-tl-[16px] w-auto"
                      style={{
                        backgroundImage: "url('images/img_div_200x200.png')",
                      }}
                    >
                      <Text
                        className="font-medium text-white_A700 w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Card Game
                      </Text>
                    </div>
                    <Line className="bg-gray_800 h-1 w-full" />
                    <div
                      className="bg-cover bg-gradient4  bg-no-repeat flex flex-col h-[135px] items-start justify-start pb-[82.5px] pl-[15px] md:pr-10 sm:pr-5 pr-[56.3px] pt-[14.5px] w-auto"
                      style={{ backgroundImage: "url('images/img_div_1.png')" }}
                    >
                      <Text
                        className="font-medium text-white_A700 w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Steel Ball
                      </Text>
                    </div>
                    <Line className="bg-gray_800 h-1 w-full" />
                    <div
                      className="bg-cover bg-gradient4  bg-no-repeat flex flex-col h-[135px] items-start justify-start pb-[44.5px] pl-[15px] md:pr-10 sm:pr-5 pr-[87.94px] pt-[14.5px] rounded-bl-[16px] w-auto"
                      style={{ backgroundImage: "url('images/img_div_2.png')" }}
                    >
                      <Text
                        className="font-medium h-[76px] leading-[37.00px] max-w-[76px] md:max-w-full text-white_A700"
                        as="h4"
                        variant="h4"
                      >
                        Drago Tigger
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-4 items-start justify-start md:mt-0 mt-[5px] w-auto md:w-full">
                    <Img
                      src="images/img_div.svg"
                      className="h-[295px] rounded-lg w-[586px]"
                      alt="div"
                    />
                    <List
                      className="sm:flex-col flex-row gap-2 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start p-1 w-auto md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[125.11px] w-auto">
                        <Switch value={true} className="w-[63%]" />
                        <Text
                          className="font-normal text-white_A700 w-auto"
                          variant="body6"
                        >
                          P/B
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[141.11px] w-auto">
                        <Switch value={false} className="w-[77%]" />
                        <Text
                          className="font-normal text-white_A700 w-auto"
                          variant="body6"
                        >
                          P
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[140.11px] w-auto">
                        <Switch value={false} className="w-[90%]" />
                        <Text
                          className="font-normal text-white_A700 w-auto"
                          variant="body6"
                        >
                          B
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[18px] inset-x-[0] items-start justify-start mx-auto pr-4 py-4 w-[98%]">
                <div className="flex flex-col items-start justify-start w-[47%] md:w-full">
                  <Text
                    className="font-normal text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    รูปแบบการเล่น
                  </Text>
                  <Text className="font-normal text-white_A700" variant="body3">
                    รูปแบบการเล่น หมายถึงการเลือกฝ่ายในการเล่นเกม
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[17px] items-start justify-start pr-4 w-full">
                    <div className="flex flex-col gap-4 items-start justify-start pt-4 w-auto">
                      <Button
                        className="cursor-pointer font-semibold min-w-[180px] text-base text-black_900_01 text-center"
                        shape="CircleBorder24"
                        size="lg"
                        variant="OutlineGray90001"
                      >
                        P และ B
                      </Button>
                      <Button
                        className="cursor-pointer font-normal min-w-[180px] text-center text-sm text-white_A700"
                        shape="CircleBorder24"
                        size="lg"
                        variant="FillGray600"
                      >
                        P เท่านั้น
                      </Button>
                    </div>
                    <Button
                      className="cursor-pointer font-normal mb-16 min-w-[180px] sm:mt-0 mt-4 text-center text-sm text-white_A700"
                      shape="CircleBorder24"
                      size="lg"
                      variant="FillGray600"
                    >
                      B เท่านั้น
                    </Button>
                  </div>
                  <Text
                    className="font-normal mt-[15px] text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    รูปแบบการลงทุน
                  </Text>
                  <Text
                    className="font-normal leading-[25.00px] text-white_A700 w-[98%] sm:w-full"
                    variant="body3"
                  >
                    การเลือกวิธีการลงทุนเป็นการบริหารความเสี่ยงในการลงทุนเพื่อให้สามารถทำกำไรจนถึงเป้าหมายที่กำหนด
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[16.43px] items-start justify-start pr-[16.45px] w-auto sm:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start pt-4 w-auto">
                      <List
                        className="flex-col gap-4 grid items-center w-full"
                        orientation="vertical"
                      >
                        <div className="bg-gradient2  bg-gray_600 hover:border-[3px] border-[3px] hover:border-gray_900_01 border-gray_900_01 hover:border-solid border-solid hover:cursor-pointer flex flex-row gap-[30px] items-start justify-start pl-[74.96px] pr-[74.83px] md:px-10 sm:px-5 py-[15.5px] rounded-[24px] hover:shadow-bs2 shadow-bs2 w-auto">
                          <Text
                            className="font-semibold text-black_900_01 text-center w-auto"
                            variant="body3"
                          >
                            คงที่
                          </Text>
                          <div className="font-inter h-4 relative w-3/5">
                            <Img
                              src="defaultNoData.png"
                              className="h-4 m-auto object-cover w-full"
                              alt="seventyeight"
                            />
                            <Text
                              className="absolute font-black h-full inset-[0] justify-center m-auto text-black_900_01 text-center w-max"
                              variant="body3"
                            >
                              
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray_600 hover:border-[3px] hover:border-gray_900_01 hover:border-solid hover:cursor-pointer flex flex-row gap-[21px] items-start justify-start pl-[58.59px] pr-[60.2px] md:px-10 sm:px-5 py-[17px] rounded-[24px] hover:shadow-bs2 w-auto">
                          <Text
                            className="font-normal text-center text-white_A700 w-auto"
                            variant="body6"
                          >
                            X system
                          </Text>
                          <div className="font-inter h-3.5 relative w-4">
                            <Img
                              src="defaultNoData.png"
                              className="absolute h-3.5 inset-[0] justify-center m-auto object-cover w-4 sm:w-full"
                              alt="seventynine"
                            />
                            <Text
                              className="absolute font-black h-full inset-[0] m-auto text-center text-white_A700 w-max"
                              variant="body6"
                            >
                              
                            </Text>
                          </div>
                        </div>
                      </List>
                      <Button
                        className="cursor-pointer font-normal min-w-[180px] text-center text-sm text-white_A700"
                        shape="CircleBorder24"
                        size="xl"
                        variant="FillGray600"
                      >
                        ฟิโบนักชี
                      </Button>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start pb-16 pt-4 w-auto">
                      <div className="bg-gray_600 flex flex-row gap-[27px] items-start justify-start pl-[67.15px] pr-[66.64px] md:px-10 sm:px-5 py-[17px] rounded-[24px] w-auto">
                        <Text
                          className="font-normal text-center text-white_A700 w-auto"
                          variant="body6"
                        >
                          ลาบูแชร์
                        </Text>
                        <div className="font-inter h-3.5 relative w-4">
                          <Img
                            src="defaultNoData.png"
                            className="absolute h-3.5 inset-[0] justify-center m-auto object-cover w-4 sm:w-full"
                            alt="eightytwo"
                          />
                          <Text
                            className="absolute font-black h-full inset-[0] m-auto text-center text-white_A700 w-max"
                            variant="body6"
                          >
                            
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray_600 flex flex-row gap-[23px] items-start justify-start pl-[63.19px] pr-[62.6px] md:px-10 sm:px-5 py-[9px] rounded-[24px] w-auto">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="font-normal leading-[14.00px] text-center text-white_A700"
                            variant="body6"
                          >
                            <span className="text-white_A700 text-sm font-prompt">
                              <>
                                มาติงเกล
                                <br />
                              </>
                            </span>
                            <span className="text-white_A700 text-[11.2px] font-prompt">
                              กำหนดเอง
                            </span>
                          </Text>
                        </div>
                        <div className="font-inter h-3.5 relative w-4">
                          <Img
                            src="defaultNoData.png"
                            className="absolute h-3.5 inset-[0] justify-center m-auto object-cover w-4 sm:w-full"
                            alt="eightyfive"
                          />
                          <Text
                            className="absolute font-black h-full inset-[0] m-auto text-center text-white_A700 w-max"
                            variant="body6"
                          >
                            
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mb-[94px] md:mt-0 mt-[57px] py-[59px] w-[51%] md:w-full">
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] w-[92%] md:w-full">
                    <div className="flex flex-row items-start justify-between md:pr-10 sm:pr-5 pr-[121px] w-full">
                      <Text
                        className="font-normal text-white_A700"
                        variant="body3"
                      >
                        เลือกชิปเริ่มต้น
                      </Text>
                      <Img
                        src="images/img_button_white_a700.svg"
                        className="h-[22px] mt-1 rounded-[11px] w-11"
                        alt="button"
                      />
                    </div>
                    <div className="flex flex-row gap-[117px] items-start justify-start mt-[19px] md:pr-10 sm:pr-5 pr-[121px] w-full">
                      <Text
                        className="font-normal text-white_A700"
                        variant="body3"
                      >
                        กำหนดชิปเริ่มต้น
                      </Text>
                      <Img
                        src="images/img_button.svg"
                        className="h-[22px] mt-1 rounded-[11px] w-11"
                        alt="buttonone"
                      />
                    </div>
                    <Line className="bg-white_A700 h-0.5 mt-[30px] w-full" />
                    <Text
                      className="font-normal mt-2.5 text-white_A700"
                      as="h6"
                      variant="h6"
                    >
                      กำหนดชิปเริ่มต้น
                    </Text>
                    <Text
                      className="font-normal mt-[11px] text-white_A700"
                      variant="body3"
                    >
                      ใส่จำนวนที่หาร 5 ลงตัว
                    </Text>
                  </div>
                  <div className="bg-white_A700 border border-gray_600 border-solid flex flex-col items-center justify-start ml-1.5 md:ml-[0] mt-2.5 px-[17px] rounded-lg w-[164px]">
                    <Text
                      className="bg-white_A700 font-normal justify-center pb-[10.57px] pr-[12.79px] pt-[9.43px] rounded-sm text-black_900_d8 w-auto"
                      variant="body3"
                    >
                      ชิปเริ่มต้น
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start ml-3.5 md:ml-[0] mt-[21px] w-[93%] md:w-full">
                    <Line className="bg-white_A700 h-0.5 md:ml-[0] ml-[3px] w-full" />
                    <Text
                      className="font-normal md:ml-[0] ml-[3px] text-white_A700"
                      as="h6"
                      variant="h6"
                    >
                      กำไรเป้าหมาย
                    </Text>
                    <Text
                      className="font-normal leading-[25.00px] text-white_A700 w-[94%] sm:w-full"
                      variant="body3"
                    >
                      ข้อแนะนำการเลือกกำไรเป้าเริ่มต้นที่ 5-10% หรือขั้นต่ำ 10
                      บาท และเก็บเป็นรอบ หรือวันละครั้งเพื่อลงทุนระยะยาว
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-[123px] mt-[7px] w-full">
                    <div className="flex sm:flex-col flex-row gap-[7px] items-start justify-start pb-3.5 pl-[8.22px] w-auto sm:w-full">
                      <div className="bg-white_A700 border border-gray_600 border-solid flex flex-row gap-1 items-center justify-start px-[17px] rounded-lg w-auto">
                        <Img
                          src="images/img_save.svg"
                          className="h-6 w-6"
                          alt="save"
                        />
                        <Text
                          className="bg-white_A700 font-normal justify-center pb-[10.57px] md:pr-10 sm:pr-5 pr-[47.79px] pt-[9.43px] rounded-sm text-black_900_d8 w-auto"
                          variant="body3"
                        >
                          จำนวนเงิน
                        </Text>
                      </div>
                      <Text
                        className="bg-gradient2  flex font-normal h-[38px] items-center justify-center rounded-[50%] text-center text-shadow-ts text-white_A700 w-[38px]"
                        variant="body6"
                      >
                        หรือ
                      </Text>
                      <div className="bg-white_A700 border border-gray_600 border-solid flex flex-row gap-1 items-center justify-start px-[17px] rounded-lg w-auto">
                        <Img
                          src="images/img_save.svg"
                          className="h-6 w-6"
                          alt="saveone"
                        />
                        <Text
                          className="bg-white_A700 font-normal justify-center pb-[10.57px] md:pr-10 sm:pr-5 pr-[47.79px] pt-[9.43px] rounded-sm text-black_900_d8 w-auto"
                          variant="body3"
                        >
                          จำนวนเงิน
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-white_A700 h-0.5 mt-[15px] w-[92%]" />
                    <div className="flex flex-row gap-[95px] items-start justify-start mt-[13px] md:pr-10 sm:pr-5 pr-[120px] w-[92%] md:w-full">
                      <Text
                        className="font-normal text-white_A700"
                        variant="body3"
                      >
                        กำหนดขาดทุนไม่เกิน
                      </Text>
                      <Img
                        src="images/img_button.svg"
                        className="h-[22px] mt-[3px] rounded-[11px] w-11"
                        alt="buttontwo"
                      />
                    </div>
                    <div className="flex flex-row gap-[94px] items-start justify-start mt-[18px] md:pr-10 sm:pr-5 pr-[120px] w-[92%] md:w-full">
                      <Text
                        className="font-normal text-white_A700"
                        variant="body3"
                      >
                        หยุดเมื่อเทิร์นโอเวอร์
                      </Text>
                      <Img
                        src="images/img_button_white_a700.svg"
                        className="h-[22px] mt-[3px] rounded-[11px] w-11"
                        alt="buttonthree"
                      />
                    </div>
                    <Line className="bg-white_A700 h-0.5 mt-4 w-[92%]" />
                    <div className="flex flex-col mt-[7px] relative w-full">
                      <div className="flex flex-col mx-auto w-full">
                        <div className="flex flex-col justify-start mx-auto w-full">
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px]">
                            <Text
                              className="font-normal text-white_A700"
                              as="h6"
                              variant="h6"
                            >
                              กำหนดขาดทุนไม่เกิน
                            </Text>
                            <Text
                              className="font-normal text-white_A700"
                              variant="body3"
                            >
                              ข้อแนะนำ แนะนำให้ตั้ง 3 เท่าของกำไรที่เป้าหมาย
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-[7px] items-start justify-start pb-3.5 pl-[8.22px] pr-[8.23px] w-auto sm:w-full">
                            <div className="bg-white_A700 border border-gray_600 border-solid flex flex-row gap-1 items-center justify-start px-[17px] rounded-lg w-auto">
                              <Img
                                src="images/img_save.svg"
                                className="h-6 w-6"
                                alt="savetwo"
                              />
                              <Text
                                className="bg-white_A700 font-normal justify-center pb-[10.57px] md:pr-10 sm:pr-5 pr-[47.79px] pt-[9.43px] rounded-sm text-black_900_d8 w-auto"
                                variant="body3"
                              >
                                จำนวนเงิน
                              </Text>
                            </div>
                            <Text
                              className="bg-gradient2  flex font-normal h-[38px] items-center justify-center rounded-[50%] text-center text-shadow-ts text-white_A700 w-[38px]"
                              variant="body6"
                            >
                              หรือ
                            </Text>
                            <div className="bg-white_A700 border border-gray_600 border-solid flex flex-row gap-1 items-center justify-start px-[17px] rounded-lg w-auto">
                              <Img
                                src="images/img_cut.svg"
                                className="h-6 w-6"
                                alt="cut"
                              />
                              <Text
                                className="bg-white_A700 font-normal justify-center pb-[10.57px] pr-[12.79px] pt-[9.43px] rounded-sm text-black_900_d8 w-auto"
                                variant="body3"
                              >
                                จำนวนเปอเซ็นต์
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[-1.21px] mx-auto pb-6 sm:pr-5 pr-6 w-[92%] z-[1]">
                          <Text
                            className="font-normal text-white_A700"
                            variant="body3"
                          >
                            เก็บกำไรเข้ากระเป๋ากำไรและเริ่มเล่นใหม่
                          </Text>
                          <Img
                            src="images/img_button_white_a700.svg"
                            className="h-[22px] mt-0.5 rounded-[11px] w-11"
                            alt="buttonfour"
                          />
                        </div>
                      </div>
                      <Button
                        className="mt-[-NaNpx] z-[1]"
                        shape="RoundedBorder16"
                        size="sm"
                        variant="Outline"
                      >
                        <div className="bg-white_A700 cursor-pointer font-normal min-w-[394px] sm:min-w-full mt-[-14.28px] mx-auto text-2xl md:text-[22px] text-center text-white_A700 sm:text-xl z-[1]">
                          <div className="mt-[-NaNpx] z-[1]">สร้างเกมส์</div>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute md:h-[148px] h-[149px] px-[17px] right-[6%] top-[27%] w-96 sm:w-full">
              <div className="absolute bg-white_A700_49 border border-gray_200 border-solid h-[148px] inset-[0] m-auto px-[17px] rounded-lg shadow-bs1 w-full"></div>
              <div className="absolute flex flex-col gap-[0.37px] h-max inset-[0] items-start justify-start m-auto w-auto">
                <Text className="text-white_A700 w-auto" variant="body7">
                  ประวัติการชนะบอท P/B
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-[76%] md:w-full">
                    <div className="flex flex-row gap-[29px] items-center justify-between w-full">
                      <Text
                        className="font-normal text-white_A700"
                        as="h6"
                        variant="h6"
                      >
                        ไม้ 1 : 29 ครั้ง
                      </Text>
                      <Text
                        className="font-normal text-white_A700"
                        as="h6"
                        variant="h6"
                      >
                        ไม้ 5 : 0 ครั้ง
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[37px] items-center justify-between w-full">
                      <Text
                        className="font-normal text-white_A700"
                        as="h6"
                        variant="h6"
                      >
                        ไม้ 2 : 5 ครั้ง
                      </Text>
                      <Text
                        className="font-normal text-white_A700"
                        as="h6"
                        variant="h6"
                      >
                        ไม้ 6 : 0 ครั้ง
                      </Text>
                    </div>
                    <div className="flex flex-row gap-9 items-center justify-between w-[97%] md:w-full">
                      <Text
                        className="font-normal text-white_A700"
                        as="h6"
                        variant="h6"
                      >
                        ไม้ 3 : 9 ครั้ง
                      </Text>
                      <Text
                        className="font-normal text-white_A700"
                        as="h6"
                        variant="h6"
                      >
                        ไม้ 7 : 1 ครั้ง
                      </Text>
                    </div>
                    <Text
                      className="font-normal text-white_A700"
                      as="h6"
                      variant="h6"
                    >
                      ไม้ 4 : 4 ครั้ง
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[87px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <UserInformation
            className="absolute bg-gradient3  flex flex-col inset-x-[0] items-center justify-start mx-auto shadow-bs3 top-[0] w-full"
            buttonText="เติมเงิน"
            qrCodeImage="images/img_qrcode.svg"
            amountText="50,000.00"
          />
          <Img
            src="images/img_pro21.png"
            className="absolute h-[87px] inset-y-[0] left-[2%] my-auto object-cover w-[14%]"
            alt="protwentyone"
          />
        </div>
      </div>
    </>
  );
};

export default SettingPage;
