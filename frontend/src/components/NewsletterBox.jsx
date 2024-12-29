import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler=(event)=>{
event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-[#740938]'>Subscribe now and get 20% off.</p>
      <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, magnam?
      </p>
      <form onSubmit={onSubmitHandler} action="" className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 bg-white '>
        <input type="email"  placeholder='enter your email' className='w-full sm:flex-1 outline-none ' required/>
        <button type='submit' className='bg-[#AF1740] text-white text-xs px-10 py-4'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox