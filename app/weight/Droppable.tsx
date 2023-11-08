import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";

const { default: Image } = require("next/image");

export default function Droppables(props: any) {
  const { setNodeRef: setFirstDroppableRef } = useDroppable({
    id: props.name,
  });

  return (
    <section>
      <div ref={setFirstDroppableRef} className={props.className}>
        {props.children}
        <div className="gap-2 flex relative">
          <div className="bg-black text-white rounded-lg p-2  pt-3 right-2 bottom-2 absolute font-black">
            {props.title}
          </div>
          <div className="bg-black text- text-white w-[240px] rounded-lg p-2  pt-3 font-semibold right-[68px] bottom-2 absolute">
            {props.content}
          </div>
        </div>
      </div>
    </section>
  );
}
