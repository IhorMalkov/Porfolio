import styles from './Info.module.scss'
import {cards}  from './InfoConstants.js'
const Info = () => {
    return (
        <section>
            <div className={styles.title}>
                <h2 className={styles.text}>
                    My Work
                </h2>
            </div>
            <div className={styles.subtitle}>
                <p className={styles.text}>
                    A collection of projects I've worked on.
                </p>
            </div>
            <div className={styles.cardHolder}>
                    {cards.map((card) => {
                        return (
                            <div key={card.id}>
                                <h1 className={styles.title}>{card.title}</h1>
                                <h3 className={styles.subtitle}>{card.subtitle}</h3>
                                <a className={styles.link} href={card.link}>link</a>
                            </div>
                        )
                    })}
            </div>
        </section>
    )
}

export default Info;