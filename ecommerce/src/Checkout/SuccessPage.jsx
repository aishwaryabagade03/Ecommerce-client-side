import React from 'react'
import tick from "../assets/tick.png"
import { Link } from 'react-router-dom'

export const SuccessPage = () => {
  return (
    
<div class="container flex justify-center mt-8">
<div class="max-w-full bg-white border border-gray-900 ">
    <a href="#" class="items-center">
      <img src={tick} alt="" style={{height:250}} class="px-20"/>
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 font-serif ">Thankyou for your order </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Hey Dear!</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">We have received your order. </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">We will drop you another email when your order ships.</p>


       <Link to={'/shopall'}>
       <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none bg-gray-800 hover:bg-gray-600 dark:focus:ring-gray-800">
            Continue Shopping
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
       </Link>
    </div>
</div>
</div>

  )
}
