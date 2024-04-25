import React from 'react'

function Quotatios() {
  return (
    <div className='w-full'>
        <div className='flex flex-col h-screen bg-slate-100 '>
            <div className='px-4'>
                <p className='text-right text-4xl'>الاسئلة</p>
            </div>

            <div className='px-4 flex flex-col w-full text-right mt-10'>
                <p className='text-right text-2xl'>السؤال</p>
                <input className='text-right p-2 m-2 rounded-md' placeholder='الاجابة' />
            </div>

        </div>
    </div>
  )
}

export default Quotatios