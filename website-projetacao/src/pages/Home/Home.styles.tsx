import styled from 'styled-components';

const breakpoints = {
    mobile: '480px',
    tabletMin: '481px',
    tabletMax: '1023px',
    desktopMin: '1024px',
    desktopMax: '1200px',
  };

// Section 1:
export const Container = styled.div `
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: 0; 
    padding: 0;
    background-color: #ffffff;
    flex-direction: column;

    @media (max-width: ${breakpoints.mobile}) {
    
    }

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {

    }
`
export const Section1 = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80vh; /* Ajuste conforme necessário */
    background: linear-gradient(to top, #5facff45, #fafdff);

    @media (max-width: ${breakpoints.mobile}) {
        display: block;
        flex-direction: column
        height: auto;
    }

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
        display: block;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: auto;  
    }


    
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

   & #description1{
    color: rgb(0, 56, 176);
   }

    @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
        height: 70vh;
        padding: 0rem 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
        width: 100%;
        height: 70%;
        padding: 0rem 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 3rem 0;
    }
`
export const ImgEmpresario = styled.img `
    max-width: fit-content;
    max-height: 90%;
    transform: scaleX(-1);

    @media (max-width: ${breakpoints.mobile}) {
        display: none;

  }

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
        display: none;
    }
    
`


export const Description = styled.p<{ $defaultColor?: boolean }> `
    color: ${props => props.$defaultColor ? "rgb(0, 56, 176)" : "black"}
`

export const ContainerImage = styled.div `
    display: flex;
    justify-content: center;
    align-items: end;
    width: 40vw;
    height: 80vh;
    // padding-right: 10rem;

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
        display: none;
    }
`

// Section 2:
export const Section2 = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 25vh; /* Ajuste conforme necessário */
    background: linear-gradient(to bottom, #5facff25, #fafdff);
    flex-direction: column;   
    
    @media (max-width: ${breakpoints.mobile}) {
        height: auto;
        padding: 2rem 0;
    }

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
        flex-direction: column;
    }
        

`

export const Title2 = styled.h2 `
    font-size: 1rem;
    color: rgb(35, 35, 35);
    font-weight: 700;
    text-transform: uppercase;
    padding-bottom: 1rem;

     @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.5rem;
        text-align: center;
  }
`

export const ImagesC2 = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 80%;
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

    @media (max-width: ${breakpoints.mobile}) {
        & .logo-s2{
        max-width: 15rem;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
        margin-top: 1.5rem;
    }
        width: 90%
        display: block;
        flex-direction: column;
  }

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
        & .logo-s2{
            display: inline-block;
            max-width: 10rem;
            padding: 1rem;
            cursor: pointer;
            transition: transform 0.3s ease-in-out;
            margin-top: 1.5rem;
        }

        justify-content: center;
    }
`

// Section 3:
export const Section3 = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80vh;
    flex-direction: row;
    background: linear-gradient(to bottom, #5facff25, #fafdff);   
    
    @media (max-width: ${breakpoints.mobile}) {
        display: block;
        height: auto;
        padding: 0 1rem;
    }

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
        display: block;
        justify-content: center;
        height: auto;
        justify-content: center;
    }
    
`

export const ImageContent3 = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 1rem;
    width: 40%;
    height: 100%;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 1rem;
        margin: 2rem 0;
        justify-content: center;
        align-items: start;
        width: 100%;
        height: auto;
  }

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
        margin: 2rem 0;
        padding: 0;
        justify-content: center;
        align-items: start;
        width: 100%;
        height: auto;
    }
`

export const ImageEmpresa = styled.img `
    width: 100%;
    height: 20rem;
    border-radius: 2rem;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);  /* Adiciona sombra */
    object-fit: cover; /* Faz a imagem cobrir a div mantendo suas proporções */

    @media (max-width: ${breakpoints.mobile}) {
        border-radius: 1rem;
    }

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
        border-radius: 1rem;
        box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);  /* Adiciona sombra */
        height: 14rem;
    }
    
`

export const ContentText = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    width: 40%;

    @media (max-width: ${breakpoints.mobile}) {
        display: flex;
        width: 100%; 
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 2rem;
    }

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
        display: flex;
        width: 100%; 
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 2rem;
    }
    
`

export const ButtonsInline = styled.div `
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
`

// Section 05:
export const Section5 = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80vh;
    flex-direction: row;
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom, #5facff25, #fafdff);


    @media (max-width: ${breakpoints.mobile}) {
        display: block;
        height: auto;
    }

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
        display: block;
        justify-content: center;
        margin: 0;
        padding: 0;
    }

    
`

export const ContentImage5 = styled.div `
    display: flex;
    justify-content: left;
    align-items: center;
    width: 60vw;
    height: auto;

    @media (max-width: ${breakpoints.mobile}) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto; 
    }

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto; 
    }
`   

export const ContentText5 = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    width: 50vw;
    padding-right: 2rem;
    margin-left: 2rem;

    @media (max-width: ${breakpoints.mobile}) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;
        padding: 0;
        margin: 0;
        margin-bottom: 2rem;
        padding: 0 1rem;
    }

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
        display: flex;
        width: 100%;
        height: auto;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 1rem;
        margin-left: 0rem;
    }
`

export const ImgSection5 = styled.img `
    width: 100%;
    height: 100%;
    margin-right: 4rem;
    border-top-right-radius: 2rem; /* Arredonda a borda superior direita */
    border-bottom-right-radius: 2rem; /* Arredonda a borda inferior direita */
    object-fit: cover; /* Faz a imagem cobrir a div mantendo suas proporções */

     @media (max-width: ${breakpoints.mobile}) {
        margin-right: 0rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
        border-top-right-radius: 0; /* Arredonda a borda superior direita */
        border-bottom-right-radius: 0; /* Arredonda a borda inferior direita */
    }

    @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
         margin-right: 0rem;
        margin-bottom: 2rem;
        border-top-right-radius: 0; /* Arredonda a borda superior direita */
        border-bottom-right-radius: 0; /* Arredonda a borda inferior direita */
    }
`