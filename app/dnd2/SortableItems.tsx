import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Draggable from './Draggable';
import Droppable from './Droppable';
import Slider from './Slider';


export function SortableItem(props: any) {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className='content mt-20 flex justify-center gap-6'>
        <Draggable />
        <div className='border-[1px] border-[#CCD2D9] rounded-lg'>
          <div className='images flex rounded-lg p-3'>
            <Droppable />
          </div>
          <Slider />
        </div>
      </div>
    </div>
  );
}