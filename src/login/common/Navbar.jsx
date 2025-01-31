import React from 'react'
import PageLogo from '../../assets/images/png/logo.png'
import Button from './Button'

const Navbar = () => {
    return (
        <nav className='lg:max-w-[1347px] container px-4 xl:px-0 flex justify-between items-center gap-6 py-6'>
            <img className='w-[150px] sm:w-[174px] md:w-[327px]' width={327} height={33} src={PageLogo} alt="page logo" />
            <div className='flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10'>
                <Button path="/login" greyBtn="Login" />
                <Button greenBtn="Apply Now" />
            </div>
        </nav>
    )
}

export default Navbar