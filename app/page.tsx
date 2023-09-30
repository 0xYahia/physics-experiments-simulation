import Image from 'next/image';
import Link from 'next/link';

export default function test(){

    return (
    <div >
        <div className="flex justify-start align-middle gap-[8px] text-white w-full h-[56px] py-[8px] pr-[24px] bg-[#5484FF]">
            <Image src='/assets/image1.png' alt="image1" width={40} height={40} />
            <div className='flex items-center font-bold text-[18px] mt-[5px]'>محاكاة التجارب الفيزيائيه</div>
        </div>
        <div className='p-6 mt-6'>
            <p className='text-[32px] font-bold'>مرحبا بك في برنامج محاكاة التجارب الفيزيائيه</p>
        </div>
        {/* Cards */}
        <div className='flex justify-center gap-16 mx-28'>
            <Link href={'./weight'}>
                <div className='w-[363px] flex justify-center flex-col rounded-2xl cursor-pointer'>
                    <Image src='/assets/image2.webp' alt="image1" width={363} height={363} className='w-full' />
                    <div className='bg-[#969696] p-6 flex items-center gap-[18px]'>
                        <div className='w-[35px] h-[35px] rounded-full bg-[#EDEDED]'></div>
                        <p className="text-[24px] mt-2 text-white font-medium">تجربة الوزن والثقل</p>
                    </div>
                </div>
            </Link>
            <div className='w-[363px] flex justify-center flex-col rounded-2xl'>
                <div className='flex justify-center'>
                    <Image src='/assets/image2.webp' alt="image1" width={363} height={363} className='w-full' />
                </div>
                <div className='bg-[#969696] p-6 flex items-center gap-[18px]'>
                    <div className='w-[35px] h-[35px] rounded-full bg-[#EDEDED]'></div>
                    <p className="text-[24px] mt-2 text-white font-medium">تجربة الوزن والثقل</p>
                </div>
            </div>
            <div className='w-[363px] flex justify-center flex-col rounded-2xl'>
                <div className='flex justify-center'>
                    <Image src='/assets/image2.webp' alt="image1" width={363} height={363} className='w-full' />
                </div>
                <div className='bg-[#969696] p-6 flex items-center gap-[18px]'>
                    <div className='w-[35px] h-[35px] rounded-full bg-[#EDEDED]'></div>
                    <p className="text-[24px] mt-2 text-white font-medium">تجربة الوزن والثقل</p>
                </div>
            </div>
        </div>
    </div>)
}