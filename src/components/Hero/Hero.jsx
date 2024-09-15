import styles from './Hero.module.scss'

export default function Hero(){
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <p className={styles.heroText}>Hi, I am Ihor Malkov<span className={styles.wave}>👋🏻</span></p>
                <p className={styles.heroText}>I'm a passionate Software Engineer with a focus on creating web applications</p>
            </div>
        </section>
    )
}