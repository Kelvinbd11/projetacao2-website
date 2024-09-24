import { ContainerDefault } from '../../components/ContainerDefault/ContainerDefault';
import styled from 'styled-components';
import NavBar from '../../components/NavBar/NavBar'
import CardMvv from '../../components/CardMvv/CardMvv';

const Section1 = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
  background-color: #5facff25;
`

const AboutTitle = styled.h1`
  text-alight: center;
`

const Section2 = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80vw;
  height: 65vh;
  // background-color: rgb(223, 232, 254);
  // background: linear-gradient(to bottom, #fafdff, #5facff25);
  border-radius: 25px;
  margin: 1rem 0;
`
const TextContent = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80vw;
  padding: 0.1rem 3.5rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: rgb(6, 23, 60);
  text-alight: center;
`

const TextParagraph = styled.p`
  padding: 10px 0;
  font-size: 1.1rem;
  text-align: center;

`

const Section3 = styled.div `
  display: flex;
  justify-content: center;
  width: 80vw;
  flex-direction: column; /* Faz os cartões ficarem em coluna */
  align-items: center; /* Centraliza os cartões horizontalmente */

`



const About: React.FC = () => {

  return (
    <>
    <NavBar />

    <ContainerDefault>
      <Section1>
        <AboutTitle>About Us</AboutTitle>
      </Section1>
    </ContainerDefault>

    <ContainerDefault>
      <Section2>
          <Title>Quem somos?</Title>
        <TextContent>
          <TextParagraph>A Projetação é uma holding dedicada à criação de startups inovadoras. Estamos em uma fase inicial de crescimento, desenvolvendo e gerenciando projetos próprios, como ventiladores em série econômicos e peneiras para piscina com design inovador. Nosso foco é oferecer soluções criativas e eficientes para diferentes segmentos de mercado.</TextParagraph>
          <TextParagraph>Além de desenvolver produtos, somos especialistas no registro de patentes e marcas, garantindo que todas as nossas inovações estejam protegidas e preparadas para crescer em um ambiente competitivo. Na Projetação, transformamos ideias em negócios sólidos, sempre com o objetivo de impactar positivamente o mercado.</TextParagraph>
        </TextContent>
      </Section2>
    </ContainerDefault>
    
    <ContainerDefault style={{backgroundColor: '#5facff25' }}>
      <Section3>
        <CardMvv />
        <CardMvv />
        <CardMvv />


      </Section3>
    </ContainerDefault>

    </>
  )
}

export default About