'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableItem } from './SortableItems';

export default function App() {
  const [contentIndex, setContentIndex] = useState(0);
  const [items] = useState(['draggable-1']);
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
          <hr className='bg-[##ffffff54] w-[32px] h-[1px] rotate-90' />
          <div className='pr-4 pl-2'>
            <Link href={'/'} className='flex items-center  gap-2'>
              <span className='text-white font-bold text-[18px]'>رجوع</span>
              <Image src='/assets/backBtn.png' alt="image1" width={34} height={34} />
            </Link>
          </div>
        </div>
      </div>
      <DndContext>
        <SortableContext
          items={items}
          strategy={verticalListSortingStrategy}
        >
          {items.map(id => <SortableItem key={id} id={id} />)}
        </SortableContext>
      </DndContext>
    </div>
  )
  function handleDragEnd(event: any) {
    /* ... */
  }
}