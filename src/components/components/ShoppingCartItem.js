import React from 'react'
import styled from 'styled-components'
import deleteIcon from '../../assets/icon-delete.svg'
import { Button } from '../components/Buttons'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Image = styled.img`
    border-radius: 0.5rem;
`

const DeleteButton = styled(Button)``

export default function ShoppingCartItem({data, shoppingCartItems, setShoppingCartItems}) {
    function onClickDeleteItemButton(){
        setShoppingCartItems(shoppingCartItems.filter(item => item !== data))
    }
    return (
        <Wrapper>
            <Image
                src={data.product.images[0].thumbnail}
                alt={data.name}
                width='50px'
                height='50px'    
            />
            <section>
                <p>{data.product.name}</p>
                <p>
                    {`$${data.product.price} x ${data.quantity} `}
                    <strong>
                        {`$${data.quantity * data.product.price}`}
                    </strong>
                </p>
            </section>
            <DeleteButton
                onClick={onClickDeleteItemButton}
            >
                <img
                    src={deleteIcon}
                    role='button'
                    alt='remove the item from cart' 
                    width='16px'
                    height='16px'
                /> 
            </DeleteButton>
        </Wrapper>
    )
}
