'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Movement() {
  const [isLeaveBack, setIsLeaveBack] = useState(true)
  const [contentIndex, setContentIndex] = useState(0);
  const [isLeavePlay, setIsLeavePlay] = useState(true)
  const [isLeaveRefresh, setIsLeaveRefresh] = useState(true)

  const contentList = [
    'في خلال هذه التجربه سوف نتعرف علي مكونات الحركه.',
    'أختر قوة مناسبة من مربع اختيار القيم وليكن مقدارها 10 نيوتن لتحريك السيارة.',
    'اضعغط علي مفتاح التشغيل والايقاف لبدء التجربة',
    'اضغط على مفتاح التشغيل الإيقاف ﻹيقاف التجربة عندما يصل المنحني إلى نهايته.',
    'لاحظ شكل البياني المرسوم. \n(وهو عباة عن خط مستقيم يميل نحو الأعلي)',
    'احسب ميل الخط المستقيم من العلاقة: \nميل الخط المستقيم = (التغير في السرعة) / (التغير في الزمن)',
    'قارن النتيجه التي حصلت عليها مع مربع اختيار القيم الخاص بالتسارع.',
    'ميل الخط المستقيم = (18 - 0 ) / (3.6 - 0) \nميل الخط المستقيم (التسارع) = = 5 م/ث²',
]

const [balls, setBalls] = useState([
  { name: 'ball1', id: '1', src: '/assets/ball1.png', container: null, x:0, y: 0, activity: null, weight: 3 },
])

const handleNextClick = () => {
  if (contentIndex < contentList.length - 1) {
      setContentIndex(contentIndex + 1)
  }
}

const handlePrevClick = () => {
  if (contentIndex > 0) {
      setContentIndex(contentIndex - 1)
  }
}

const dropBall = () => {
  setBalls((balls) => balls.map((ball: any) => {
      if (ball.name === ball.activity) {
          return { ...ball, y: '80%' }
      }
      return ball
  }))
}

const reload = () => {
  window.location.reload();
}


  return (
    <>
    {/* Header */}
      <div className="header flex justify-between items-center fixed z-50 top-0 left-0 px-6 text-white w-full h-[56px] py-2 bg-[#5484FF]">
        <div className='flex items-center gap-2'>
          <Image src='/assets/image1.png' alt="image1" width={40} height={40} />
          <div className='font-bold text-[18px] mt-[5px]'>محاكاة التجارب الفيزيائيه</div>
        </div>
        <div className='headerLeft flex items-center'>
          <div className='flex items-center px-3 py-2 gap-4'>
            <Image src='/assets/forward.png' alt="image1" width={24} height={24} />
            <p className='text-white font-extrabold text-[18px]'>تجربة مكونات الحركه</p>
            <Image src='/assets/backward.png' alt="image1" width={24} height={24} />
          </div>
          <hr className='bg-[##ffffff54] w-[32px] h-[1px] rotate-90' />
          <div className='pr-4 pl-2'>
            <Link href={'/'} className='flex items-center  gap-2' onMouseLeave={() => setIsLeaveBack(true)} onMouseOver={() => setIsLeaveBack(false)}>
              {
                isLeaveBack ? <Image src='/assets/backDefault.png' alt="image1" width={98} height={98} /> :
                  <Image src='/assets/backHover.png' alt="image1" width={98} height={98} />
              }

            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center items-center">
        {/* <Image src='/assets/movement.png' alt="image1" width={1200} height={1200} /> */}
        <div className="mt-20 bg-[url('/assets/movement.png')] w-[1440px] h-[680px] bg-no-repeat bg-cover bg-center relative ">
          <div className="mr-5 mt-5 flex flex-col gap-3">
            <p className="mr-1 font-bold">قوة الدفع</p>
            <div className="bg-white border rounded-lg flex justify-between w-40 px-3 py-1">
              <span className="font-black">10 نيوتن</span>
              <div className="flex gap-4">
                <button className="text-4xl font-black text-[#FF5454]" >-</button>
                <button className="text-4xl font-black text-[#39B200]">+</button>
              </div>
            </div>
          </div>
          <Image className="absolute left-6 bottom-12" src='/assets/car.png' alt="image1" width={280} height={179} />
        </div>
        <div className="flex items-center w-full bg-white">
          <div className='flex items-center gap-10 mt-[8px] w-1/4 justify-center'>
              <div onMouseLeave={() => setIsLeavePlay(true)} onMouseOver={() => setIsLeavePlay(false)} className='custom-transition' >
                  {
                      isLeavePlay ? <Image onClick={dropBall} src='/assets/playDefault.png' alt='play' width={110} height={50} className='cursor-pointer mt-3' /> :
                      <Image onClick={dropBall} src='/assets/playHover.png' alt='play' width={110} height={50} className='cursor-pointer mt-3' />
                  }
              </div>
              <div onMouseLeave={() => setIsLeaveRefresh(true)} onMouseOver={() => setIsLeaveRefresh(false)} className='custom-transition' >
                  {
                      isLeaveRefresh ? <Image onClick={reload} src='/assets/refreshDefault.png' alt="image1" width={50} height={50} /> :
                      <Image onClick={reload} src='/assets/refreshHover.png' alt="image1" width={50} height={50} className='cursor-pointer' />
                  }
              </div>
          </div>
          <hr className="h-16 w-[2px] ml-11 bg-[#CCD2D9]" />
          <div className="content w-3/4 h-[14%] flex justify-between items-center px-5 py-8 gap-10">
              {
                contentIndex !== (contentList.length - 1) ? <Image src='/assets/right.png' alt="image1" width={40} height={40} className='cursor-pointer h-[40px]' onClick={handleNextClick} /> :
                <Image src='/assets/lastRight.png' alt="image1" width={40} height={40} className='cursor-pointer h-[40px]' />
              }
              <p className='text-[22px] flex justify-center items-center h-[60px] font-bold text-[#252C3C] whitespace-pre' >{contentList[contentIndex]}</p>
                  {
                      contentIndex !== 0 ? <Image src='/assets/left.png' alt="image1" width={40} height={40} className='cursor-pointer h-[40px]' onClick={handlePrevClick} /> :
                      <Image src='/assets/lastLeft.png' alt="image1" width={40} height={40} className='cursor-pointer h-[40px]' />
                  }
          </div>
        </div>
      </div>
    </>
  )
}