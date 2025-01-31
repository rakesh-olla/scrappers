import React from 'react'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Linkedin from '../assets/images/png/linkdin.png'
import Github from '../assets/images/png/github.png'
import { Link } from 'react-router-dom'

const LoginSocialOnly = () => {
    return (
        <div className='mt-16 container xl:px-0 px-4'>
            <Heading text="Create an account" />
            <Paragraph text="We use LinkedIn or GitHub Login to verify you as a professional Developer / Agency" />
            <form className='px-6 sm:px-8 md:px-10 lg:px-[52px] py-6 lg:py-7 rounded-[3px] bg-dark-500 border border-dark-800 w-full max-w-[500px] mx-auto mt-5'>
                <Paragraph className="mb-3 md:mb-4" text="Please fill use your LinkedIn or Github Account to register and verify!" />
                <Link className='w-full mx-auto max-w-[271px] py-[6px] bg-white rounded-[3px] flex justify-center px-3'>
                    <img width={91} height={19} src={Linkedin} alt="Linkedin" />
                </Link>
                <Link className='w-full mx-auto max-w-[271px] mt-5 bg-white rounded-[3px] flex justify-center px-3'>
                    <img width={95} height={35} src={Github} alt="Linkedin" />
                </Link>
                <div className='flex items-center justify-center mt-[74px] leading-133 text-lg text-white font-normal'>Don't have an account?&nbsp; <Link to="/create-user" className='text-primary font-bold'>Sign Up</Link></div>
            </form>
        </div>
    )
}

export default LoginSocialOnly