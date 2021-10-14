import React, { useState } from 'react'
import styled from 'styled-components'
import { OrangeButton } from './Buttons'
import cartIcon from '../../assets/icon-cart.svg'

const Form = styled.form`
    @media screen and (min-width: 550px){
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`

const Fieldset = styled.fieldset`
    width: 100%;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--light-gray);
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    
    @media screen and (min-width: 550px){
        width: 9.75rem;
        margin-bottom: 0;
        margin-right: 1rem;
    }
`

const Button = styled.button`
    background-color: transparent;
    color: var(--orange);
    padding: 1.25rem 1.5rem;
    border: none;
    cursor: pointer;
    font-weight: var(--fw-bold);
    font-size: 1.25rem;
    line-height: 1rem;
`

const Input = styled.input`
    background-color: transparent;
    outline: none;
    border: none;
    text-align: center;
    padding-left: 1rem;
    font-weight: var(--fw-bold);
    font-size: 1.125rem;
    line-height: 2rem;

    @media screen and (min-width: 550px){
        width: 3.5rem;
    }
`

const StyledOrangeButton = styled(OrangeButton)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: var(--fw-bold);

    @media screen and (max-width: 549px){
        width: 100%;
    }

    img{
        margin-right: 1rem;
    }
`

export default function QuantityPicker({name, price}) {
    const [qty, setQty] = useState(0)
    function onClickSubtractButton(e){
        e.preventDefault()
        setQty((prevQty) => prevQty === 0 ? 0 : prevQty - 1)
    }
    function onClickAddButton(e){
        e.preventDefault()
        setQty((prevQty) => prevQty === 100 ? 100 : prevQty + 1)
    }

    function onSubmit(e){
        e.preventDefault()
        console.log({
            name: name,
            price: price,
            qty: qty
        })
    }

    return (
        <Form onSubmit={onSubmit}>
            <Fieldset>
                <Button onClick={onClickSubtractButton}>-</Button>
                <Input
                    type='number'
                    value={qty}
                    disabled
                />
                <Button onClick={onClickAddButton}>+</Button>
            </Fieldset>
            <StyledOrangeButton type='submit'>
                <img
                    src={cartIcon}
                    width='16px'
                    height='16px'
                    alt=''
                    aria-hidden='true'
                />
                <span>Add to cart</span>
            </StyledOrangeButton>
        </Form>
    )
}
