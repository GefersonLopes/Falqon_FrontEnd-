import styled from "styled-components";

export const Section = styled.section`
    background-color: #ffffff;
    
    width: 100vw;
    height: 100vh;

    form {

        width: 100%;
        height: 90%;

        margin: 0 auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    fieldset {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    label {
        position: relative;
        margin:0 auto;

        svg {
            position: absolute;
            right: 10px;
            top:5px;
            
            color: #000000;

        }
    }

    div {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-width: 468px) {
        width: 50%;
        height: 100vh;

        border-radius: 0 15px 15px 0;
    }
`;
