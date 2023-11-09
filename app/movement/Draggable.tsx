import React, { FC } from "react";
import { useDraggable } from "@dnd-kit/core";

type DraggableProps = {
  id: string;
  children: React.ReactNode;
  state: {
    carRun: boolean;
    isDropped: boolean;
    isDragMove: boolean;
    duration: number;
  };
};
const Draggable: FC<DraggableProps> = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  return (
    <button
      ref={setNodeRef}
      style={{
        // first case (car not run with drag/drop)
        ...(props.state.isDragMove &&
          transform && {
            transform: `translate(${transform.x}px, ${transform.y}px)`,
            transition: "none",
            left: "1.5rem",
            right: "unset",
          }),
        ...(props.state.isDropped &&
          !props.state.carRun && {
            transform: "translate(0,0)",
            transition: `transform 500ms ease-in-out`,
            left: "1.5rem",
            right: "unset",
          }),

        // Second case  (car run with drag/drop)
        ...(props.state.isDragMove &&
          transform &&
          props.state.carRun && {
            transform: `translate(${transform.x}px, ${transform.y}px)`,
            transition: "none",
            right: "1.5rem",
            left: "unset",
          }),
        ...(props.state.isDropped &&
          props.state.carRun && {
            transform: "translate(-349%, 0)",
            transition: `transform 500ms ease-in-out`,
            right: "1.5rem",
            left: "unset",
          }),

        // Last case (car run without drag/drop)
        ...(props.state.carRun &&
          !props.state.isDragMove &&
          !props.state.isDropped && {
            transform: "translate(345% ,0)",
            transition: `transform ${props.state.duration}s ease-in`,
          }),
      }}
      {...listeners}
      {...attributes}
      className={`absolute left-6 bottom-10  w-fit`}
    >
      {props.children}
    </button>
  );
};

export default Draggable;
