'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { DndContext, DragOverlay, useDraggable, useDroppable } from '@dnd-kit/core';
import Droppables from './Droppable';
import Draggable from './Draggable';

export default function Test() {

    const [plants, setPlants] = useState([
        { name: 'mars', id: '4', src: '/assets/mars.svg' },
        { name: 'moon', id: '5', src: '/assets/moon.svg' },
        { name: 'earth', id: '6', src: '/assets/earth.svg' },
    ]);
    const [balls, setBalls] = useState([
        { name: 'ball1', id: '1', src: '/assets/ball1.png' },
        { name: 'ball2', id: '2', src: '/assets/ball2.png' },
        { name: 'ball3', id: '3', src: '/assets/ball3.png' },
    ])

    const [contentIndex, setContentIndex] = useState(0);
    const [isDropped, setIsDropped] = useState(false);
    const [activeBallId, setActiveBallId] = useState(null);
    const [overBallId, setOverBallId] = useState(null);
    const [translateX, setTranslateX] = useState('0px');
    const [translateY, setTranslateY] = useState('0px');

    const contentList = [
        'في هذه التجربه سوف نتعرف علي المقصود بالوزن (الثقل).',
        'اسحب احدي الكرات من اليمين واجعلها تسقط سقوطا حرا علي كل من الكواكب المبينه بالشكل, \n مع ملاحظة قيمة تسارع الجاذبيه علي الكواكب المختلفه.',
        'قم بإيقاف التجربه مستخدما زر الايقاف والتشغيل, ولاحظ وزن كل كره علي الكواكب المختلفه \n خلال قيمة الوزن المصاحب للكره.',
        'يمكنك حساب وزن كل كره علي اي من الكواكب باستخدام القانون / ق(نيوتن) = ك (كيلو جرام) X ج(م/ث2)',
        'علي اي كوكب من الكواكب الموجوده يكون وزن الجسم اكبر ؟ \n أ- علي الارض            ب- علي القمر            ج- علي المريخ',
    ]

   const style:any={
        transform: `translate(${translateX}px, ${translateY}px)`,
    }

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
        if (!isDropped) return;
        console.log('dropBall')
        setTranslateY(`${translateY + 300}`)
        setTimeout(() => {
            console.log(translateX)
        }, 0);
        setIsDropped(false);
    }

    return (
        <DndContext onDragEnd={onDragEnd}>
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
                        <hr className='bg-[##ffffff54] w-[32px] h-[1px] rotate-90' />
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
                            {balls.map((ball) => (
                                <div key={ball.id} className=' bg-[#466fd8] rounded-md flex items-center flex-col'>
                                    <div className='images  px-[10px] pt-[10px] pb-[8px] flex flex-col items-center relative'>
                                        <Draggable name={ball.name} translateX={translateX} translateY={translateY} >
                                            <Image style={(activeBallId == ball.name)? style : null}  src={ball.src} alt={ball.name} width={94} height={94} className={`drop-animation-${overBallId} z-10 transition-all duration-75 ease-linear cursor-pointer hover:translate-110`}  />
                                        </Draggable>
                                        <Image src='/assets/base.png' alt="image1" width={98} height={52} className='absolute top-[58px]' />
                                    </div>
                                    <p className='mt-7 text-white font-extrabold'>{ball.id} كيلو جرام</p>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col items-center gap-6'>
                            <hr className='bg-[##ffffff54] w-[110px] h-[1px]' />
                            <button onClick={dropBall} className='bg-[#FBAC14]  w-[110px] h-[50px] rounded-lg text-[18px] text-white font-black'>تشغيل</button>
                            <div className='p-2 mt-2 w-[50px] h-[50px] rounded-full bg-[#FBAC14] cursor-pointer'>
                                <Image src='/assets/refresh.png' alt="image1" width={32} height={32} />
                            </div>
                        </div>
                    </div>
                    {/* Plants */}
                    <div className='border-[1px] border-[#CCD2D9] rounded-lg'>
                        <div className='images flex rounded-lg p-3'>

                            {plants.map((plant) => (
                                <Droppables key={plant.id} name={plant.name} className='ball' >
                                    <Image src={plant.src} alt={plant.name} width={381} height={704} className={`rounded-r-lg`} />
                                </Droppables>

                            ))}
                            <DragOverlay>
                                {activeBallId ? (
                                    balls.map((ball) => (
                                        activeBallId === ball.name ? (
                                            <Draggable key={ball.id} name={ball.name} translateX={translateX} translateY={translateY} >
                                                <Image style={style} src={ball.src} alt={ball.name} width={94} height={94} className='z-10 transition-all duration-75 ease-linear cursor-pointer hover:translate-110' />
                                            </Draggable>
                                        ) : null
                                    ))
                                ) : null}
                            </DragOverlay>
                        </div>
                        <div className="content flex justify-center items-center px-10 py-8 gap-10 border-t-[1px] border-[#CCD2D9]">
                            {contentIndex !== (contentList.length - 1) ? <Image src='/assets/right.png' alt="image1" width={40} height={40} className='cursor-pointer' onClick={handleNextClick} /> :
                                <Image src='/assets/lastRight.png' alt="image1" width={40} height={40} className='cursor-pointer' />
                            }
                            <p className='text-[22px] font-medium text-[#252C3C] whitespace-pre' >{contentList[contentIndex]}</p>
                            {contentIndex !== 0 ? <Image src='/assets/left.png' alt="image1" width={40} height={40} className='cursor-pointer' onClick={handlePrevClick} /> :
                                <Image src='/assets/lastLeft.png' alt="image1" width={40} height={40} className='cursor-pointer' />
                            }
                        </div>
                    </div>
                </div>
            </div >

        </DndContext>
    )
    function onDragEnd(event: any) {
        console.log(event)
        const { active, over, delta } = event;

        if (!over) return;
        setIsDropped(true);
        const activeBallId = active.id;
        const overBallId = over.id;
        console.log(activeBallId, overBallId, delta)

        if (activeBallId === overBallId) return;
        setActiveBallId(activeBallId)
        setOverBallId(overBallId)
        setTranslateX(delta.x)
        setTranslateY(delta.y)
    }
}