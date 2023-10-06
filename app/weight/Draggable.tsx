import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import Image from 'next/image';


export default function Draggable(props:any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.name,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Image key={props.id} src={props.src} alt={props.name} width={94} height={94} className='z-10 transition-all duration-75 ease-linear cursor-pointer hover:scale-110' />
    </div>
  );
}