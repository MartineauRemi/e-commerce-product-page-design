import React from 'react'
import styled from 'styled-components'
import CartButton from '../components/CartButton'
import Logo from '../components/Logo'
import MenuButton from '../components/MenuButton'
import ProfileButton from '../components/ProfileButton'
import Menu from './Menu'
import ShoppingCart from './ShoppingCart'


const Wrapper = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1.5rem;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: var(--layout-max-width);
    position: relative;

    .profile-button, .cart-button, .menu-button, .logo, .menu{
        align-self: center;
    }
`

const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 1.25rem;

    @media screen and (min-width: 1024px){
        column-gap: 3rem;
    }
`

export default function Header({menuActive, setMenuActive, shoppingCartActive, setShoppingCartActive, shoppingCartItems, setShoppingCartItems}) {
    return (
        <Wrapper>
            <Content>
                <Section>
                    <MenuButton
                        menuActive={menuActive}
                        setMenuActive={setMenuActive}
                    />
                    <Logo />
                    <Menu
                        menuActive={menuActive}
                    />
                </Section>
                <Section>
                    <CartButton
                        shoppingCartActive={shoppingCartActive}
                        setShoppingCartActive={setShoppingCartActive}
                    />
                    <ProfileButton />
                </Section>

                <ShoppingCart
                    shoppingCartActive={shoppingCartActive}
                    shoppingCartItems={shoppingCartItems}
                    setShoppingCartItems={setShoppingCartItems}
                />
            </Content>
        </Wrapper>
    )
}
