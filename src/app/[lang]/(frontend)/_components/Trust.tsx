import Image from 'next/image'
import React from 'react'

const Trust = () => {
  return (
    <div className='p-7'>
         <div className='grid lg:grid-cols-2 grid-cols-1 '>
            <div>
            <div className='text-red-500 text-3xl font-bold text-center'>Trusted By 85,000 Students</div>
            <div className='text-slate-800 text-xl font-semibold text-center'>connecting with over 4500 Trusted Experts.</div>
            </div>
            <div>
                <Image src="/GGImages/University-Images/GB-Uni.jpg" width={200} height={200} alt='trust'></Image>
            </div>
          
         </div>
    </div>
  )
}

export default Trust