import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-2 max-md:flex-col'>
      <p className='text-center'>Copyright &copy; 2024 Idrissa | All Rights Reserved</p>
      <div className='flex gap-x-9'>
        <Link href='#' className='text-body'>Terms & Conditions</Link>
        <Link href='#' className='text-body'>Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer