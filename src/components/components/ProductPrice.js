import React from 'react'
import styled from 'styled-components'

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

export default function ProductPrice({price, reductionPercentage}) {
    function priceFormat(price){
        return `$${price}`
    }

    const priceAfterReduction = price * (reductionPercentage * 0.01)


    return (
        <Wrapper>
            <Container>
                <PriceAfterReduction>{priceFormat(priceAfterReduction)}</PriceAfterReduction>
                <Reduction>{`${reductionPercentage}%`}</Reduction>
            </Container>
            <Price>{priceFormat(price)}</Price>
        </Wrapper>            
    )
}
