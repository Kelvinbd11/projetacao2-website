import NavBar from '../../components/NavBar/NavBar'
import './Home.css';
import LogoEmpresa from '../../components/LogoEmpresa/LogoEmpresa';

import empresario from '../../assets/images/empresario-homem.png';
import empresa from '../../assets/images/empresa.jpg'

import ButtonDark from '../../components/ButtonDark/ButtonDark'
import ButtonLight from '../../components/ButtonLight/ButtonLight'


const Home = () => {
  return (
    <>
      <NavBar />
        <div className='Container'>
          {/* Section 01 -Início */}
            <div className="section1">
              <div className='text-content1'>
                <p id='description1'>Conheça a empresa Projetação</p>
                <h1>Especialista em Inovações a <br/><span>próxima Startup Unicórnio</span></h1>
                <p>Holding Projetação LTDA, confira agora os nossos projetos que serão a próxima Startup Unicórnio do Brasil</p>
                <ButtonDark 
                  text="Ver projetos"
                  link="/Projects"
                />
              </div>

              <div className='img-content2'>
                <img className='homem-empresario' src={empresario} alt="homem-empresario" />
              </div>
            </div>
          {/* Section 01 -Fim */}

          {/* Section 02 - Início */}

            <div className="section2">
              <h1>Confira nossa empresas e patentes</h1>

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
                <p id='description2'>Contamos com inovações promissoras</p>
                <h1>Especialista em Patentes, <br/><span>Registro de marcas e Inovações.</span></h1>
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

                <p>Veja nossos projetos e acompanhe nosso blog. </p>


              </div>
          </div>

          {/* Section 03 - Fim */}




          
      </div>
    </>
  )
}

export default Home