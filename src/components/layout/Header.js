import styles from './Header.module.css';

import { Link } from 'react-router-dom';

function Header(){
    return(
        <nav className={styles.navbar}>

                <h1>📑 ListIng</h1>

            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                
                <li className={styles.item}><Link to="/list">Lista</Link></li>
            </ul>
        </nav>
    )
}

export default Header;