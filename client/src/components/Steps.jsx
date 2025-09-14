import React from 'react'
import { stepsData } from '../assets/assets'

function Steps() {
  return (
    <div className='flex flex-col items-center justify-center my-32'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it works</h1>
      <p className='text-lg text-gray-600 mb-8'>Transform Words Into Stunning Images</p>

      <div className='space-y-4 w-full max-w-2xl text-sm'>
        {stepsData.map((items,index)=>(
          <div key={index} className='flex items-center gap-4 p-5 px-10 bg-white/20 shadow-md hover:scale-[1.02] rounded-lg transition-all duration-300 '>
            <img src={items.icon} alt="" />
            <div className=''>
              <h2 className='text-2xl font-medium'>{items.title}</h2>
              <p className='text-gray-700'>{items.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Steps