import styles from './Info.module.scss'

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
        </section>
    )
}

export default Info;