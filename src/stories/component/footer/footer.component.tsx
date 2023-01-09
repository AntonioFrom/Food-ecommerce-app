import React from 'react'
import FooterLink from '../footer-link/footer-link.component'

const Footer = () => {
  return (
    <div className=' bg-gray-900 pt-12 px-12 pb-8'>
      <div>
        <div className='mb-4'>
          <span className=' uppercase font-bold text-sm text-zinc-500'>Контакти</span>
        </div>
        <div >
          <ul>
              <FooterLink href='tel:+380664764850'>+380664764850</FooterLink>
              <FooterLink href='mailto:info@gmail.com'>info@gmail.com</FooterLink>
          </ul>
        </div>
        <hr className='relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 my-8'/>
        <div>
          <span className=' text-xl font-semibold text-zinc-500'>🍔 Mr.Burger</span>
        </div>
      </div>

    </div>
  )
}

export default Footer