import React from 'react'
import logo from '../../assets/logo.svg'

export default function Logo() {
    return (
        <img
            className='logo'
            src={logo}
            alt=''
            aria-hidden='true'
            width='138px'
            height= '20px'
        />
    )
}
