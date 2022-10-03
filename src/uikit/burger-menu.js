import React from 'react'
import '../styles/header/burgerMenu.scss'

const BurgerMenu = () => {
  return (
    <div className='burgerMenu'>
      <svg width="32" height="10" viewBox="0 0 32 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32 0H0V2H32V0ZM32 8H8V10H32V8Z" fill="#1B1B1B" />
    </svg>
</div>
  )
}

export default BurgerMenu