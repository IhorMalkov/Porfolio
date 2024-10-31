import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footerDefault}>
      <div className={styles.footerLinks}>
        <a href="#header" className={styles.navItem}>Go Back</a>
        <p style={{color: 'white'}}>|</p>
        <a href="#contact" className={styles.navItem}>Contact Me</a>
      </div>

      <div className={styles.socialIcons}>
        <div className={styles.socialIcon}>
        <a href='https://github.com/IhorMalkov?tab=repositories' target='blank'>
            <img src="/assets/images/github.svg" alt="github" className={styles.socialImage} />
          </a>
         </div>
        <div className={styles.socialIcon}>
        <a href='https://www.linkedin.com/in/ihmalkov/' target='blank'> 
            <img src="/assets/images/linkedin.svg" alt="linkedin" className={styles.socialImage} />
          </a>
        </div>
      </div>

      <p className={styles.textWhite}>© 2024 Ihor Malkov. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
