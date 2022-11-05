import styled from "styled-components";

export const FormEditStyles = styled.form`
    position: relative;

    width: 50vh;
    height: 50vh;
    margin: 0 auto;

    border-radius: 2vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:2rem;

    background-color: #ffffff;

    .close {
        position: absolute;
        top: 1rem;
        right: 1rem;

        background: transparent;
        border: none;

        cursor: pointer;
    }

    fieldset {
        margin-top: -3rem;
        
        label {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            margin-top: 2rem;
        }
    }
`;

export const Div = styled.div`
    position: absolute;

    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.5);
`;
