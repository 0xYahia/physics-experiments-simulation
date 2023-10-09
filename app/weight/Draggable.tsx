import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import Image from 'next/image';


export default function Draggable(props:any) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: props.name,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    zIndex: 40,
    opacity: isDragging ? 0 : 1,
    };

  return (
    <div ref={setNodeRef}  style={style} {...listeners} {...attributes} >
      {props.children}
    </div>
  );
}