import styled from "styled-components";

export const Input = styled.input`
    width: 40vh;
    height: 5vh;
    
    border:none;    
    border-bottom: 1px solid #F9B9F2;
    border-radius: 8px;

    background-color: transparent;

    &::placeholder {
        font-family: "Kanit";
        font-weight: bolder;
        padding-left: 1rem;
        color: #F9B9F2; 
    };

`;