import NavBar from '../../components/NavBar/NavBar'
import './Home.css';
import LogoEmpresa from '../../components/LogoEmpresa/LogoEmpresa';
import empresario from '../../assets/images/empresario-homem.png';
import empresa from '../../assets/images/empresa.jpg'
import ButtonDark from '../../components/ButtonDark/ButtonDark'
import ButtonLight from '../../components/ButtonLight/ButtonLight'
import DetalhesSection from '../../components/DetalhesSection/DetalhesSection';
import ImgSection4 from '../../assets/images/section4.jpg';
import { Title, Container, Section1, TextContent1, Description, SubText } from './Home.styles.jsx'


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
                <ButtonDark 
                  text="Ver projetos"
                  link="/Projects"
                />
              </TextContent1>

              <div className='img-content2'>
                <img className='homem-empresario' src={empresario} alt="homem-empresario" />
              </div>
            </Section1>
          {/* Section 01 -Fim */}

          {/* Section 02 - Início */}
            <div className="section2">
              <h2>Confira nossa empresas e patentes</h2>

              <div className="imagens-c2">
                <LogoEmpresa />
              </div>
            </div>
          {/* Section 02 - Fim */}

          {/* Section 03 - Início */}
          <div className="section3">
            <div className='img-content3'>
              <img className='empresa' src={empresa} alt="imagem-empresa" />
            </div>

            <div className='text-content3'>
                <Description $defaultColor={false}>Contamos com inovações promissoras</Description>
               <Title>Especialista em Patentes, <br/><span>Registro de marcas e Inovações.</span></Title>
                <p>Estamos em busca de alavancar no mercado, e com investimento seremos a próxima Startup Unicórnio do Brasil, com projetos promissores.</p>
                
                <div className='buttons-s3'>
                  <ButtonDark
                    text="Ver projetos"
                    link="/Projects"
                  />
                  <ButtonLight
                    text="Ver Blog"
                    link="/Blog"
                  />
                </div>

                <p>Veja nossos projetos e acompanhe nosso blog.</p>

              </div>
          </div>
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