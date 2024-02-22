import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css"

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li> <a href='https://github.com/IgorKhalil'><FaGithub size={30} /> </a></li>
                <li> <a href='https://www.linkedin.com/in/igor-silva-a97316279/'><FaLinkedin size={30} /> </a></li>
            </ul>
            <p>Email.area</p>
            <p>Igor Khalil © 2024</p>
        </div>
    )
}

export default Footer