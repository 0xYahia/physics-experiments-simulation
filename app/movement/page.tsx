'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Movement() {
  const [isLeaveBack, setIsLeaveBack] = useState(true)
  console.log('yahia')
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
    </>
  )
}