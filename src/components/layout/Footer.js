import styles from './Footer.module.css';

import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
//npm install react-icons

import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>

            <p>Desenvolvido por Carla Magalhães - 2026</p>
        </footer>
    )
}

export default Footer;