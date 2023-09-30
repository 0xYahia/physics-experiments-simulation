import Image from 'next/image';
import Link from 'next/link';

export default function test(){

    return (
        <div className="flex justify-between items-center text-white w-full h-[56px] py-2 px-6 bg-[#5484FF]">
            <div className='flex items-center gap-2'>
                <Image src='/assets/image1.png' alt="image1" width={40} height={40} />
                <div className='font-bold text-[18px] mt-[5px]'>محاكاة التجارب الفيزيائيه</div>
            </div>
            <div className='headerLeft flex items-center'>
                <div className='flex items-center px-3 py-2 gap-4'>
                    <Image src='/assets/forward.png' alt="image1" width={40} height={40} />
                    <p className='text-white font-bold text-[18px]'>تجربة الوزن او الثقل</p>
                    <Image src='/assets/backward.png' alt="image1" width={40} height={40} />
                </div>
                <hr className='bg-[##ffffff54] w-[32px] h-[1px] rotate-90'/>
                <div className='flex items-center gap-2 pr-4 pl-2'>
                    <span className='text-white font-bold text-[18px]'>رجوع</span>
                    <Link href={'/'}>
                        <Image src='/assets/backBtn.png' alt="image1" width={40} height={40} />
                    </Link>
                </div>
            </div>
        </div>)
}