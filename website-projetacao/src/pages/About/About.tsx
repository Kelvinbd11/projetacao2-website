import { ContainerDefault } from '../../components/ContainerDefault/ContainerDefault';
import styled from 'styled-components';
import NavBar from '../../components/NavBar/NavBar'

const Section1 = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 25vh;
  background-color: red;
`

const AboutTitle = styled.h1`
  text-alight: center;
  
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

    </>
  )
}

export default About