import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 0.5rem;
    position: relative;
    cursor: pointer;
    
    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        background: transparent;
    }

    &:hover::after{
        background: rgba(255,255,255,0.5);
    }

    ${props => props.selected && css`
        &::after{
            background: rgba(255,255,255, 0.5);
            border: 2px solid var(--orange);
        }
    `};
`
const Img = styled.img`
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 0.5rem;
`

export default function Thumbnail({id, thumbnail, mainImgIndex, setMainImgIndex}) {
    function onClickThumbnail(){
        if(mainImgIndex !== id)
            setMainImgIndex(id)
    }

    return (
        <Wrapper
            onClick={onClickThumbnail}
            selected={id === mainImgIndex}
        >
            <Img 
                src={thumbnail}
                alt=''
            />
        </Wrapper>
    )
}
