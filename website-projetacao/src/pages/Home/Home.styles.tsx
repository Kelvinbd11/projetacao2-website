import styled from 'styled-components';

// Section 1:
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

export const Description = styled.p<{ $defaultColor?: boolean }> `
    color: ${props => props.$defaultColor ? "rgb(0, 56, 176)" : "black"}
`

export const SubText = styled.p `
    color: rgb(38, 38, 38);
    font-size: 1rem;
`

export const ContainerImage = styled.div `
    display: flex;
    justify-content: center;
    align-items: end;
    width: 40vw;
    height: 80vh;
    padding-right: 10rem;
`

// Section 2:
export const Section2 = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 25vh; /* Ajuste conforme necessário */
    background: linear-gradient(to bottom, #5facff25, #fafdff);
    flex-direction: column;
`

export const Title2 = styled.h2 `
    font-size: 1rem;
    color: rgb(35, 35, 35);
    font-weight: 700;
    text-transform: uppercase;
    padding-bottom: 2.5rem;
`

export const ImagesC2 = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 0rem 15rem;
    padding-bottom: 10px;
    
    & .logo-s2{
        max-width: 10rem;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
    }

    & .logo-s2:hover {
        animation: pulse 1s infinite;
    }
    
        @keyframes pulse {
        0% {
            transform: scale(1);  /* Tamanho normal */
        }
        50% {
            transform: scale(1.1); /* Aumenta um pouco */
        }
        100% {
            transform: scale(1);  /* Retorna ao tamanho normal */
        }
    }
`

// Section 3:
export const Section3 = styled.div `
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 80vh;
    flex-direction: row;
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom, #5facff25, #fafdff);
`
export const ImageContent3 = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40vw;
    height: 80vh;
`

export const ImageEmpresa = styled.img `
    width: 30rem;
    border-radius: 2rem;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);  /* Adiciona sombra */
`

export const ContentText = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    width: 40%;
    padding-right: 5rem;
`

export const ButtonsInline = styled.div `
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
`

