import React from "react";

import {
  Button,
  FloatingInput,
  Img,
  Input,
  Line,
  List,
  Switch,
  Text,
} from "components";
import UserInformation from "components/UserInformation";

const PlayPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-prompt h-[695px] justify-end mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat h-[1575px] sm:h-[2003px] md:h-[2509px] mt-auto mx-auto pl-[75px] pt-[75px] md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_divlayoutt.png')" }}
        >
          <div className="absolute bottom-[0] flex flex-col gap-[11px] items-start justify-start right-[5%] w-3/4">
            <div className="bg-gradient5  flex flex-col gap-[50px] h-[295px] md:h-auto items-start justify-start pb-[121.15px] rounded-bl-[16px] rounded-br-[16px] shadow-bs1 w-auto md:w-full">
              <div className="relative w-full">
                <div className="flex flex-col justify-end m-auto pt-[57px] w-full">
                  <Text
                    className="md:ml-[0] ml-[70px] mr-[506px] text-white_A700"
                    as="h3"
                    variant="h3"
                  >
                    ลูกเหล็ก (Steel Ball) ห้อง 1
                  </Text>
                  <div className="flex flex-col items-start justify-start pl-[70px] pr-[585.63px] md:px-10 sm:px-5 w-auto md:w-full">
                    <Text
                      className="font-normal text-white_A700 w-auto"
                      variant="body6"
                    >
                      เก็บ 0 ครั้ง (0.00) / เทิร์นโอเวอร์ 0.00
                    </Text>
                  </div>
                </div>
                <div className="absolute bg-gradient6  bottom-[0] h-[60px] left-[6%] w-[1%]"></div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[44.65px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start pl-[22.33px] pr-[22.34px] sm:px-5 w-auto"
                orientation="horizontal"
              >
                <div className="bg-gradient7  flex flex-col items-start justify-center p-4 rounded-[16px] shadow-bs4 w-full">
                  <Text
                    className="font-normal mt-1 text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    กำลังวิเคราะห
                  </Text>
                  <Text className="mb-1.5 text-white_A700" variant="body7">
                    ห้องน่าเล่น
                  </Text>
                </div>
                <div className="bg-gradient8  flex flex-col items-start justify-center p-4 rounded-[16px] shadow-bs4 w-full">
                  <Text
                    className="font-normal mt-1 text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    กำลังวิเคราะห
                  </Text>
                  <Text className="mb-1.5 text-white_A700" variant="body7">
                    โอกาสทำกำไร
                  </Text>
                </div>
                <div className="bg-gradient9  flex flex-col items-start justify-center p-4 rounded-[16px] shadow-bs4 w-full">
                  <Text
                    className="font-normal mt-1 text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    กำลังวิเคราะห
                  </Text>
                  <Text className="mb-1.5 text-white_A700" variant="body7">
                    บอทวิเคราะห
                  </Text>
                </div>
                <div className="bg-gradient10  flex flex-col items-start justify-center p-4 rounded-[16px] shadow-bs4 w-full">
                  <Text
                    className="font-normal mt-1 text-white_A700"
                    as="h6"
                    variant="h6"
                  >
                    กำลังวิเคราะห
                  </Text>
                  <Text className="mb-1.5 text-white_A700" variant="body7">
                    การเล่น
                  </Text>
                </div>
              </List>
            </div>
            <div className="font-helvetica h-[1194px] md:h-[1976px] pb-10 relative w-[1057px] md:w-full">
              <div className="absolute bg-gradient11  h-[1194px] inset-y-[0] left-[0] my-auto pb-10 rounded-tl-[16px] rounded-tr-[16px] shadow-bs1 w-[85%]"></div>
              <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                <div className="flex md:flex-col flex-row gap-5 items-start justify-start pb-2.5 pl-[27.11px] pr-[27.12px] pt-[30px] sm:px-5 w-auto md:w-full">
                  <div className="flex flex-col gap-5 items-start justify-start pb-[38px] w-auto sm:w-full">
                    <div className="bg-gray_900_49 flex flex-col items-start justify-start pb-[15px] pl-[0.04px] pr-[0.05px] rounded-lg w-auto sm:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[26px] items-start justify-end p-[3px] w-full">
                          <Text
                            className="font-normal md:ml-[0] ml-[18px] mt-0.5 text-white_A700_d8"
                            as="h6"
                            variant="h6"
                          >
                            ภาพรวมแสดงรายได้
                          </Text>
                          <div className="font-prompt h-[219px] md:ml-[0] ml-[19px] relative w-[90%]">
                            <div className="absolute bottom-[0] h-[210px] inset-x-[0] mx-auto w-[97%]">
                              <Img
                                src="images/img_vector_blue_700.svg"
                                className="absolute h-[200px] inset-[0] justify-center m-auto"
                                alt="vector"
                              />
                              <Img
                                src="images/img_group.svg"
                                className="absolute h-[210px] inset-[0] justify-center m-auto"
                                alt="group"
                              />
                            </div>
                            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                              <div className="flex flex-col gap-[13px] justify-start w-full">
                                <Text
                                  className="md:ml-[0] ml-[305px] text-center text-white_A700"
                                  variant="body9"
                                >
                                  800
                                </Text>
                                <div className="flex flex-row items-center justify-end md:ml-[0] ml-[188px] w-[38%] md:w-full">
                                  <Text
                                    className="text-center text-white_A700"
                                    variant="body9"
                                  >
                                    700
                                  </Text>
                                  <Text
                                    className="ml-[11px] text-center text-white_A700"
                                    variant="body9"
                                  >
                                    700
                                  </Text>
                                  <Text
                                    className="ml-[15px] text-center text-white_A700"
                                    variant="body9"
                                  >
                                    700
                                  </Text>
                                  <Text
                                    className="ml-[18px] text-center text-white_A700"
                                    variant="body9"
                                  >
                                    700
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-end md:ml-[0] ml-[161px] mr-[35px] w-2/5 md:w-full">
                                  <Text
                                    className="text-center text-white_A700"
                                    variant="body9"
                                  >
                                    600
                                  </Text>
                                  <Text
                                    className="ml-4 text-center text-white_A700"
                                    variant="body9"
                                  >
                                    600
                                  </Text>
                                  <Text
                                    className="ml-4 text-center text-white_A700"
                                    variant="body9"
                                  >
                                    600
                                  </Text>
                                  <Text
                                    className="ml-4 text-center text-white_A700"
                                    variant="body9"
                                  >
                                    600
                                  </Text>
                                </div>
                                <Text
                                  className="md:ml-[0] ml-[143px] text-center text-white_A700"
                                  variant="body9"
                                >
                                  500
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[125px] text-center text-white_A700"
                                  variant="body9"
                                >
                                  400
                                </Text>
                                <div className="flex flex-row items-center justify-start mr-[197px] w-2/5 md:w-full">
                                  <Text
                                    className="text-center text-white_A700"
                                    variant="body9"
                                  >
                                    200
                                  </Text>
                                  <Text
                                    className="ml-[52px] text-center text-white_A700"
                                    variant="body9"
                                  >
                                    300
                                  </Text>
                                  <Text
                                    className="ml-4 text-center text-white_A700"
                                    variant="body9"
                                  >
                                    300
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-start md:ml-[0] ml-[17px] w-[29%] md:w-full">
                                  <Text
                                    className="text-center text-white_A700"
                                    variant="body9"
                                  >
                                    200
                                  </Text>
                                  <Text
                                    className="ml-4 text-center text-white_A700"
                                    variant="body9"
                                  >
                                    200
                                  </Text>
                                  <Text
                                    className="ml-4 text-center text-white_A700"
                                    variant="body9"
                                  >
                                    200
                                  </Text>
                                </div>
                                <Text
                                  className="ml-9 md:ml-[0] text-center text-white_A700"
                                  variant="body9"
                                >
                                  100
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row font-prompt gap-[-0.01px] grid grid-cols-2 justify-start w-auto sm:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-white_A700 flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[184px] rotate-[180deg] rounded-br-[12px] rounded-tr-[12px] w-full">
                          <Line className="h-6 rounded-br-[12px] rounded-tr-[12px] shadow-bs5 w-px" />
                        </div>
                        <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[75.55px] w-auto">
                          <Text
                            className="font-normal text-white_A700 w-auto"
                            variant="body6"
                          >
                            0.00/10.00 (0%)
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="bg-white_A700 flex flex-col items-start justify-start rounded-br-[12px] rounded-tr-[12px] w-full">
                          <Line className="h-6 rounded-br-[12px] rounded-tr-[12px] shadow-bs6 w-px" />
                        </div>
                        <div className="flex flex-col items-start justify-start md:pl-10 sm:pl-5 pl-[96.32px] pr-[0.23px] w-auto">
                          <Text
                            className="font-normal text-right text-white_A700 w-auto"
                            variant="body6"
                          >
                            0/10.00 (0%)
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                    <div className="h-[295px] pb-[15px] pr-[0.31px] relative w-[638px] md:w-full">
                      <div className="absolute bg-gray_900_49 h-[295px] inset-y-[0] left-[0] my-auto pb-[15px] pr-[0.31px] rounded-lg w-[70%]"></div>
                      <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto pr-2.5 pt-2.5 top-[0] w-full">
                        <Text
                          className="font-normal md:ml-[0] ml-[19px] text-white_A700_d8"
                          as="h6"
                          variant="h6"
                        >
                          ภาพรวมบอท
                        </Text>
                        <Img
                          src="images/img_group_blue_700.svg"
                          className="h-[126px] md:ml-[0] ml-[30px] mt-[15px]"
                          alt="groupone"
                        />
                        <div className="border-gray_200_6c border-solid border-t h-[9px] mr-[185px] w-[71%]"></div>
                        <div className="font-prompt h-[23px] md:h-[93px] md:ml-[0] ml-[11px] mt-[71px] relative w-[23%]">
                          <div className="absolute bottom-[0] flex flex-row items-start justify-evenly left-[0] pb-1.5 w-[47%]">
                            <div className="bg-light_blue_A700_01 h-3.5 rounded-[7px] w-[44%]"></div>
                            <Text className="text-white_A700" variant="body9">
                              กราฟจุด
                            </Text>
                          </div>
                          <div className="absolute flex flex-row items-start justify-evenly pb-1.5 right-[0] top-[0] w-[90%]">
                            <div className="h-3.5 relative w-[69%]">
                              <div className="absolute bg-blue_gray_400 h-3.5 inset-y-[0] my-auto right-[0] rounded-[7px] w-[34%]"></div>
                              <div className="absolute bg-white_A700 h-[13px] inset-y-[0] left-[0] my-auto rounded-[35px] w-[82%]"></div>
                            </div>
                            <Text className="text-white_A700" variant="body9">
                              กราฟเส้น
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-prompt items-center justify-start p-1 w-[70%] md:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-[99%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <div className="flex flex-row items-start justify-evenly pb-4 w-full">
                              <Switch value={true} className="w-[53%]" />
                              <Text
                                className="font-normal mt-[3px] text-white_A700"
                                variant="body6"
                              >
                                แดง/ดำ
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:ml-[0] ml-[3px] relative w-[21%] sm:w-full">
                            <div className="flex flex-col items-start justify-start my-auto pr-[14.33px] w-auto">
                              <Switch value={false} className="w-full" />
                            </div>
                            <Text
                              className="font-normal ml-[-7.86px] my-auto text-white_A700 z-[1]"
                              variant="body6"
                            >
                              คู่/คี่
                            </Text>
                          </div>
                          <div className="flex sm:ml-[0] ml-[23px] relative w-2/5 sm:w-full">
                            <div className="flex flex-col items-start justify-start my-auto w-auto">
                              <div className="flex flex-row items-start justify-start pb-4 w-[85%]">
                                <Switch value={false} className="w-[57%]" />
                                <Text
                                  className="font-normal ml-1 mt-[3px] text-white_A700"
                                  variant="body6"
                                >
                                  สูง/ต่ำ
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start ml-[-7px] pr-[4.33px] w-auto z-[1]">
                              <Switch value={false} className="w-full" />
                            </div>
                          </div>
                          <Text
                            className="font-normal ml-0.5 sm:ml-[0] sm:mt-0 mt-[3px] text-white_A700"
                            variant="body6"
                          >
                            2 โซน
                          </Text>
                        </div>
                        <div className="flex relative w-[22%]">
                          <div className="flex flex-col items-start justify-start my-auto pr-[7.33px] w-auto">
                            <Switch value={false} className="w-full" />
                          </div>
                          <Text
                            className="font-normal ml-[-2.53px] my-auto text-white_A700 z-[1]"
                            variant="body6"
                          >
                            1 โซน
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-prompt gap-[30px] items-end justify-start w-auto md:w-full">
                  <div className="flex flex-row gap-[19.4px] items-start justify-start pb-[0.5px] md:pr-10 sm:pr-5 pr-[728.23px] w-auto md:w-full">
                    <Text
                      className="text-white_A700 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      การตั้งค่า
                    </Text>
                    <Text
                      className="text-white_A700 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      ซ่อน
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start p-[5px] w-full">
                    <div className="flex flex-col gap-2.5 items-center justify-start w-[88%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="bg-white_A700_49 border border-gray_200 border-solid md:h-[52px] h-[54px] relative rounded-lg shadow-bs1 w-[33%] md:w-full">
                          <div className="font-prompt md:h-[52px] h-[53px] m-auto w-[87%]">
                            <div className="absolute flex flex-col gap-[-0.63px] h-full inset-[0] items-start justify-start m-auto pb-[0.43px] md:pr-10 sm:pr-5 pr-[132.77px] w-auto">
                              <Text
                                className="text-white_A700 w-auto"
                                variant="body7"
                              >
                                รูปแบบการเล่น
                              </Text>
                              <Text
                                className="font-normal text-white_A700 w-auto"
                                as="h6"
                                variant="h6"
                              >
                                1 โซน
                              </Text>
                            </div>
                            <Img
                              src="defaultNoData.png"
                              className="absolute h-3.5 inset-y-[0] my-auto object-cover right-[0] w-[8%]"
                              alt="onehundredeleve"
                            />
                          </div>
                          <Text
                            className="absolute font-black font-inter h-max inset-y-[0] my-auto right-[6%] text-red_900_02"
                            variant="body6"
                          >
                            
                          </Text>
                        </div>
                        <div className="bg-white_A700_49 border border-gray_200 border-solid flex sm:flex-1 flex-col items-start justify-start px-[17px] rounded-lg shadow-bs1 w-auto sm:w-full">
                          <FloatingInput
                            wrapClassName="placeholder:bg-white_A700_49 font-normal placeholder:left-[0] p-0 md:pr-10 sm:pr-5 text-left placeholder:text-white_A700 text-white_A700 text-xl placeholder:top-[0] w-full"
                            className="font-normal md:pr-10 p-0 sm:pr-5 text-left text-white_A700 text-xl w-full"
                            name="ten"
                            labelClasses="bg-white_A700_49 left-[0] top-[0] text-white_A700"
                            focusedClasses="translate-y-[21px] scale-[1]"
                            wrapperClasses="sm:mx-0 w-full top-[0]"
                            labelText="ชิปเริ่มต้น"
                            defaultText="10"
                            size="sm"
                            variant="floatingtextfield0"
                          ></FloatingInput>
                        </div>
                        <div className="bg-white_A700_49 border border-gray_200 border-solid flex flex-col items-start justify-start px-[17px] rounded-lg shadow-bs1 w-auto">
                          <div className="flex flex-col gap-[-0.63px] items-start justify-start w-auto">
                            <Text
                              className="text-white_A700 w-auto"
                              variant="body7"
                            >
                              กำไรเป้าหมาย
                            </Text>
                            <div className="flex flex-col items-start justify-start pb-[0.43px] md:pr-10 sm:pr-5 pr-[60.77px] w-auto">
                              <Text
                                className="font-normal text-white_A700 w-auto"
                                as="h6"
                                variant="h6"
                              >
                                0.02% (0/10.00)
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="bg-white_A700_49 border border-gray_200 border-solid flex sm:flex-1 flex-col items-start justify-start px-[17px] rounded-lg shadow-bs1 w-auto sm:w-full">
                          <FloatingInput
                            wrapClassName="placeholder:bg-white_A700_49 font-normal placeholder:left-[0] p-0 sm:pr-5 text-left placeholder:text-white_A700 text-white_A700 text-xl placeholder:top-[0] w-full"
                            className="font-normal p-0 sm:pr-5 text-left text-white_A700 text-xl w-full"
                            name="onehundredfourt"
                            labelClasses="bg-white_A700_49 left-[0] top-[0] text-white_A700"
                            focusedClasses="translate-y-[21px] scale-[1]"
                            wrapperClasses="sm:mx-0 w-full top-[0]"
                            labelText="รูปแบบการเดินเงิน"
                            defaultText="มาติงเกล(กำหนดเอง)"
                            size="sm"
                            variant="floatingtextfield0"
                          ></FloatingInput>
                        </div>
                        <div className="bg-white_A700_49 border border-gray_200 border-solid flex sm:flex-1 flex-col items-start justify-start px-[17px] rounded-lg shadow-bs1 w-auto sm:w-full">
                          <FloatingInput
                            wrapClassName="placeholder:bg-white_A700_49 font-normal placeholder:left-[0] p-0 md:pr-10 sm:pr-5 text-left placeholder:text-white_A700 text-white_A700 text-xl placeholder:top-[0] w-full"
                            className="font-normal md:pr-10 p-0 sm:pr-5 text-left text-white_A700 text-xl w-full"
                            name="onehundredfifte"
                            labelClasses="bg-white_A700_49 left-[0] top-[0] text-white_A700"
                            focusedClasses="translate-y-[21px] scale-[1]"
                            wrapperClasses="sm:mx-0 w-full top-[0]"
                            labelText="เก็บเมื่อได้กำไรและเล่นใหม"
                            defaultText="ใช"
                            size="sm"
                            variant="floatingtextfield0"
                          ></FloatingInput>
                        </div>
                        <div className="bg-white_A700_49 border border-gray_200 border-solid flex flex-col items-start justify-start px-[17px] rounded-lg shadow-bs1 w-auto">
                          <div className="flex flex-col gap-[-0.64px] items-start justify-start pb-[0.01px] w-auto">
                            <Text
                              className="text-white_A700 w-auto"
                              variant="body7"
                            >
                              เสียไม่เกิน
                            </Text>
                            <div className="flex flex-col items-start justify-start pb-[0.43px] sm:pr-5 pr-[29.77px] w-auto">
                              <Text
                                className="font-normal text-white_A700 w-auto"
                                as="h6"
                                variant="h6"
                              >
                                0.02% (0.00/10.00)
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="bg-white_A700_49 border border-gray_200 border-solid md:h-[52px] h-[54px] relative rounded-lg shadow-bs1 w-[33%] md:w-full">
                          <div className="font-prompt md:h-[52px] h-[53px] m-auto w-[87%]">
                            <div className="absolute flex flex-col gap-[-0.63px] h-full inset-[0] items-start justify-start m-auto pb-[0.43px] md:pr-10 sm:pr-5 pr-[164.77px] w-auto">
                              <Text
                                className="text-white_A700 w-auto"
                                variant="body7"
                              >
                                แทงศูนย
                              </Text>
                              <Text
                                className="font-normal text-white_A700 w-auto"
                                as="h6"
                                variant="h6"
                              >
                                10
                              </Text>
                            </div>
                            <Img
                              src="defaultNoData.png"
                              className="absolute h-3.5 inset-y-[0] my-auto object-cover right-[0] w-[8%]"
                              alt="onehundredeight_One"
                            />
                          </div>
                          <Text
                            className="absolute font-black font-inter h-max inset-y-[0] my-auto right-[6%] text-red_900_02"
                            variant="body6"
                          >
                            
                          </Text>
                        </div>
                        <div className="bg-white_A700_49 border border-gray_200 border-solid flex sm:flex-1 flex-col items-start justify-start px-[17px] rounded-lg shadow-bs1 w-auto sm:w-full">
                          <FloatingInput
                            wrapClassName="placeholder:bg-white_A700_49 font-normal placeholder:left-[0] p-0 text-left placeholder:text-white_A700 text-white_A700 text-xl placeholder:top-[0] w-full"
                            className="font-normal p-0 text-left text-white_A700 text-xl w-full"
                            name="232023181640"
                            labelClasses="bg-white_A700_49 left-[0] top-[0] text-white_A700"
                            focusedClasses="translate-y-[21px] scale-[1]"
                            wrapperClasses="sm:mx-0 w-full top-[0]"
                            labelText="สร้างบอทเมื่อ"
                            defaultText="23 พ.ค. 2023 18:16:40"
                            size="sm"
                            variant="floatingtextfield0"
                          ></FloatingInput>
                        </div>
                        <div className="bg-white_A700_49 border border-gray_200 border-solid md:h-[52px] h-[54px] relative rounded-lg shadow-bs1 w-[33%] md:w-full">
                          <div className="font-prompt md:h-[52px] h-[53px] m-auto w-[87%]">
                            <div className="absolute flex flex-col gap-[-0.63px] h-full inset-[0] items-start justify-start m-auto pb-[0.43px] md:pr-10 sm:pr-5 pr-[142.77px] w-auto">
                              <Text
                                className="text-white_A700 w-auto"
                                variant="body7"
                              >
                                เล่นโดย
                              </Text>
                              <Text
                                className="font-normal text-white_A700 w-auto"
                                as="h6"
                                variant="h6"
                              >
                                ตามบอท
                              </Text>
                            </div>
                            <Img
                              src="defaultNoData.png"
                              className="absolute h-3.5 inset-y-[0] my-auto object-cover right-[0] w-[8%]"
                              alt="onehundredtwent_Two"
                            />
                          </div>
                          <Text
                            className="absolute font-black font-inter h-max inset-y-[0] my-auto right-[6%] text-red_900_02"
                            variant="body6"
                          >
                            
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-prompt items-start justify-end md:ml-[0] ml-[18px] pt-4 w-[81%] md:w-full">
                  <div className="flex flex-col gap-[29px] justify-start w-full">
                    <Text
                      className="ml-5 md:ml-[0] text-white_A700"
                      variant="body2"
                    >
                      มาติงเกล
                    </Text>
                    <Input
                      wrapClassName="w-full"
                      className="font-normal p-0 placeholder:text-black_900_d8 text-black_900_d8 text-left text-sm w-full"
                      name="divinfolabouche"
                      placeholder="10, 20"
                      shape="RoundedBorder8"
                      size="sm"
                      variant="FillWhiteA700"
                    ></Input>
                  </div>
                  <Text
                    className="ml-5 md:ml-[0] mt-[15px] text-white_A700"
                    as="h5"
                    variant="h5"
                  >
                    ประวัติการเล่น
                  </Text>
                  <div className="flex flex-col items-start justify-start mt-[30px] w-auto md:w-full">
                    <div className="bg-white_A700_66 flex flex-col items-start justify-start rounded-lg w-auto">
                      <div className="bg-gray_700_b2 flex sm:flex-col flex-row sm:gap-5 items-center justify-end p-[7px] rounded-lg w-full">
                        <Text
                          className="text-center text-white_A700"
                          variant="body5"
                        >
                          โต๊ะ / เกมท
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[142px] text-center text-white_A700"
                          variant="body5"
                        >
                          รูปแบบการเล่น
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[137px] text-center text-white_A700"
                          variant="body5"
                        >
                          จำนวนเงิน
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[107px] text-center text-white_A700"
                          variant="body5"
                        >
                          ผลที่ออก
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[72px] mr-[18px] text-center text-white_A700"
                          variant="body5"
                        >
                          เวลา
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-2.5 pb-3.5 md:px-10 sm:px-5 px-[378.76px] w-auto md:w-full">
                    <div className="flex flex-row items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer font-normal h-12 text-[14.4px] text-center text-white_A700 w-12"
                        shape="CustomBorderTL8"
                        size="lg"
                        variant="OutlineAmber600"
                      >
                        <>&lt;</>
                      </Button>
                      <Button
                        className="cursor-pointer font-normal h-12 text-[14.4px] text-center text-white_A700 w-12"
                        shape="CustomBorderLR8"
                        size="lg"
                        variant="OutlineAmber600_1"
                      >
                        <>&gt;</>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-black_900_7f flex flex-col items-center justify-end py-[57px] right-[0] rounded-[16px] top-[28%] w-[13%]">
            <div className="flex flex-col gap-2.5 items-start justify-start pl-[14.06px] pr-[14.07px] w-auto">
              <Button
                className="cursor-pointer font-normal min-w-[150px] text-base text-center text-white_A700"
                shape="CircleBorder20"
                size="md"
                variant="FillRedA70001"
              >
                ไม่ลงศูนย
              </Button>
              <Button
                className="cursor-pointer font-normal min-w-[150px] text-base text-center text-white_A700"
                shape="CircleBorder20"
                size="md"
                variant="FillLightblueA200"
              >
                สวนบอท
              </Button>
              <Button
                className="cursor-pointer font-normal min-w-[150px] text-base text-center text-white_A700"
                shape="CircleBorder20"
                size="md"
                variant="FillTeal90001"
              >
                {" "}
                เริ่มเกม
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[150px]"
                leftIcon={
                  <div className="mr-[5px] bg-white_A700">
                    <Img src="images/img_link.svg" alt="link" />
                  </div>
                }
                shape="CircleBorder20"
                size="md"
                variant="FillRedA70001"
              >
                <div className="font-normal text-base text-center text-white_A700">
                  {" "}
                  ปิดบอท
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute h-[87px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <UserInformation className="absolute bg-gradient3  flex flex-col inset-x-[0] items-center justify-start mx-auto shadow-bs3 top-[0] w-full" />
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

export default PlayPage;
