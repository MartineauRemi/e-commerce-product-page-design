import React from 'react'
import styled from 'styled-components'
import { getPriceAfterDiscount } from '../../helpers/PriceHelper'

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 450px){
        flex-direction: column;
        align-items: flex-start;
    }
`

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 1rem;
`

const PriceAfterReduction = styled.strong`
    font-size: 1.75rem;
    line-height: 1.75rem;
    place-self: center;
`

const Reduction = styled.div`
    color: var(--orange);
    background-color: var(--light-orange);
    border-radius: 0.5rem;
    padding: 0.5rem;
    place-self: center;
`

const Price = styled.div`
    text-decoration: line-through;
    color: var(--gray);
`

export default function ProductPrice({price, discount}) {
    const priceAfterDiscount= getPriceAfterDiscount(price, discount)
    
    return (
        <Wrapper>
            <Container>
                <PriceAfterReduction>{`$${priceAfterDiscount}`}</PriceAfterReduction>
                <Reduction>{`${discount}%`}</Reduction>
            </Container>
            <Price>{`$${price}`}</Price>
        </Wrapper>            
    )
}
