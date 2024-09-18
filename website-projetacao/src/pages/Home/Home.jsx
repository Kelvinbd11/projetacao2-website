import NavBar from '../../components/NavBar/NavBar'
import './Home.css';

import empresario from '../../assets/images/empresario-homem.png';
import projetacao from '../../assets/images/logo-projetacao.png';
import ventiloar from '../../assets/images/logo-ventiloar.png';
import peneiras from '../../assets/images/logo-peneiras.png';

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
                <p>Holding Projetação LTDA, confira agora os nossos projetos<br/> que serão a próxima Startup Unicórnio do Brasil</p>
              </div>

              <div className='img-content2'>
                <img className='homem-empresario' src={empresario} alt="homem-empresario" />
              </div>
            </div>
          {/* Section 01 -Fim */}

          {/* Section 02 - Início */}

            <div className="section2">
              <h1>Confira nossa empresas, todas patenteadas</h1>

              <div className="imagens-c2">
                <img className='logo-s2' src={projetacao} alt="logo-projetacao" />
                <img className='logo-s2' src={ventiloar} alt="logo-ventiloar" />
                <img className='logo-s2' src={peneiras} alt="logo-peneiras" />
                <img className='logo-s2' src={projetacao} alt="logo-projetacao" />               
              </div>
            </div>

          {/* Section 02 - Fim */}


          
      </div>
    </>
  )
}

export default Home