import styles from './ButtonLight.module.css';
import { Link } from 'react-router-dom';

const ButtonLight = ({text, link}) => {
  return (
    <>
        <Link to={link}><button className={styles.btn}>{text}</button></Link>
    </>
  )
}

export default ButtonLight