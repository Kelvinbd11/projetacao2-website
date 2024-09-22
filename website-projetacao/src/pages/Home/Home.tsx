import NavBar from '../../components/NavBar/NavBar'
import './Home.css';
import LogoEmpresa from '../../components/LogoEmpresa/LogoEmpresa';
import empresario from '../../assets/images/empresario-homem.png';
import empresa from '../../assets/images/empresa.jpg'
import ButtonDark from '../../components/ButtonDark/ButtonDark'
import ButtonLight from '../../components/ButtonLight/ButtonLight'
import DetalhesSection from '../../components/DetalhesSection/DetalhesSection';
import ImgSection4 from '../../assets/images/section4.jpg';
import { Title, Container, Section1, TextContent1, Description, SubText, ContainerImage, Section2, Title2, ImagesC2, Section3, ImageContent3, ImageEmpresa, ContentText, ButtonsInline } from './Home.styles.jsx'


const Home: React.FC = () => {
  return (
    <>
      <NavBar />
       <Container>
          {/* Section 01 -Início */}
            <Section1>
              <TextContent1>
                <Description $defaultColor={true}>Conheça a empresa Projetação</Description>
                <Title>Especialista em Inovações a <span>próxima Startup Unicórnio</span></Title>
                <SubText>Holding Projetação LTDA, confira agora os nossos projetos que serão a próxima Startup Unicórnio do Brasil</SubText>
                <ButtonDark text="Ver projetos" link="/Projects"/>
              </TextContent1>

              <ContainerImage>
                <img className='homem-empresario' src={empresario} alt="homem-empresario" />
              </ContainerImage>
            </Section1>
          {/* Section 01 -Fim */}

          {/* Section 02 - Início */}
            <Section2>
              <Title2>Confira nossa empresas e patentes</Title2>

              <ImagesC2>
                <LogoEmpresa />
              </ImagesC2>

            </Section2>
          {/* Section 02 - Fim */}

          {/* Section 03 - Início */}
          <Section3>
            <ImageContent3>
              <ImageEmpresa src={empresa} alt={"imagem-empresa"}/>
            </ImageContent3>

            <ContentText>
              <Description $defaultColor={false}>Contamos com inovações promissoras</Description>
              <Title>Especialista em Patentes, <br/><span>Registro de marcas e Inovações.</span></Title>
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
          {/* Section 03 - Fim */}

          {/* Section 04 - Início */}
          <DetalhesSection />  
          {/* Section 04 - Fim */}

          {/* Section 05 - Início */}

          <div className="section4">
            <div className='img-content4'>
              <img className='empresa' src={ImgSection4} alt="imagem-empresa" />
            </div>

            <div className='text-content4'>
                <p id='description3'>Contamos com inovações promissoras</p>
                <h1>Seja um Sócio-Investidor <br/><span>vem ser Projetação.</span></h1>
                <p>Estamos em busca de investimento, para então podermos impulsionar nossos projetos.</p>
                
                <div className='buttons-s4'>
                <ButtonDark text="Ver projetos" link="/Projects" />
                <ButtonLight text="Ver Blog" link="/Blog" />
                </div>
              </div>
          </div>

          {/* Section 05 - Fim */}

        </Container>
    </>
  )
}

export default Home