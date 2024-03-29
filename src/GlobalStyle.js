import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');
    *, *::before, *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    html{
        font-family: 'Kumbh Sans', sans-serif;
        font-size: 15px;
        line-height: 26px;

        --layout-max-width: 1110px;
        --fw-reg: 400;
        --fw-bold: 700;

        --dark: #1D2026;
        --gray: #69707D;
        --light-gray: #F6F8FD;
        --white: #FFFFFF;
        --orange: #FF7E1B;
        --light-orange: #FFEEE2;

        color: var(--dark);
    }

    p{
        color: var(--gray);
    }
`

export default GlobalStyle;