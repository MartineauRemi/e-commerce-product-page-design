import React from 'react'
import styled, { css } from 'styled-components'
import { OrangeButton } from '../components/Buttons'
import ShoppingCartItem from '../components/ShoppingCartItem'

const Modal = styled.section`
    display: ${props => props.active ? 'block' : 'none'};
    background-color: var(--white);
    position: absolute;
    top : 6.25rem;
    right: 0;
    z-index: 10;
    width: 100%;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.2), 5px 5px 20px rgba(0,0,0,0.2);
    border-radius: 0.5rem;

    @media screen and (min-width: 550px){
        width: 22.5rem;
    }
`

const Heading = styled.header`
    border-bottom: 2px solid var(--light-gray);
    padding: 1.5rem;
`

const Title = styled.h2`
    font-size: 1rem;
    line-height: 1rem;
`

const Container = styled.div`
    min-height: 11.75rem;
    width: 100%;
    padding: 1.5rem;

    ${props => props.empty && css`
        display: flex;
        align-items: center;
        justify-content: center;;
    `};
`

const Content = styled.div`
`

const List = styled.ul`
    margin-bottom: 1.5rem;
`

const StyledOrangeButton = styled(OrangeButton)`
    width: 100%;
`

export default function ShoppingCart({shoppingCartActive, shoppingCartItems, setShoppingCartItems}) {
    function renderShoppingCartItems() {
        return shoppingCartItems.map(item => (
            <ShoppingCartItem
                key={item.product.id}
                data={item}
                shoppingCartItems={shoppingCartItems}
                setShoppingCartItems={setShoppingCartItems}
            />
        ))
    }

    return (
        <Modal active={shoppingCartActive}>
            <Heading>
                <Title>Cart</Title>
            </Heading>
            <Container
                empty={shoppingCartItems.length === 0}
            >
                {shoppingCartItems.length === 0
                    ? <Content>Your cart is empty.</Content>
                    : (
                        <Content>
                            <List>
                                {renderShoppingCartItems()}
                            </List>
                            <StyledOrangeButton>
                                Checkout
                            </StyledOrangeButton>
                        </Content>
                    )
                }
            </Container>
        </Modal>
    )
}
