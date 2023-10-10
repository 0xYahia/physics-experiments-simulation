import { useDraggable  } from '@dnd-kit/core';
import { CSS  } from '@dnd-kit/utilities';
import Image from 'next/image';


export default function Draggable(props:any) {
  let { attributes, listeners, setNodeRef, transform, isDragging   } = useDraggable({
    id: props.name,
  });

  transform = props.trasnform
  var className = props.className
  var transition = props.transition

  console.log({props})

  var style: any = {
    // transform:  `translateX(-500px)`,
     position: "relative",

    // right:props.trasnform?.Y ?? "0px",
     zIndex: 40,
     opacity: isDragging ? 0 : 1,
     transformOrigin: '0 0',

     };
  if(props.transform != null){
    className = props.className

    style.position = "absolute"
    style.left = (props.name == 'ball1') ? `5%` : (props.name == 'ball2') ? `38%` : `70%`
    style.transition = transition
    style.top = props.transform.y
  }

    console.log(style)

  return (
    <div ref={setNodeRef} className={className} style={style}  {...listeners} {...attributes} >
      {props.children}
    </div>
  );
}