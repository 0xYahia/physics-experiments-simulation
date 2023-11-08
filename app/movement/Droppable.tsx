import { useDroppable } from "@dnd-kit/core";
import { FC } from "react";
type DroppableProps = {
  id: string;
  children: React.ReactNode;
};

const Droppable: FC<DroppableProps> = (props) => {
  const { setNodeRef } = useDroppable({
    id: props.id,
  });

  return (
    <div ref={setNodeRef} className="w-full">
      {props.children}
    </div>
  );
};

export default Droppable;
