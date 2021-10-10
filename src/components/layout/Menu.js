import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    @media screen and (max-width: 1023px){
        padding: 1.5rem;
        padding-top: 7.5rem;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background-color: var(--white);
        z-index: 2;
        display: ${props => props.menuActive ? 'block' : 'none'};
    }

    @media screen and (min-width: 1024px){
        height: auto;
        display: flex;
    }
`

const List = styled.ul`
    display: grid;
    row-gap: 1.25rem;

    @media screen and (min-width: 1024px){
        grid-template-columns: repeat(5, auto);
        column-gap: 2rem;
    }

`

const ListItem = styled.li`
    list-style-type: none;
`

const Link = styled.a`
    text-decoration: none;
    font-size: 1.125rem;
    color: var(--dark);
    font-weight: var(--fw-bold);

    @media screen and (min-width: 1024px){
        font-size: 1rem;
        font-weight: var(--fw-reg);
        color: var(--gray);
    }
`

export default function Menu({menuActive}) {
    return (
        <Nav
            className='menu'
            menuActive={menuActive}
        >
            <List>
                <ListItem>
                    <Link href="#">
                        Collections
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="#">
                        Men
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="#">
                        Women
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="#">
                        About
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="#">
                        Contact
                    </Link>
                </ListItem>
            </List>
        </Nav>
    )
}
