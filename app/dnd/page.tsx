'use client'

import { useState } from "react"
import { data } from './data'
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Dnd(){
  const [users, setUsers] = useState(data);
  const [inputValue, setInputValue] = useState('');
  const addUser = () => {
    let newUser = {
      id: users.length + 1,
      name: inputValue
    }
    setInputValue('');
    setUsers([...users, newUser])

  }
  const onDragEnd =(event:any)=> {
    console.log('onDragEnd', event)
    const {active, over} = event
    if(active.id === over.id) return
    setUsers((users) => {
      const oldIndex = users.findIndex((user) => user.id === active.id)
      const newIndex = users.findIndex((user) => user.id === over.id)
      const newUsers = [...users]
      // newUsers.splice(oldIndex, 1)
      // newUsers.splice(newIndex, 0, users[oldIndex])
      // return newUsers
      return arrayMove(users, oldIndex, newIndex)
    })
  }
  const SortableUser = ({user}:{user: {id: number, name: string}})=> {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: user.id})
    const style = {
      transition,
      transform: CSS.Transform.toString(transform)
    }
    return(
      <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="p-[10px] border text-[18px] w-[400px]">
        {user.name}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <div>Total :{users.length}</div>
      <div className="mb-[20px]">
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={addUser}>Add User</button>
      </div>
      <div>
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd} >
        <SortableContext items={users} strategy={verticalListSortingStrategy}>

        {users.map((user) => (
          <SortableUser key={user.id} user={user} />
        ))}
        </SortableContext>
      </DndContext>
      </div>
    </div>
  )
}