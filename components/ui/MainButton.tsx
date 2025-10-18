

import React from 'react'

interface ButtonProps {
    text?: string
    className?: string
}

export default function MainButton(props: ButtonProps) {
    return (
        <div>
            <button className={`  rounded-3xl   cursor-pointer  transition-colors duration-600 ${props.className}`}>{props.text}</button>

        </div>
    )
}
