import styled from "styled-components"
import { FaLinkedin } from "react-icons/fa";

const breakpoints = {
    mobile: '480px',
    tabletMin: '481px',
    tabletMax: '1023px',
    desktopMin: '1024px',
    desktopMax: '1200px',
  };

interface MemberProps{
    title: string;
    description: string;
    img: string;
}

    const Member = styled.div<{ img: string }>`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-width: 300px;
        min-height: 350px;
        border-radius: 20px;
        background-color: blue;
        background-image: url(${({ img }) => img});
        background-size: cover; /* Ajusta a imagem para cobrir todo o container */
        background-position: center; /* Centraliza a imagem */
        position: relative; /* Permite posicionamento absoluto do conteúdo interno */
        overflow: hidden; /* Garante que o conteúdo não exceda o limite arredondado */
        padding-bottom: 1rem;

        @media (max-width: ${breakpoints.mobile}) {
    
        }

        @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 75%;
            min-height: 450px;
            background-position: center 20%;
            // max-width: 450px;
            // max-height: 600px;
        }
    `

    const DivMember = styled.div `
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        background-color: #DADCE1;
        padding: 0.4rem;
        margin-top: auto;
        border-radius: 10px;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.6); /* Adiciona a sombra */
    `

    const ContentMember = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        width: auto;
        background-color: #DADCE1;
        padding: 0.4rem;
        margin-top: auto;
    `

    const TitleMember = styled.h1 `
        color: black;
        font-size: 1.2rem;
    `

    const DescriptionMember = styled.p `
        color: black;
        font-size: 0.8rem;
    `

    const DivIcon = styled.div `
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: auto;
    `

const MemberCard: React.FC<MemberProps> = ({ title, description, img }) => {

  return (
    <Member img={img} >
        <DivMember>
            <ContentMember>
                <TitleMember>{title}</TitleMember>
                <DescriptionMember>{description}</DescriptionMember>
            </ContentMember>
            <DivIcon>
                <FaLinkedin style={{fontSize: '2rem'}} />
            </DivIcon>
        </DivMember>
    </Member>     
  )
}

export default MemberCard