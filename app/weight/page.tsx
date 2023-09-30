import Image from 'next/image';
import Link from 'next/link';

export default function test(){

    return (
        <div className="container px-6">
            {/* Header */}
            <div className="header flex justify-between items-center fixed z-50 top-0 left-0 px-6 text-white w-full h-[56px] py-2 bg-[#5484FF]">
                <div className='flex items-center gap-2'>
                    <Image src='/assets/image1.png' alt="image1" width={40} height={40} />
                    <div className='font-bold text-[18px] mt-[5px]'>محاكاة التجارب الفيزيائيه</div>
                </div>
                <div className='headerLeft flex items-center'>
                    <div className='flex items-center px-3 py-2 gap-4'>
                        <Image src='/assets/forward.png' alt="image1" width={24} height={24} />
                        <p className='text-white font-bold text-[18px]'>تجربة الوزن او الثقل</p>
                        <Image src='/assets/backward.png' alt="image1" width={24} height={24} />
                    </div>
                    <hr className='bg-[##ffffff54] w-[32px] h-[1px] rotate-90'/>
                    <div className='pr-4 pl-2'>
                        <Link href={'/'} className='flex items-center  gap-2'>
                            <span className='text-white font-bold text-[18px]'>رجوع</span>
                            <Image src='/assets/backBtn.png' alt="image1" width={34} height={34} />
                        </Link>
                    </div>
                </div>
            </div>
            {/* Content */}
            <div className='content mt-20 flex justify-center gap-6'>
                {/* Sidebar */}
                <div className='mainBalls flex flex-col px-2 pt-2 pb-8 items-center gap-[160px] rounded-lg bg-[#5484FF] w-[138px]'>
                    <div className='balls flex flex-col gap-1 w-full'>
                        <div className=' bg-[#466fd8] rounded-md flex items-center flex-col'>
                            <div className='images  px-[10px] pt-[10px] pb-[8px] flex flex-col items-center relative'>
                            <Image src='/assets/ball1.png' alt="image1" width={94} height={94} className='z-10 transition-all duration-75 ease-linear cursor-pointer hover:scale-110' />
                            <Image src='/assets/base.png' alt="image1" width={98} height={52} className='absolute top-[58px]' />
                            </div>
                            <p className='mt-7 text-white font-extrabold'>1 كيلو جرام</p>
                        </div>
                        <div className=' bg-[#466fd8] rounded-md flex items-center flex-col'>
                            <div className='images  px-[10px] pt-[10px] pb-[8px] flex flex-col items-center relative'>
                                <Image src='/assets/ball2.png' alt="image1" width={94} height={94} className='z-10 transition-all duration-75 ease-in cursor-pointer hover:scale-110' />
                                <Image src='/assets/base.png' alt="image1" width={98} height={52} className='absolute top-[58px]' />
                            </div>
                            <p className='mt-7 text-white font-extrabold'>2 كيلو جرام</p>
                        </div>
                        <div className=' bg-[#466fd8] rounded-md flex items-center flex-col'>
                            <div className='images  px-[10px] pt-[10px] pb-[8px] flex flex-col items-center relative'>
                                <Image src='/assets/ball3.png' alt="image1" width={94} height={94} className='z-10 transition-all duration-75 ease-in cursor-pointer hover:scale-110' />
                                <Image src='/assets/base.png' alt="image1" width={98} height={52} className='absolute top-[58px]' />
                            </div>
                            <p className='mt-7 text-white font-extrabold'>3 كيلو جرام</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-6'>
                        <hr className='bg-[##ffffff54] w-[110px] h-[1px]'/>
                        <button className='bg-[#FBAC14]  w-[110px] h-[50px] rounded-lg text-[18px] text-white font-black'>تشغيل</button>
                        <div className='p-2 mt-2 w-[50px] h-[50px] rounded-full bg-[#FBAC14]'>
                            <Image src='/assets/refresh.png' alt="image1" width={32} height={32} />
                        </div>
                    </div>
                </div>
                {/* Plants */}
                <div className='border-[1px] border-[#CCD2D9] rounded-lg'>
                    <div className='images flex rounded-lg p-3'>
                        <div className=''>
                            <Image src='/assets/mars.svg' alt="image1" width={381} height={704} />
                            <div></div>
                        </div>
                        <div>
                            <Image src='/assets/moon.svg' alt="image1" width={381} height={704} />
                            <div></div>
                        </div>
                        <div>
                            <Image src='/assets/earth.svg' alt="image1" width={381} height={704 } />
                            <div></div>
                        </div>
                    </div>
                    <div className="content flex justify-center items-center px-10 py-8 gap-10 border-t-[1px] border-[#CCD2D9]">
                        <Image src='/assets/right.png' alt="image1" width={40} height={40} />
                        <p>في هذه التجربه سوف نتعرف علي المقصود بالوزن (الثقل).</p>
                        <Image src='/assets/left.png' alt="image1" width={40} height={40} />
                    </div>
                </div>
            </div>
        </div>
        )
}