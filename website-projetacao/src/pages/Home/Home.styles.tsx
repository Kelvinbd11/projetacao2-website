import styled from 'styled-components';

export const Title = styled.h1 `
    font-size: 2.5rem;
    color: #000000;
    font-weight: 500;
    padding-bottom: 0.5rem;
    line-height: 1.2;
`
export const Container = styled.div `
    display: flex;
    width: 100%;
    height: 80%;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    flex-direction: column;
`
export const Section1 = styled.div `
    position: relative; /* Necessário para posicionar o pseudo-elemento corretamente */
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 80vh; /* Ajuste conforme necessário */
    background: linear-gradient(to top, #5facff45, #fafdff);
`

export const TextContent1 = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
    padding-left: 10rem;
    width: 50vw;
    height: 80vh;


    & span {
        color: rgb(0, 56, 176);
    }

   & #description1{
    color: rgb(0, 56, 176);
   }
`

export const Description = styled.p<{ $defaultColor?: boolean }>`
    color: ${props => props.$defaultColor ? "rgb(0, 56, 176)" : "black"}
`

export const SubText = styled.p`
    color: rgb(38, 38, 38);
    font-size: 1rem;
`