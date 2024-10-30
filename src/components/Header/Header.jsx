import styles from './Header.module.scss';
import menuIcon from '/assets/images/menu.svg';
import closeMenuIcon from '/assets/images/close.svg'; 
import { navLinks } from './HeaderConstants.js';
import { useState, useEffect } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <header className={`${styles.header} ${isOpen ? styles.headerOpen : ''}`} id="header">
            <a href='/' className={`${styles.logo} ${isOpen ? styles.hidden : ''}`}>IhorMalkov</a>

            <button onClick={toggleMenu} className={`${styles.button} ${isOpen ? styles.hidden : ''}`}>
                <img
                    className={styles.burger}
                    src={menuIcon}
                    alt="Open menu"
                />
            </button>

            {isOpen && (
                <button onClick={toggleMenu} className={styles.closeButton}>
                    <img src={closeMenuIcon} alt="Close menu" />
                </button>
            )}

            <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
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
