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
        <Image src={props.src} alt={props.name} width={381} height={704} className={`rounded-r-lg`} />
      </div>
    </section>
  );
}