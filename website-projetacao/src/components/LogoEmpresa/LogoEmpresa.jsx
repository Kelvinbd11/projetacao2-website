import projetacao from '../../assets/images/logo-projetacao.png';
import ventiloar from '../../assets/images/logo-ventiloar.png';
import peneiras from '../../assets/images/logo-peneiras.png';

import { Link } from 'react-router-dom';

const LogoEmpresa = () => {
  return (
    <>
        <Link to="/Projetacao"><img className='logo-s2' src={projetacao} alt="logo-projetacao" /></Link>
        <Link to="/Ventiloar"><img className='logo-s2' src={ventiloar} alt="logo-ventiloar" /></Link>
        <Link to="/Peneiras"><img className='logo-s2' src={peneiras} alt="logo-peneiras" /></Link> 
    </>
  )
}

export default LogoEmpresa