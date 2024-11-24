import { data } from '@/app/data'
import React from 'react'

const CssGrid = () => {
    const boxStyle = 'bg-neutral-100 border rounded-md p-4 flex justify-center items-center flex-col'
  return (
    <div className='grid sm:grid-cols-4 gap-3 p-4 auto-rows-[300px]'>
        {data.map((item,i)=>(
            <div className={`${boxStyle} ${(i===0 || i === 6 || i === 4 || i === 5 || i === 6) && 'sm:col-span-2'} ${(i===2)&& 'sm:row-span-2'}`} 
            key={i}>
                <h2>{item.title}</h2>
                <p className='font-bold'>{item.value}</p>
            </div>
        ))}
    </div>
  )
}

export default CssGrid