import { useDroppable } from '@dnd-kit/core';
import Image from 'next/image';
import Balls from './images';
import MyImage from './images';
import { useState } from 'react';


export default function Droppable() {
  const plants = [
    { name: 'mars', id: '4', src: '/assets/mars.svg', alt: 'mars' },
    { name: 'moon', id: '5', src: '/assets/moon.svg', alt: 'moon' },
    { name: 'earth', id: '6', src: '/assets/earth.svg', alt: 'earth' },
  ]



  const { setNodeRef: setFirstDroppableRef } = useDroppable({
    id: 'droppable-1',
  });
  const { setNodeRef: setSecondDroppableRef } = useDroppable({
    id: 'droppable-2',
  });
  const { setNodeRef: setThirdDroppableRef } = useDroppable({
    id: 'droppable-3',
  });

  return (
    <>
      <div ref={setFirstDroppableRef} id='droppable-1'>
        <Image src='/assets/mars.svg' alt="mars" width={381} height={704} className='rounded-r-lg' />
      </div>
      <div ref={setSecondDroppableRef} id='droppable-2'>
        <Image src='/assets/moon.svg' alt="moon" width={381} height={704} />
      </div>
      <div ref={setThirdDroppableRef} id='droppable-3'>
        <Image src='/assets/earth.svg' alt="earth" width={381} height={704} className='rounded-l-lg' />
      </div>
    </>

  );
}