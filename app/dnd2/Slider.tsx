import Image from "next/image";
import { useState } from "react";

export default function Slider(){
  const [contentIndex, setContentIndex] = useState(0);
  const contentList = [
    'في هذه التجربه سوف نتعرف علي المقصود بالوزن (الثقل).',
    'اسحب احدي الكرات من اليمين واجعلها تسقط سقوطا حرا علي كل من الكواكب المبينه بالشكل, \n مع ملاحظة قيمة تسارع الجاذبيه علي الكواكب المختلفه.',
    'قم بإيقاف التجربه مستخدما زر الايقاف والتشغيل, ولاحظ وزن كل كره علي الكواكب المختلفه \n خلال قيمة الوزن المصاحب للكره.',
    'يمكنك حساب وزن كل كره علي اي من الكواكب باستخدام القانون / ق(نيوتن) = ك (كيلو جرام) X ج(م/ث2)',
    'علي اي كوكب من الكواكب الموجوده يكون وزن الجسم اكبر ؟ \n أ- علي الارض            ب- علي القمر            ج- علي المريخ',
  ]

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
  return(
    <div className="content flex justify-center items-center px-10 py-8 gap-10 border-t-[1px] border-[#CCD2D9]">
    {contentIndex !== (contentList.length - 1) ? <Image src='/assets/right.png' alt="image1" width={40} height={40} className='cursor-pointer' onClick={handleNextClick} /> :
      <Image src='/assets/lastRight.png' alt="image1" width={40} height={40} className='cursor-pointer' />
    }
    <p className='text-[22px] font-medium text-[#252C3C] whitespace-pre' >{contentList[contentIndex]}</p>
    {contentIndex !== 0 ? <Image src='/assets/left.png' alt="image1" width={40} height={40} className='cursor-pointer' onClick={handlePrevClick} /> :
      <Image src='/assets/lastLeft.png' alt="image1" width={40} height={40} className='cursor-pointer' />
    }
  </div>
  )
}