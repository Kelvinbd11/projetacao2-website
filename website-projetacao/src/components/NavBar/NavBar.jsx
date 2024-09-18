import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/main.css";
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom"


const NavBar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    <header>
        <Link to="/"><img src={logo} alt="logo-projetacao" className="logo" /></Link>
        <nav ref={navRef}>
            <Link to="/" className="link-nav" >Início</Link>
            <Link to="/about" className="link-nav" >Sobre nós</Link>
            <Link to="/projects" className="link-nav" >Projetos</Link>
            <Link to="/invest" className="link-nav" >Invista aqui</Link>
            <Link to="/blog" className="link-nav" >Blog</Link>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
        </button>

    </header>
  );
};

export default NavBar;
