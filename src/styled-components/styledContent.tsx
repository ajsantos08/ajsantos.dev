import styled from "styled-components";

export const StyledContent = styled.div <{ flip: boolean;}>`
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: ${props => props.flip ? props.theme.black : props.theme.white};
    background-color: ${props => props.flip ?  props.theme.white:  props.theme.black};
    box-shadow:   0 -5px 5px -5px rgba(0,0,0,0.2);

    .text {
        overflow: hidden;
        padding-bottom: 100px;
    }

    h2 {
        font-family: 'Gilroy', sans-serif;
        font-weight: 800;
        font-size: 150px;

        @media screen and (min-width: 780px){
            overflow: hidden;
            font-size: 250px;
        }

        @media screen and (min-width: 1200px){
            overflow: hidden;
            font-size: 350px;
        }

    }

    p {
        padding: 0 30px;

        @media screen and (min-width: 780px) {
            padding: 0;
            max-width: 70%;
            margin: auto;
        }
    }
`