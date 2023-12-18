import React from 'react'

const Contact = () => {
  
    return (
        <div className='flex items-center justify-center mt-7 flex-col'>
          <h1 className='text-5xl font-bold mb-4'>Contact us</h1>
          <form className='w-full lg:max-w-md max-w-[400px]'>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-gray-700 text-sm font-bold mb-2'>
                Your Name
              </label>
              <input
                type='text'
                id='name'
                className='w-full px-3 py-2 border border-slate-950 rounded-lg focus:outline-none focus:border-blue-500'
                placeholder='John Doe'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>
                Your Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full px-3 py-2 border border-slate-950 rounded-lg focus:outline-none focus:border-blue-500'
                placeholder='john@example.com'
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='message' className='block text-gray-700 text-sm font-bold mb-2'>
                Message
              </label>
              <textarea
                id='message'
                className='w-full px-3 py-2 border border-slate-950 rounded-lg focus:outline-none focus:border-blue-500'
                placeholder='Your message here...'
                rows='4'
              ></textarea>
            </div>
            <div className='mb-6'>
              <button
                type='submit'
                className='w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      );
    };


export default Contact