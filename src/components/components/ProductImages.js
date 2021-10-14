import React, { useState } from 'react'
import styled from 'styled-components'
import Thumbnail from './Thumbnail'

const Wrapper = styled.section`
`

const MainImg = styled.img`
    width: 100vw;
    margin-bottom: 1.5rem;
    
    @media screen and (min-width: 1024px){
        width: 28rem;
        height: 28rem;
        margin-bottom: 2rem;
        border-radius: 0.5rem;
    }
`

const ThumbnailsList = styled.ul`
    display: none;

    @media screen and (min-width: 1024px){
        display: grid;
        grid-template-columns: repeat(4, auto);
        column-gap: 2rem;
    }
`

const ListItem = styled.li`
    list-style-type: none;
`

export default function ProductImages({images}) {
    const [mainImgIndex, setMainImgIndex] = useState(0)
    return (
        <Wrapper>
            <MainImg
                src={images[mainImgIndex].image}
                alt=''
            />
            <ThumbnailsList>
                {images.map((image, index) => (
                    <ListItem
                        key={index}
                    >
                        <Thumbnail
                            id={index}
                            image={image.image}
                            thumbnail={image.thumbnail}
                            mainImgIndex={mainImgIndex}
                            setMainImgIndex={setMainImgIndex}
                        />
                    </ListItem>
                ))}
            </ThumbnailsList>
        </Wrapper>
    )
}
