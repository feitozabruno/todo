import styles from './Header.module.css'
import rocketLogo from '../assets/logo.svg'

export function Header() {
    return (
        <header className={styles.main}>
            <img src={rocketLogo} alt="" />
            <h2>to<span>do</span></h2>
        </header>
    )
}