import React from 'react'
import styled from 'styled-components'
import profilePic from '../../assets/image-avatar.png'

const Button = styled.button`
    cursor: pointer;
    border: none;
    background-image: url(${profilePic});
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 1.5rem;
    height: 1.5rem;

    @media screen and (min-width: 768px){
        width: 3rem;
        height: 3rem;
    }
`

export default function ProfileButton() {
    function onClickProfilePic(){
        
    }
    return (
        <Button 
            className='profile-button'
            onClick={onClickProfilePic()}
        />
    )
}
