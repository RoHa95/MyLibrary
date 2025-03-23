import React from 'react'
import book from '../assets/salar.jpg'
import EditProgress from './EditProgress'
import AddComment from './AddComment'
function DashboardDetails() {
  return (
    <div className='flex justify-between items-stretch'>
        <div className='w-1/2 flex items-center justify-center'><img src={book}/></div>
        <div className='text-right w-1/2 flex flex-col justify-center gap-y-1 lg:gap-y-2'>
            <span className='text-sm text-indigo-800 '>عنوان کتاب :</span>
            <span>سالار مگس ها </span>
            <span className='text-sm text-indigo-800'> نویسنده : </span>
            <span> ویلیتم گلدینگ</span>
            <span className='text-sm text-indigo-800'> ژانر : </span>
           <div className='flex gap-x-1 items-start flex-wrap'>
            <span className='bg-indigo-100 w-fit px-1 pb-1 rounded-lg text-xs'>رمان </span>
            <span className='bg-indigo-100 w-fit px-1 pb-1 rounded-lg text-xs'>داستان خارجی </span>
            <span className='bg-indigo-100 w-fit px-1 pb-1 rounded-lg text-xs'>برنده نوبل </span>
           </div>
           <div className='flex items-stretch justify-between gap-x-2 my-2'>
            <EditProgress/>
            <AddComment/>
           </div>
           
        </div>
    </div>
  )
}

export default DashboardDetails