import React from "react";

import { Img, List, Text } from "components";

const BotDescription = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-normal font-prompt text-white_A700"
          variant="body6"
        >
          เราพัฒนา iBotX เพื่อทำหน้าที่แทนมนุษย์สำหรับการลงทุนในเกม
          โดยมีกลุ่มโปรแกรมเมอร์ระดับประเทศ
          ที่ออกแบบระบบอัลกอริทึมอันซับซ้อนเพื่อช่วยมนุษย์ในการลบจุดด้อย ได้แก่
        </Text>
        <div className="flex flex-col items-start justify-start mt-3 w-auto md:w-full">
          <List
            className="flex-col gap-3.5 grid items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 md:flex-col flex-row gap-[15px] items-center justify-start md:pr-10 sm:pr-5 pr-[422px] w-full">
              <Img
                src="images/img_heartbeatwebp.png"
                className="h-[45px] md:h-auto object-cover w-[45px]"
                alt="heartbeatwebp"
              />
              <div className="flex sm:flex-1 flex-col gap-[8.42px] items-start justify-start w-auto sm:w-full">
                <Text
                  className="font-normal font-prompt text-white_A700 w-auto"
                  as="h6"
                  variant="h6"
                >
                  ความสามารถในการหักห้ามใจ
                </Text>
                <Text
                  className="font-normal font-prompt text-white_A700 w-auto"
                  variant="body6"
                >
                  มนุษย์มีความโลภและการขาดวินัยในการลงทุน
                  ไม่มีความรู้หรือไม่อาจหักห้ามใจได้ เมื่อได้กำไรหรือเสีย
                </Text>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-3.5 items-center justify-start md:pr-10 sm:pr-5 pr-[390px] w-full">
              <Img
                src="images/img_gainwebp.png"
                className="h-[45px] md:h-auto object-cover w-[45px]"
                alt="gainwebp"
              />
              <div className="flex md:flex-1 flex-col gap-[8.42px] items-start justify-start w-auto md:w-full">
                <Text
                  className="font-normal font-prompt text-white_A700 w-auto"
                  as="h6"
                  variant="h6"
                >
                  ใช้สถิติในการตัดสินใจ
                </Text>
                <Text
                  className="font-normal font-prompt text-white_A700 w-auto"
                  variant="body6"
                >
                  มีระบบการเก็บสถิติ
                  และวิเคราะห์ผลลัพธ์โดยใช้สถิติในการคำนวนความน่าจะเป็นที่จะเกิดขึ้น
                  ที่มนุษย์ทำไม่ได้
                </Text>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-[15px] items-center justify-start md:pr-10 sm:pr-5 pr-[333px] w-full">
              <Img
                src="images/img_robotwebp.png"
                className="h-[45px] md:h-auto object-cover w-[45px]"
                alt="robotwebp"
              />
              <div className="flex md:flex-1 flex-col gap-[8.42px] items-start justify-start w-auto md:w-full">
                <Text
                  className="font-normal font-prompt text-white_A700 w-auto"
                  as="h6"
                  variant="h6"
                >
                  ความแม่นยำในการวิเคราะห์
                </Text>
                <Text
                  className="font-normal font-prompt text-white_A700 w-auto"
                  variant="body6"
                >
                  มนุษย์มีเวลาและความเหนื่อยล้าที่จำกัดทำให้ประสิทธิภาพในการเล่นเกมลดลง
                  ทำให้วิเคราะห์หรือเกิดความผิดพลาดได้
                </Text>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-[15px] items-center justify-start md:pr-10 sm:pr-5 pr-[376px] w-full">
              <Img
                src="images/img_bookswebp.png"
                className="h-[45px] md:h-auto object-cover w-[45px]"
                alt="bookswebp"
              />
              <div className="flex md:flex-1 flex-col gap-[8.42px] items-start justify-start w-auto md:w-full">
                <Text
                  className="font-normal font-prompt text-white_A700 w-auto"
                  as="h6"
                  variant="h6"
                >
                  ไม่ต้องเรียนรู้วิธีการเล่น
                </Text>
                <Text
                  className="font-normal font-prompt text-white_A700 w-auto"
                  variant="body6"
                >
                  คุณเพียงแค่เข้าใจในวิธีการตั้งค่าบอท
                  โดยที่ไม่จำเป็นต้องเข้าใจในกฏกติกาของเกม
                  คุณก็จะสามารถทำเงินได้
                </Text>
              </div>
            </div>
          </List>
        </div>
        <Text
          className="font-normal font-prompt leading-[22.00px] text-white_A700 w-full"
          variant="body6"
        >
          ปัจจุบันคุณสามารถเลือกลงทุนได้ใน 3 เกมหลักๆ คือ เกมการ์ด ลูกเหล็ก
          และพยัคฆ์ มกร โดยสามารถตั้งค่าได้ว่าจะลงทุนแบบไหนเป็นพิเศษ เช่น
          น้ำเงินเท่านั้น แดงเท่านั้น หรือทั้งสอง
          และยังมีรูปแบบการเล่นที่หลากหลายตามแต่ผู้ใช้งานจะตั้งค่าเลือก
          และยังสามารถตั้งค่าให้ iBotX หยุดเมื่อกำไรขาดทุนเท่าไหร่ได้อีกด้วย
        </Text>
        <Text
          className="font-normal font-prompt my-[13px] text-white_A700"
          variant="body6"
        >
          ทำให้ลดความเสี่ยงในการลงทุนได้อย่างมหาศาล ที่สำคัญ ibotx
          จะมีการอัพเดทสถิติตัวเองทุกๆ วันเพื่อความแม่นยำ
          และมีโปรแกรมเมอร์พัฒนาและเพิ่มเติมฟังชั่นอัปเดต iBotX เองอยู่เสมอ
        </Text>
      </div>
    </>
  );
};

BotDescription.defaultProps = {};

export default BotDescription;
