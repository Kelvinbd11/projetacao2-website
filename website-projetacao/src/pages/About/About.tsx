import { ContainerDefault } from '../../components/ContainerDefault/ContainerDefault';
import styled from 'styled-components';
import NavBar from '../../components/NavBar/NavBar';
import CardMvv from '../../components/CardMvv/CardMvv';
import { TbTargetArrow } from "react-icons/tb";
import { FaMountainSun } from "react-icons/fa6";
import { RiShieldStarFill } from "react-icons/ri";
import KelvinImg from '../../assets/images/kelvinbd.png';
import DevanImg from '../../assets/images/Devan.png'
import AndreHiam from '../../assets/images/andrehiam.jpg'
import MemberCard from '../../components/MemberCard/MemberCard';

const breakpoints = {
    mobile: '480px',
    tabletMin: '481px',
    tabletMax: '1023px',
    desktopMin: '1024px',
    desktopMax: '1200px',
  };


const Section1 = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
  background-color: #5facff25;

  @media (max-width: ${breakpoints.mobile}) {

  }

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {

  }
`

const AboutTitle = styled.h1`
  text-align: center;
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

  @media (max-width: ${breakpoints.mobile}) {
    
  }

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    height: auto;
    width: 90vw;
  }
`

const TextContent = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  // padding: 0.1rem 3.5rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: rgb(6, 23, 60);
  text-align: center;
`

const TextParagraph = styled.p`
  padding: 10px 0;
  font-size: 1.1rem;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    
  }

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    font-size: 0.9rem;
    text-align: justify;
    text-align-last: center; /* Centraliza a última linha */
  }
`

const Section3 = styled.div `
  display: flex;
  justify-content: center;
  width: 90vw;
  height: 60vh;
  flex-direction: column; /* Faz os cartões ficarem em coluna */ 
  align-items: center; /* Centraliza os cartões horizontalmente */

  @media (max-width: ${breakpoints.mobile}) {
    
  }

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    height: auto;
    margin: 1rem 0;
  }

`

const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: ${breakpoints.mobile}) {

  }

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    display: block;
    justify-content: center;
    align-items: center;
  }

`

const Section4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  height: auto;
  margin: 1rem 1rem;
  gap: 2rem;

  @media (max-width: ${breakpoints.mobile}) {

  }

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
    margin: 0;
  }

  
`

const ContentMembers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 80%;
  height: auto;
  margin-bottom: 3rem;
  gap: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    
  }

  @media (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
     display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
  }
  
`

const About: React.FC = () => {

  return (
    <>
    <NavBar />

    <ContainerDefault>
      <Section1>
        <AboutTitle>Sobre</AboutTitle>
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
        <Title>Nossos Pilares</Title>
        <Cards>  
          <CardMvv IconComponent={TbTargetArrow} title='Missão' description='Transformar ideias em startups inovadoras, criando soluções eficientes e protegendo inovações com registro de patentes e marcas.' highlight={true}   />
          <CardMvv IconComponent={FaMountainSun} title='Visão' description='Ser referência em criação de startups inovadoras e líderes em registro de patentes, impulsionando soluções impactantes.' highlight={true}/>
          <CardMvv IconComponent={RiShieldStarFill} title='Valores' description='Compromisso com a excelência, inovação e integridade. Sucesso só com ética e qualidade, sem atalhos.' highlight={true} /> 
        </Cards>
      </Section3>
    </ContainerDefault>

      <Section4>
          <Title style={{paddingTop: '2rem'}}>Membros da Holding</Title>
          <ContentMembers>
            <MemberCard title='Kelvin' description='Desenvolvedor Full Stack' img={KelvinImg} />
            <MemberCard title='Devan' description='Ceo Fundador' img={DevanImg} />
            <MemberCard title='André' description='Designer Product' img={AndreHiam} />
          </ContentMembers>
      </Section4>
    </>
  )
}

export default About