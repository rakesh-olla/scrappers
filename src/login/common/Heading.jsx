import React from 'react'

const Heading = ({ text, className }) => {
    return (
        <h2 className={`${className} font-outfit leading-111 text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold`}>
            {text}
        </h2>
    )
}

export default Heading