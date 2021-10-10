import React from 'react'
import styled from 'styled-components'
import cart from '../../assets/icon-cart.svg'

const Button = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${cart});
    width: 1.5rem;
    height: 1.5rem;
`

export default function CartButton({cartActive, setCartActive}) {
    function onClickCartButton(){
        setCartActive(!cartActive)
    }

    return (
        <Button
            className='cart-button'
            onClick={onClickCartButton}
        />
    )
}
