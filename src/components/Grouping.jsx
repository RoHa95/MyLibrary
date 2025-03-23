import React from 'react'

function Grouping() {
  return (
   <select className='border rounded-lg border-sky-600 text-sky-600 text-[8px] font-bold w-fit h-8' name="group" id="group">
    <option value="readed"> خوانده شده</option>
    <option value="readed">  در حال مطالعه</option>
    <option value="readed"> در انتظار </option>
   </select>
  )
}

export default Grouping