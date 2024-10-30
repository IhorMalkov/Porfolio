import styles from './Header.module.scss';
import menuIcon from '/assets/images/menu.svg';
import closeMenuIcon from '/assets/images/close.svg';
import { navLinks } from './HeaderConstants.js';
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className={isOpen ? styles.header : styles.headerDefault} id="header">
            <a href='/' className={`${styles.logo} ${isOpen ? styles.hidden : ''}`}>IhorMalkov</a>

            <button onClick={toggleMenu} className={styles.button}>
                <img
                    className={styles.burger}
                    src={isOpen ? closeMenuIcon : menuIcon}
                    alt={isOpen ? 'Close menu' : 'Open menu'}
                />
            </button>

            <nav className={`${styles.nav} ${isOpen ? '' : styles.hidden}`}>
                <ul className={styles.navList}>
                    {navLinks.map((item) => (
                        <li key={item.id} className={styles.navItem}>
                            <a href={item.link} className={styles.navLink}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

