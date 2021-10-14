import styled from "styled-components"

const Button = styled.button`
    border: none;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1rem;
    border-radius: 0.5rem;
`

export const OrangeButton = styled(Button)`
    color: var(--white);
    background-color: var(--orange);
    padding: 1.25rem 4rem;
`