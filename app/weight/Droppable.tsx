import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";

const { default: Image } = require("next/image");

export default function Droppables(props:any) {
  const { setNodeRef: setFirstDroppableRef } = useDroppable({
    id: props.name,
  });

  return (
    <section>
      <div ref={setFirstDroppableRef}>
        {props.children}
      </div>
    </section>
  );
}