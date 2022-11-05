import styled from "styled-components";

export const Button = styled.button`
    width: 40vh;
    height: 5vh;

    border:none;
    border-radius: 15px;
    border: 2px solid #F9B9F2;

    background-color: #F9B9F2;
    color: #ffffff;

    font-weight: bolder;
    font-family: "Kanit";
    
    cursor: pointer;
    
    &:hover {
        background-color: transparent;
        border: 2px solid #F9B9F2;
        color: #F9B9F2;
    }

`;

export const ButtonRoute = styled.button`
    width: 40vh;
    height: 5vh;

    border:none;
    border-radius: 15px;
    border: 2px solid #F9B9F2;

    background-color: transparent;
    color: #F9B9F2;

    font-weight: bolder;
    font-family: "Kanit";

    cursor: pointer;
    
    &:hover {
        background-color: #F9B9F2;
        border: 2px solid #F9B9F2;
        color: #ffffff;
    }

`;

export const ButtonDell = styled.button`
    position: absolute;
    right: 0;

    width: 5vh;
    height: 100%;

    border:none;
    border-radius: 0 18px 18px 0;

    background-color: #F9B9F2;
    color: #ffffff;

    font-weight: bolder;
    font-family: "Kanit";

    cursor: pointer;

`;

export const ButtonEdit = styled.button`
    position: absolute;
    left: 0;

    width: 5vh;
    height: 100%;

    border:none;
    border-radius: 18px 0 0 18px;

    background-color: #F9B9F2;
    color: #ffffff;

    font-weight: bolder;
    font-family: "Kanit";

    cursor: pointer;

`;