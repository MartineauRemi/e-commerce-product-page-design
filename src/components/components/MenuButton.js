import React from 'react'
import styled from 'styled-components'
import closeIcon from '../../assets/icon-close.svg'
import menuIcon from '../../assets/icon-menu.svg'

const Button = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background-color: transparent;
    background-image: url(${props => props.active ? closeIcon : menuIcon});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 1.5rem;
    height: 1.5rem;
    z-index: 5;

    @media screen and (min-width: 1024px){
        display: none;
    }
`
export default function MenuButton({menuActive, setMenuActive}) {
    function onClickMenuButton(){
        setMenuActive(!menuActive)
    }
    return (
        <Button
            className='menu-button'
            active={menuActive}
            onClick={onClickMenuButton}    
        />
    )
}
