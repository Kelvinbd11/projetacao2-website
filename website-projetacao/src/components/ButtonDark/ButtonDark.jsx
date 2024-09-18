import styles from './ButtonDark.module.css';
import { Link } from 'react-router-dom';

const ButtonDark = ({text, link}) => {
  return (
    <>
        <Link to={link}><button className={styles.btn}>{text}</button></Link>
    </>
  )
}

export default ButtonDark