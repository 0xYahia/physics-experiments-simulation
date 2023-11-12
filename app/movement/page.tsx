"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import plusImg from "/public/assets/plus.png";
import minusImg from "/public/assets/minus.png";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { DndContext, DragEndEvent, DragMoveEvent } from "@dnd-kit/core";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

export default function Movement() {
  const [isLeaveBack, setIsLeaveBack] = useState(true);
  const [contentIndex, setContentIndex] = useState(0);
  const [isLeavePlay, setIsLeavePlay] = useState(true);
  const [isLeaveRefresh, setIsLeaveRefresh] = useState(true);

  const [newtons, setNewtons] = useState(10);
  const [carRun, setCarRun] = useState(false);
  const [accelerate, setAccelerte] = useState(0);
  const [isDragMove, setIsDragMove] = useState(false);
  const [isDropped, setIsDropped] = useState(false);
  const chartState = useRef<{
    lastTimePassed: number;
    seriesCounter: number;
    chartCreate: boolean;
  }>({
    lastTimePassed: 0,
    seriesCounter: 0,
    chartCreate: false,
  });
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  // Assuming the mass is constant (2kg)
  // Formula: F = mass * acceleration ==> acceleration = F / mass
  const acceleration = (newtons: number) => newtons / 2;

  // Assuming the distance traveled is 32.4m
  // Formula: v = sqrt(2 * acceleration * 32.4)
  const finalSpeed = (newtons: number) =>
    Math.sqrt(2 * acceleration(newtons) * 32.4);

  // Assuming the initial velocity is zero
  // Formula: t = finalSpeed / acceleration
  const timePassing = (newtons: number) =>
    finalSpeed(newtons) / acceleration(newtons);

  const contentList = [
    "في خلال هذه التجربه سوف نتعرف علي مكونات الحركه.",
    "أختر قوة مناسبة من مربع اختيار القيم وليكن مقدارها 10 نيوتن لتحريك السيارة.",
    "اضعغط علي مفتاح التشغيل والايقاف لبدء التجربة",
    "اضغط على مفتاح التشغيل الإيقاف ﻹيقاف التجربة عندما يصل المنحني إلى نهايته.",
    "لاحظ شكل البياني المرسوم. \n(وهو عباة عن خط مستقيم يميل نحو الأعلي)",
    "احسب ميل الخط المستقيم من العلاقة: \nميل الخط المستقيم = (التغير في السرعة) / (التغير في الزمن)",
    "قارن النتيجه التي حصلت عليها مع مربع اختيار القيم الخاص بالتسارع.",
    "ميل الخط المستقيم = (18 - 0 ) / (3.6 - 0) \nميل الخط المستقيم (التسارع) = = 5 م/ث²",
  ];

  const chartOptions = {
    credits: {
      enabled: false,
    },
    chart: {
      type: "line",
      animation: false,
      height: 315,
      width: 662,
      style: {
        fontFamily:
          "__Tajawal_548b57, __Tajawal_Fallback_548b57 , Arial, sans-serif",
        fontSize: "1.2rem",
        color: "#000",
      },

      events: {
        load: function () {
          if (!chartState.current.chartCreate)
            setTimeout(() => {
              chartRef.current?.chart.addSeries({
                name: "التسارع 0",
                type: "line",
                data: [[0, 0]],
                showInLegend: false,
              });
            }, 200);
          chartState.current.chartCreate = true;
        },
      },
    },
    title: {
      text: "تمثيل بياني لعجلة التسارع",
    },
    xAxis: {
      title: {
        text: "توقيت المحاكاة",
        style: {
          stroke: "#000",
        },
        align: "high",
      },
      left: "60px",
      min: 0,
      max: 18,
      tickAmount: 10,
      gridLineWidth: 1,
    },
    yAxis: {
      title: {
        text: "سرعة الحركة",
        style: {
          stroke: "#000",
        },
        align: "high",
        y: -15,
        x: 30,
        rotation: 0,
        offset: 0,
      },
      left: "60px",
      min: 0,
      max: finalSpeed(newtons) > 30 ? finalSpeed(newtons) : 30,
      tickAmount: 7,
      gridLineWidth: 1,
    },
    tooltip: {
      headerFormat:
        '<b style="font-size:15px; text-align:right">{series.name}</b><br/>',
      pointFormat: "{point.y} (m/s²) / {point.x} (s)",
      style: {
        stroke: "blue",
      },
    },
  };

  const handleNextClick = () => {
    if (contentIndex < contentList.length - 1) {
      setContentIndex(contentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (contentIndex > 0) {
      setContentIndex(contentIndex - 1);
    }
  };

  const handlePlayClick = () => {
    if (carRun) return;
    setCarRun(true);

    const steps = Math.ceil(timePassing(newtons) * 10);
    let seriesData: number[][] = [];
    let timeStep = timePassing(newtons) / steps;
    let speedStep = finalSpeed(newtons) / steps;
    for (let i = 1; i <= steps; i++) {
      seriesData.push([
        +(chartState.current.lastTimePassed + timeStep * i).toFixed(2),
        +(speedStep * i).toFixed(2),
      ]);
    }

    /////////////////////////
    const seriesId = crypto.randomUUID();
    const x = "";
    chartRef.current?.chart.addSeries({
      name: "التسارع " + acceleration(newtons) + "(م/ث²)",
      type: "line",
      id: seriesId,
      showInLegend: false,
    });

    const series = chartRef.current?.chart.get(seriesId) as any;
    let timer!: any;
    let i = 0;
    timer = setInterval(() => {
      series?.setData([[chartState.current.lastTimePassed, 0], seriesData[i]]);
      i++;
      if (i > steps) {
        // TO down
        series?.setData([
          [chartState.current.lastTimePassed, 0],
          seriesData[i - 2],
          [
            +(chartState.current.lastTimePassed + timePassing(newtons)).toFixed(
              2
            ),
            0,
          ],
        ]);

        chartState.current.lastTimePassed += +timePassing(newtons).toFixed(2);
        setAccelerte(acceleration(newtons));
        clearInterval(timer);
      }
    }, 100);

    setIsDropped(false);
    setIsDragMove(false);
  };

  const reload = () => {
    // setCarRun(false);
    location.reload();
  };

  const dragEndHandle = (e: DragEndEvent) => {
    setIsDropped(true);
    setIsDragMove(false);
    setTimeout(() => {
      setCarRun(false);
      setIsDropped(false);
    }, 600);
  };
  const dragMoveHandle = (e: DragMoveEvent) => {
    setIsDragMove(true);
  };

  return (
    <>
      <div className=" w-[100%] h-[976px] flex justify-center">
        <DndContext
          id="movement-dnd-context"
          onDragEnd={dragEndHandle}
          onDragMove={dragMoveHandle}
        >
          {/* Header */}
          <div className="header flex justify-between items-center fixed z-50 top-0 left-0 px-6 text-white w-full h-[56px] py-2 bg-[#5484FF]">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/image1.png"
                alt="image1"
                width={40}
                height={40}
              />
              <div className="font-bold text-[18px] mt-[5px]">
                محاكاة التجارب الفيزيائيه
              </div>
            </div>
            <div className="headerLeft flex items-center">
              <div className="flex items-center px-3 py-2 gap-4">
                <Image
                  src="/assets/forward.png"
                  alt="image1"
                  width={24}
                  height={24}
                />
                <p className="text-white font-extrabold text-[18px]">
                  تجربة مكونات الحركه
                </p>
                <Image
                  src="/assets/backward.png"
                  alt="image1"
                  width={24}
                  height={24}
                />
              </div>
              <hr className="bg-[##ffffff54] w-[32px] h-[1px] rotate-90" />
              <div className="pr-4 pl-2">
                <Link
                  href={"/"}
                  className="flex items-center  gap-2"
                  onMouseLeave={() => setIsLeaveBack(true)}
                  onMouseOver={() => setIsLeaveBack(false)}
                >
                  {isLeaveBack ? (
                    <Image
                      src="/assets/backDefault.png"
                      alt="image1"
                      width={98}
                      height={98}
                    />
                  ) : (
                    <Image
                      src="/assets/backHover.png"
                      alt="image1"
                      width={98}
                      height={98}
                    />
                  )}
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className=" h-[790px] w-[1392px] mt-[80px]  ">
            {/* <Image src='/assets/movement.png' alt="image1" width={1200} height={1200} /> */}
            <Droppable id="movement-droppable">
              <div className="h-[100%] relative bg-[url('/assets/movement.png')] bg-no-repeat bg-[length:100%_683px] bg-center">
                <div className=" flex flex-col gap-1">
                  <p className=" mt-4 mr-4 font-bold text-xl">قوة الدفع</p>
                  <div className="bg-white border rounded-lg flex  justify-between w-52 h px-3 py-1 mr-4 ">
                    <div className="flex items-center">
                      <span className="text-xl  font-black">
                        {newtons} نيوتن
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => {
                          if (newtons > 1) setNewtons(newtons - 1);
                        }}
                      >
                        <Image
                          src={minusImg}
                          alt="minus button"
                          width={32}
                          height={32}
                        />
                      </button>
                      <button
                        onClick={() => setNewtons(newtons + 1)}
                        // className="text-4xl font-black text-[#39B200]"
                      >
                        <Image
                          src={plusImg}
                          alt="plus button"
                          width={32}
                          height={32}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 shadow-lg rounded-md overflow-hidden ">
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                    ref={chartRef}
                  />
                </div>
                <Draggable
                  id="movement-draggable"
                  state={{
                    isDragMove,
                    isDropped,
                    carRun,
                    duration: timePassing(newtons),
                  }}
                >
                  <div>
                    <Image
                      src="/assets/car.png"
                      alt="image1 "
                      width={280}
                      height={179}
                    />
                  </div>
                </Draggable>
                <p className=" absolute bottom-0 -translate-x-[50%] -translate-y-[20px] left-2/4 text-lg text-white font-black">
                  {" "}
                  التسارع = {accelerate} م/ث²
                </p>
              </div>
            </Droppable>

            <div className="flex items-center w-full bg-white h-[103px]">
              <div className="flex items-center gap-10 mt-[8px] w-1/4 justify-center">
                <div
                  onMouseLeave={() => setIsLeavePlay(true)}
                  onMouseOver={() => setIsLeavePlay(false)}
                  className="custom-transition"
                >
                  {isLeavePlay ? (
                    <Image
                      onClick={handlePlayClick}
                      src="/assets/playDefault.png"
                      alt="play"
                      width={110}
                      height={50}
                      className="cursor-pointer mt-3"
                    />
                  ) : (
                    <Image
                      onClick={handlePlayClick}
                      src="/assets/playHover.png"
                      alt="play"
                      width={110}
                      height={50}
                      className="cursor-pointer mt-3"
                    />
                  )}
                </div>
                <div
                  onMouseLeave={() => setIsLeaveRefresh(true)}
                  onMouseOver={() => setIsLeaveRefresh(false)}
                  className="custom-transition"
                >
                  {isLeaveRefresh ? (
                    <Image
                      onClick={reload}
                      src="/assets/refreshDefault.png"
                      alt="image1"
                      width={50}
                      height={50}
                    />
                  ) : (
                    <Image
                      onClick={reload}
                      src="/assets/refreshHover.png"
                      alt="image1"
                      width={50}
                      height={50}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              </div>
              <hr className="h-16 w-[2px] ml-11 bg-[#CCD2D9]" />
              <div className="content w-3/4 h-[14%] flex justify-between items-center px-5 py-8 gap-10">
                {contentIndex !== contentList.length - 1 ? (
                  <Image
                    src="/assets/right.png"
                    alt="image1"
                    width={40}
                    height={40}
                    className="cursor-pointer h-[40px]"
                    onClick={handleNextClick}
                  />
                ) : (
                  <Image
                    src="/assets/lastRight.png"
                    alt="image1"
                    width={40}
                    height={40}
                    className="cursor-pointer h-[40px]"
                  />
                )}
                <p className="text-[22px] flex justify-center items-center h-[60px] font-bold text-[#252C3C] whitespace-pre">
                  {contentList[contentIndex]}
                </p>
                {contentIndex !== 0 ? (
                  <Image
                    src="/assets/left.png"
                    alt="image1"
                    width={40}
                    height={40}
                    className="cursor-pointer h-[40px]"
                    onClick={handlePrevClick}
                  />
                ) : (
                  <Image
                    src="/assets/lastLeft.png"
                    alt="image1"
                    width={40}
                    height={40}
                    className="cursor-pointer h-[40px]"
                  />
                )}
              </div>
            </div>
          </div>
        </DndContext>
      </div>
    </>
  );
}
