import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Whyus = () => {
  return (
    <div className=''>
        <div className='grid lg:grid-cols-2 grid-cols-1 pt-5 pl-16 pr-16'>
            <div className=''><Image src="/howitworks.jpg" width={200} height={200} alt='why us'></Image></div>
            <div>
                <div className='text-red-600  font-semibold text-xl text-center'>- WHY GOGRADES.ORG</div>
                <div className='text-blue-700 font-bold text-2xl text-center'>Best Quality Assignment Help For University & College Students</div>
                <div className='pt-5 text-gray-700 font-medium'>Searching for the No.1 Online Assignment Help in Pakistan? End your search with Gogrades.org.</div>

                <div className='mt-2 font-medium text-2xl'>FREE Features</div>

                <div className='flex items-center  mt-3 gap-5'>
                    <div className=' flex text-lg font-medium text-gray-700'><Check className='stroke-green-500'/>Bibliography </div>
                    <div className=' flex text-lg font-medium text-gray-700'><Check className='stroke-green-500'/>
                    Title Page</div>
                    <div className=' flex text-lg font-medium text-gray-700'><Check className='stroke-green-500'/>Outline </div>
                </div>
                <div className='flex items-center   gap-5'>
                    <div className=' flex text-lg font-medium text-gray-700'><Check className='stroke-green-500'/>Formatting </div>
                    <div className=' flex text-lg font-medium text-gray-700'><Check className='stroke-green-500'/>
                    Plagiarism Report</div>
                    <div className=' flex text-lg font-medium text-gray-700'><Check className='stroke-green-500'/>Limitless Amendments </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whyus