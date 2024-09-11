import styles from './Header.module.scss';
import menuIcon from '../../assets/menu.svg';
import closeMenuIcon from '../../assets/close.svg';
import { navLinks } from './HeaderConstants.js';
import { useState, useEffect } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <header className={`${styles.header} ${isOpen ? styles.menuOpen : ''}`}>
                {isMobile ? (
                    <>
                        <a href='/' className={styles.logo}>IhorMalkov</a>
                        <button onClick={toggleMenu} className={styles.button}>
                            <img
                                className={styles.burger}
                                src={isOpen ? closeMenuIcon : menuIcon}
                                alt={isOpen ? 'Close menu' : 'Open menu'}
                            />
                        </button>
                        {isOpen && (
                            <nav className={styles.nav}>
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
                        )}
                    </>
                ) : (
                    <>
                        <a href='/' className={styles.logo}>IhorMalkov</a>
                        <nav className={styles.nav}>
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
                    </>
                )}
            </header>
        </div>
    );
}
