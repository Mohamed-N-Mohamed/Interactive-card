import React from 'react'

const Form = () => {
  return (
    <div className='py-12 px-10 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2'>
      <div className="form-group flex flex-col justify-center items-center gap-4">
      <div className="form-inputs">
      <label className='text-[14px] tracking-[.10em] uppercase'>CardHolder Name</label>
        <input type="text" className='py-2 px-4 border rounded-md w-full outline-none' placeholder='e.g Jane Appleseed'/>
      </div>

      <div className="form-inputs">
      <label className='text-[14px] tracking-[.10em] uppercase'>Card Number</label>
        <input type="text" className='py-2 px-4 border border-r w-full outline-none tracking-[.10em]' placeholder='e.g 1234 5678 9123 0000'/>
      </div>

      <div className="form-inputs uppercase text-[14px] text-'c-white">
        <div className="input-label flex px-2 gap-10">
          <p className=''>Exp</p>
          <p>(MM/YY)</p>
          <p>cvc</p>

        </div>
        <div className="input-container flex flex-row gap-4 justify-center items-center">
        <input type="text" placeholder='MM' className='py-2 px-2 w-1/4 border rounded-md pr-4'/>
          <input type="text" placeholder='YY' className='py-2 px-2 w-1/4 border rounded-md  '/>
          <input type="text" placeholder='YY' className='py-2 px-4 w-1/2 border rounded-md'/>
        </div>   

      </div>

      <button className='bg-Very-dark-violet text-white w-full py-4 border-none rounded hover:pointer md:w-9/12'>Confirm</button>


      </div>

      
      
    </div>
  )
}

export default Form