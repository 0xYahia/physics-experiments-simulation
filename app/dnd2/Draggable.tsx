import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import Image from 'next/image';
import MyImage from './images';


export default function Draggable() {
  const balls = [
    {name: 'ball1', id: '1', src: '/assets/ball1.png'},
    {name: 'ball2', id: '2', src: '/assets/ball2.png'},
    {name: 'ball3', id: '3', src: '/assets/ball3.png'},
  ]
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable-1',
  });
  const {setNodeRef: setNodeRef2 } = useDraggable({
    id: 'draggable-2',
  });
  const {setNodeRef: setNodeRef3 } = useDraggable({
    id: 'draggable-3',
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
      <div className='mainBalls flex flex-col px-2 pt-2 pb-8 items-center gap-[160px] rounded-lg bg-[#5484FF] w-[138px]'>
        <div className='balls flex flex-col gap-1 w-full'>
            <div className=' bg-[#466fd8] rounded-md flex items-center flex-col'>
                <div className='images  px-[10px] pt-[10px] pb-[8px] flex flex-col items-center relative'>
                  <div draggable='true' id={balls[0].id} ref={setNodeRef} style={style} {...listeners} {...attributes}>
                    <MyImage key={balls[0].id} src={balls[0].src} alt={balls[0].name} width={94} height={94} className='z-10 transition-all duration-75 ease-linear cursor-pointer hover:scale-110' />
                  </div>
                  <Image src='/assets/base.png' alt="image1" width={98} height={52} className='absolute top-[58px]' />
                </div>
                <p className='mt-7 text-white font-extrabold'>{balls[0].id} كيلو جرام</p>
            </div>
            <div className=' bg-[#466fd8] rounded-md flex items-center flex-col'>
                <div className='images  px-[10px] pt-[10px] pb-[8px] flex flex-col items-center relative'>
                  <div draggable='true' id={balls[1].id} ref={setNodeRef2} style={style} {...listeners} {...attributes}>
                    <MyImage key={balls[1].id} src={balls[1].src} alt={balls[1].name} width={94} height={94} className='z-10 transition-all duration-75 ease-linear cursor-pointer hover:scale-110' />
                  </div>
                  <Image src='/assets/base.png' alt="image1" width={98} height={52} className='absolute top-[58px]' />
                </div>
                <p className='mt-7 text-white font-extrabold'>{balls[1].id} كيلو جرام</p>
            </div>
            <div className=' bg-[#466fd8] rounded-md flex items-center flex-col'>
                <div className='images  px-[10px] pt-[10px] pb-[8px] flex flex-col items-center relative'>
                  <div draggable='true' id={balls[2].id} ref={setNodeRef3} style={style} {...listeners} {...attributes}>
                    <MyImage key={balls[2].id} src={balls[2].src} alt={balls[2].name} width={94} height={94} className='z-10 transition-all duration-75 ease-linear cursor-pointer hover:scale-110' />
                  </div>
                  <Image src='/assets/base.png' alt="image1" width={98} height={52} className='absolute top-[58px]' />
                </div>
                <p className='mt-7 text-white font-extrabold'>{balls[2].id} كيلو جرام</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-6'>
            <hr className='bg-[##ffffff54] w-[110px] h-[1px]'/>
            <button className='bg-[#FBAC14]  w-[110px] h-[50px] rounded-lg text-[18px] text-white font-black'>تشغيل</button>
            <div className='p-2 mt-2 w-[50px] h-[50px] rounded-full bg-[#FBAC14] cursor-pointer'>
                <Image src='/assets/refresh.png' alt="image1" width={32} height={32} />
            </div>
        </div>
      </div>
  );
}