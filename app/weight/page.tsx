'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { DndContext, DragOverlay, useDraggable, useDroppable } from '@dnd-kit/core';
import Droppables from './Droppable';
import Draggable from './Draggable';


export default function Test() {



    const [plants, setPlants] = useState([
        { name: 'mars', id: '4', src: '/assets/mars.svg', timer: 2, title: "المريخ", content: "ثابت الجاذبيه = 3.73 متر/ثانيه2" },
        { name: 'moon', id: '5', src: '/assets/moon.svg', timer: 3, title: "القمر", content: "ثابت الجاذبيه = 1.62 متر/ثانيه2  " },
        { name: 'earth', id: '6', src: '/assets/earth.svg', timer:1, title: "الارض", content: "ثابت الجاذبيه = 9.81 متر/ثانيه2" },
    ]);
    const [balls, setBalls] = useState([
        { name: 'ball1', id: '1', src: '/assets/ball1.png', container: null, x:0, y: 0, activity: null, weight: 3 },
        { name: 'ball2', id: '2', src: '/assets/ball2.png', container: null, x:0, y: 0, activity: null, weight: 2 },
        { name: 'ball3', id: '3', src: '/assets/ball3.png', container: null, x:0, y: 0, activity: null, weight: 1 },
    ])

    const [contentIndex, setContentIndex] = useState(0);
    const [test, setTest] = useState(0);
    const [isDropped, setIsDropped] = useState(false);
    const [activeBallId, setActiveBallId] = useState(null);
    const [overBallId, setOverBallId] = useState(null);
    const [translateX, setTranslateX] = useState('0px');
    const [translateY, setTranslateY] = useState('0px');
    const [top, setTop] = useState('10%');

    const contentList = [
        'في هذه التجربه سوف نتعرف علي المقصود بالوزن (الثقل).',
        'اسحب احدي الكرات من اليمين واجعلها تسقط سقوطا حرا علي كل من الكواكب المبينه بالشكل, \n مع ملاحظة قيمة تسارع الجاذبيه علي الكواكب المختلفه.',
        'قم بإيقاف التجربه مستخدما زر الايقاف والتشغيل, ولاحظ وزن كل كره علي الكواكب المختلفه \n خلال قيمة الوزن المصاحب للكره.',
        'يمكنك حساب وزن كل كره علي اي من الكواكب باستخدام القانون / ق(نيوتن) = ك (كيلو جرام) X ج(م/ث2)',
        'علي اي كوكب من الكواكب الموجوده يكون وزن الجسم اكبر ؟ \n أ- علي الارض            ب- علي القمر            ج- علي المريخ',
    ]



    const style: any = {
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
        console.log(balls)
        setBalls((balls) => balls.map((ball:any) => {
            if (ball.name === ball.activity) {
                return { ...ball, y: '80%' }
            }
            return ball
        }))
    }

    const [isLeavePlay, setIsLeavePlay] = useState(true)
    const [isLeaveRefresh, setIsLeaveRefresh] = useState(true)

    const reload = () => {
        window.location.reload();
    }
    return (
        <DndContext onDragEnd={onDragEnd} onDragStart={onDragStart} onDragCancel={onDragCancel} id='1'>
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
                                <div key={ball.id} className=' bg-[#466fd8] rounded-md flex items-center flex-col pb-1'>
                                    <div className='images  px-[10px] pt-[10px] pb-[8px] flex flex-col items-center relative'>
                                        {!ball.container ?
                                            <Draggable name={ball.name} >
                                                <Image src={ball.src} alt={ball.name} width={94} height={94} />
                                            </Draggable> : <div className='w-[94px] h-[94px]' ></div>
                                        }
                                        <Image src='/assets/base.png' alt="image1" width={98} height={52} className='absolute top-[58px]' />
                                    </div>
                                    <p className='mt-7 text-white font-extrabold'>{ball.id} كيلو جرام</p>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col items-center gap-6'>
                            <hr className='bg-[##ffffff54] w-[110px] h-[1px]' />
                            {/* <button  onClick={dropBall} className='bg-[#FBAC14] hover:border-2  w-[100px] h-[40px] rounded-lg text-[18px] text-white font-black'>تشغيل</button> */}
                            <div onMouseLeave={() => setIsLeavePlay(true)} onMouseOver={() => setIsLeavePlay(false)} className='transition-all ' >
                                {
                                   isLeavePlay ?  <Image onClick={dropBall}  src='/assets/playDefault.png' alt='play' width={110} height={50} className='cursor-pointer' /> :
                                   <Image onClick={dropBall}  src='/assets/playHover.png' alt='play' width={110} height={50} className='cursor-pointer' />
                                }
                            </div>
                            <div onMouseLeave={() =>setIsLeaveRefresh(true)} onMouseOver={() =>setIsLeaveRefresh(false)} className='transition-all ' >
                                {
                                    isLeaveRefresh ? <Image onClick={reload} src='/assets/refreshDefault.png' alt="image1" width={50} height={50} /> :
                                    <Image onClick={reload} src='/assets/refreshHover.png' alt="image1" width={50} height={50}  className='cursor-pointer'/>
                                }
                                </div>
                        </div>
                    </div>
                    {/* Plants */}
                    <div className='border-[1px] border-[#CCD2D9] rounded-lg'>
                        <div className='images flex rounded-lg p-3'>

                            {plants.map((plant) => (
                                <Droppables  key={plant.id} name={plant.name} title={plant.title} content={plant.content} className='ball relative' >
                                    <Image src={plant.src} alt={plant.name} width={381} height={704} className={(plant.name == 'mars' ? `rounded-r-lg` : plant.name == 'earth' ? 'rounded-l-lg' : '')} />
                                    {balls.filter((ball) => ball.container === plant.name).map((ball) => {
                                        var myOverBallId;
                                        console.log('ssss')
                                        if (ball.name === ball.activity) {
                                            myOverBallId = ball.container
                                        }
                                        return (<Draggable key={ball.id} name={ball.name} transform={{x:ball.x, y:ball.y}} transition={myOverBallId ?`top ${plant.timer * ball.weight}s ease-in-out`: ''} className={`z-10 transition-all duration-75 ease-linear cursor-pointer hover:translate-110 hover:scale-110`} >
                                            <Image src={ball.src} alt={ball.name} width={94} height={94} />

                                        </Draggable>)
                                    })}
                                </Droppables>

                            ))}
                            <DragOverlay>
                                {activeBallId ? (
                                    balls.map((ball) => (
                                        activeBallId === ball.name ? (
                                            <div key={ball.id} >
                                                <Image  src={ball.src} alt={ball.name} width={94} height={94} className='z-10 transition-all duration-75 ease-linear cursor-pointer hover:translate-110' />
                                            </div>
                                        ) : null
                                    ))
                                ) : null}
                            </DragOverlay>
                        </div>
                        <div className="content h-[14%] flex justify-between items-center px-10 py-8 gap-10 border-t-[1px] border-[#CCD2D9]">
                            {contentIndex !== (contentList.length - 1) ? <Image src='/assets/right.png' alt="image1" width={40} height={40} className='cursor-pointer' onClick={handleNextClick} /> :
                                <Image src='/assets/lastRight.png' alt="image1" width={40} height={40} className='cursor-pointer' />
                            }
                            <p className='text-[22px] font-bold text-[#252C3C] whitespace-pre' >{contentList[contentIndex]}</p>
                                {contentIndex !== 0 ? <Image src='/assets/left.png' alt="image1" width={40} height={40} className='cursor-pointer' onClick={handlePrevClick} /> :
                                    <Image src='/assets/lastLeft.png' alt="image1" width={40} height={40} className='cursor-pointer' />
                                }
                        </div>
                    </div>
                </div>
            </div >

        </DndContext>
    )
    function onDragStart(event: any) {
        const { active } = event;
        const activeBallId = active.id;
        setActiveBallId(activeBallId)
    }

    function onDragEnd(event: any ) {
        console.log(event)
        const { active, over, delta, activatorEvent   } = event;
        const {clientX, clientY , target: {x, y}} = activatorEvent

        setTop('10%')

        if (!over) return;
        const activeBallId = active.id;
        const overBallId = over.id;



        if (activeBallId === overBallId) return;
        setOverBallId(overBallId)
        // setActiveBallId(null)
        setActiveBallId(activeBallId)

        setTest(5)
        setBalls((balls) => balls.map((ball:any) => {
            if (ball.name === activeBallId) {

                return { ...ball, container: overBallId, x: x  , y: top, activity: ball.name }
            }
            return ball
        }))
    }

    function onDragCancel (event: any) {
        setActiveBallId(null)
    }
}