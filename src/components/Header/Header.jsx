import styles from './Header.module.scss';

export default function Header(){
    return (
        <div>
            <header>
                <h1 className={styles.logo}>IhorMalkov</h1>
            </header>
        </div>
    )
}