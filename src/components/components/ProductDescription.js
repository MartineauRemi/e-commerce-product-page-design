import React from 'react'
import styled from 'styled-components'
import ProductPrice from './ProductPrice'
import QuantityPicker from './QuantityPicker'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (max-width: 767px){
        padding: 0 1.5rem;
    }
    @media screen and (min-width: 1024px){
        width: 27.875rem;
    }
`

const Brand = styled.span`
    color: var(--orange);
    font-weight: var(--fw-bold);
    font-size: 0.75rem;
    line-height: 0.75rem;
    letter-spacing: 1.85px;
    text-transform: uppercase;
    margin-bottom: 1.25rem;
`

const Name = styled.h2`
    margin-bottom: 1rem;

    @media screen and (min-width: 1024px){
        margin-bottom: 2rem;
    }
`

const Description = styled.p`
    margin-bottom: 1.5rem;
`

const PriceSection = styled(ProductPrice)`
    margin-bottom: 2rem;
`


export default function ProductDescription({data}) {
    

    return (
        <Wrapper>
            <Brand>{data.brand}</Brand>
            <Name>{data.name}</Name>
            <Description>{data.description}</Description>
            <PriceSection
                price={data.price}
                discount={data.discount}
            />
            <QuantityPicker
                name={data.name}
                price={data.price}
            />
        </Wrapper>
    )
}
