import React from "react";

import { Button, Img, SelectBox, Text } from "components";

const ibot1679198665444OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const UserInformation = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-[61%] md:w-full">
          <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[600px] w-full">
            <div className="flex flex-row gap-5 items-center justify-start pl-5 w-auto">
              <Button
                className="cursor-pointer font-bold font-prompt min-w-[75px] text-base text-black_900 text-center"
                shape="RoundedBorder16"
                size="md"
                variant="OutlineLightgreen90094"
              >
                {props?.buttonText}
              </Button>
              <div className="flex flex-col pt-[18px] relative w-[64%]">
                <SelectBox
                  className="font-medium font-prompt mx-auto text-base text-left text-white_A700 w-full"
                  placeholderClassName="text-white_A700"
                  indicator={
                    <Img
                      src="images/img_frame.svg"
                      className="h-3.5 mr-[0] w-3.5 right-[0] mt-[-NaNpx] z-[1]"
                      alt="Frame"
                    />
                  }
                  isMulti={false}
                  name="groupfortytwo"
                  options={ibot1679198665444OptionsList}
                  isSearchable={false}
                  placeholder="ibot1679198665444"
                />
                <div className="flex flex-row gap-[5px] items-start justify-start mt-[-19.21px] mx-auto pr-[5px] py-[5px] w-full z-[1]">
                  <Img
                    src={props?.qrCodeImage}
                    className="h-3.5 mt-[18px] w-3.5"
                    alt="qrcode"
                  />
                  <Text
                    className="font-medium font-prompt mt-4 text-lime_400"
                    variant="body6"
                  >
                    {props?.amountText}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UserInformation.defaultProps = {
  buttonText: "เติมเงิน",
  qrCodeImage: "images/img_qrcode.svg",
  amountText: "50,000.00",
};

export default UserInformation;
