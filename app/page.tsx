"use client";

import Image from "next/image";
import Link from "next/link";

export default function Test() {
  return (
    <div className="container px-6">
      {/* Header */}
      <div className="header flex justify-start gap-2 items-center fixed z-50 top-0 left-0 px-6 text-white w-full h-[56px] py-2 bg-[#5484FF]">
        <Image src="/assets/image1.png" alt="image1" width={40} height={40} />
        <div className="flex items-center font-bold text-[18px] mt-[5px]">
          محاكاة التجارب الفيزيائيه
        </div>
      </div>
      <div className="p-6 mt-20">
        <p className="text-[32px] font-bold">
          مرحبا بك في برنامج محاكاة التجارب الفيزيائيه
        </p>
      </div>
      {/* Cards */}
      <div className="flex justify-center gap-16 mx-28">
        <Link href={"./weight"}>
          <div className="w-[363px] flex justify-center flex-col rounded-2xl cursor-pointer">
            <Image
              src="/assets/test1.svg"
              alt="image1"
              width={363}
              height={363}
              className="w-full rounded-t-lg"
            />
            <div className="bg-white p-6 flex items-center gap-[18px] rounded-b-lg	">
              <Image
                src="/assets/test1.png"
                alt="image1"
                width={34}
                height={34}
              />
              <p className="text-[24px] mt-2 text-black font-bold">
                تجربة الوزن والثقل
              </p>
            </div>
          </div>
        </Link>
        <Link href={"./movement"}>
          <div className="w-[363px] flex justify-center flex-col rounded-2xl">
            <div className="flex justify-center">
              <Image
                src="/assets/movementCover.png"
                alt="image1"
                width={363}
                height={363}
                className="w-full rounded-t-lg"
              />
            </div>
            <div className="bg-white p-6 flex items-center gap-[18px] rounded-b-lg	">
            <Image
                src="/assets/car.webp"
                alt="image1"
                width={34}
                height={34}
              />
              <p className="text-[24px] mt-2 text-black font-bold p2">
                تجربة مكونات الحركه
              </p>
            </div>
          </div>
        </Link>
        <div className="w-[363px] flex justify-center flex-col rounded-2xl">
          <div className="flex justify-center">
            <Image
              src="/assets/test2.jpeg"
              alt="image1"
              width={363}
              height={363}
              className="w-full rounded-t-lg"
            />
          </div>
          <div className="bg-white p-6 flex items-center gap-[18px] rounded-b-lg">
            <div className="w-[35px] h-[35px] rounded-full bg-[#EDEDED]"></div>
            <p className="text-[24px] mt-2 text-black font-bold">
              تجربة العدسات
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
