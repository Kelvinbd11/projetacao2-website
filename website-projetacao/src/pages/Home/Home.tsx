import NavBar from '../../components/NavBar/NavBar'
import LogoEmpresa from '../../components/LogoEmpresa/LogoEmpresa';
import empresario from '../../assets/images/empresario-homem.png';
import empresa from '../../assets/images/empresa.jpg'
import ButtonDark from '../../components/ButtonDark/ButtonDark'
import ButtonLight from '../../components/ButtonLight/ButtonLight'
import DetalhesSection, { ImagesC4, Section4 } from '../../components/DetalhesSection/DetalhesSection';
import ImgS4 from '../../assets/images/section4.jpg';
import { Container, Section1, TextContent1, Description, ContainerImage, Section2, Title2, ImagesC2, Section3, ImageContent3, ImageEmpresa, ContentText, ButtonsInline, ImgEmpresario, ContentText5, ContentImage5, Section5, ImgSection5 } from './Home.styles.jsx'
import ColoredText from '../../components/ColoredText/ColoredText';
import { IoRocket } from "react-icons/io5";
import { FaMedal } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { Title } from '../../components/Title/Title';
import { SubText } from '../../components/SubText/SubText';


const Home: React.FC = () => {
  return (
    <>
      <NavBar />
       <Container>
          <Section1>
            <TextContent1>
              <Description $defaultColor={true}>Conheça a empresa Projetação</Description>
              <Title>Especialista em Inovações a <ColoredText><br />próxima Startup Unicórnio</ColoredText></Title>
              <SubText>Holding Projetação LTDA, confira agora os nossos projetos que serão a próxima Startup Unicórnio do Brasil</SubText>
              <ButtonsInline>
                <ButtonDark
                  text="Ver projetos"
                  link="/Projects"
                />
              </ButtonsInline>
            </TextContent1>

            <ContainerImage>
              <ImgEmpresario src={empresario} alt={"homem-empresario"} />
            </ContainerImage>
          </Section1>

          <Section2>
            <Title2>Confira nossas empresas e patentes</Title2>

            <ImagesC2>
              <LogoEmpresa />
            </ImagesC2>

          </Section2>

          <Section3>
            <ImageContent3>
              <ImageEmpresa src={empresa} alt={"imagem-empresa"}/>
            </ImageContent3>

            <ContentText>
              <Description $defaultColor={false}>Contamos com inovações promissoras</Description>
              <Title fontSize='2rem'>Especialista em Patentes, <br/><ColoredText>Registro de marcas e Inovações.</ColoredText></Title>
              <SubText>Estamos em busca de alavancar no mercado, e com investimento seremos a próxima Startup Unicórnio do Brasil, com projetos promissores.</SubText>
                
              <ButtonsInline>
                <ButtonDark
                  text="Ver projetos"
                  link="/Projects"
                />
                <ButtonLight
                  text="Ver Blog"
                  link="/Blog"
                />
                </ButtonsInline>

              <SubText>Veja nossos projetos e acompanhe nosso blog.</SubText>
            </ContentText>
          </Section3>

          <Section4>
            <ImagesC4>
              <DetalhesSection IconComponent={IoRocket} title='Valuation' description='10 Bilhões'  />
              <DetalhesSection IconComponent={FaMedal} title='Patentes' description='+6 Patentes'  />
              <DetalhesSection IconComponent={FaPeopleGroup} title='Parceiros' description='4 Membros'  />
            </ImagesC4>
          </Section4>

          <Section5>
            <ContentImage5>
              <ImgSection5 src={ImgS4} alt={"imagem-empresa"}/>
            </ContentImage5>

            <ContentText5>
              <Description>Contamos com inovações promissoras</Description>
              <Title>Seja um Sócio-Investidor <br/><ColoredText>vem ser Projetação.</ColoredText></Title>
              <Description>Estamos em busca de investimento, para então podermos impulsionar nossos projetos.</Description>
                
              <ButtonsInline>
                <ButtonDark text="Ver projetos" link="/Projects" />
                <ButtonLight text="Ver Blog" link="/Blog" />
              </ButtonsInline>
            </ContentText5>
          </Section5>
        </Container>
      
    </>
  )
}

export default Home