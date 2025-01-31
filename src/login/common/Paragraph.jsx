import React from 'react'

const Paragraph = ({ text, className }) => {
    return (
        <p className={`${className} leading-133 text-lg text-white font-normal max-w-[382px] mt-[10px] mx-auto text-center`}>{text}</p>
    )
}

export default Paragraph