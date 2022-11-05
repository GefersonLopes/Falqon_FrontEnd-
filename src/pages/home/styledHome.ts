import styled from "styled-components";

export const Main = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    section {
        position: relative;
        background: #ffffff;

        width: 95vw;
        height: 95vh;

        border-radius: 10px;

        h1 {
            margin-top: 1rem;
        }

        ul {

            height: 39vh;
            overflow-y: scroll;

            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            margin-top: 1rem;

            li {
                position: relative;

                width: 80%;
                height: 10vh;
                margin: 0 auto;
                padding: 0 8%;

                border-radius: 20px;
                border: 2px solid #f9b9f2;
                background: rgb(240,128,128,0.1);

                display: flex;
                align-items: center;
                justify-content: space-between;

                @media screen and (min-width: 560px){
                    width: 27rem;
                }

                div {
                    display: flex;
                    flex-direction: column;
                    gap: 0.9rem;

                    margin:0 auto;
                }
            }

            p {
                color: #f9b9f2;
            }
            h3 {
                color: #f9b9f2;
            }
        }
    }
`;
