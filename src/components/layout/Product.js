import React from 'react'
import styled from 'styled-components'
import ProductDescription from '../components/ProductDescription'
import ProductImages from '../components/ProductImages'

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px){
        padding: 0 2.5rem;
    }

    @media screen and (min-width: 1024px){
        flex-direction: row;
        justify-content: space-between;
        padding: 2.5rem;
    }
`

export default function Product({data, shoppingCartItems, setShoppingCartItems}) {
    return (
        <Wrapper>
            <ProductImages
                images={data.images}
            />
            <ProductDescription
                data={data}
                shoppingCartItems={shoppingCartItems}
                setShoppingCartItems={setShoppingCartItems}
            />
        </Wrapper>
    )
}
