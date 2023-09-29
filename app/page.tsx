import Image from 'next/image';

export default function test(){

    return (
    <div className="flex justify-center ">
        <div className="flex justify-start align-middle flex-row-reverse gap-[8px] text-white w-full h-[56px] py-[8px] pr-[24px] bg-[#5484FF]">
            <Image src='/assets/image1.png' alt="image1" width={40} height={40} />
            <div className='flex items-center'>محاكاة التجارب الفيزيائيه</div>
        </div>
    </div>)

}