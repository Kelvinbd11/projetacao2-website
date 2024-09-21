import styles from './DetalhesSection.module.css'
import { IoRocket } from "react-icons/io5";
import { FaMedal } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";



const DetalhesSection = () => {
  return (
    <div className={styles.section4}>
        <div className={styles.imagensC4}>
            {/* DESC 1 */}
            <div className={styles.icones}>
                <IoRocket className={styles.icons} />
                <div className={styles.textContent}>
                    <h1>Valuation</h1>
                    <p>10 Milhões</p>
                </div>
            </div>

            {/* DESC 2 */}
            <div className={styles.icones}>
                <FaMedal className={styles.icons} />
                <div className={styles.textContent}>
                    <h1>Patentes</h1>
                    <p>+ 6 Patentes</p>
                </div>
            </div>

             {/* DESC 3 */}
            <div className={styles.icones}>
                <FaPeopleGroup className={styles.icons} />
                <div className={styles.textContent}>
                    <h1>Membros</h1>
                    <p>8 Colaboradores</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetalhesSection