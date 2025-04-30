import styles from './greeting.module.scss';
import Logo from '../../assets/logo.svg';

const Greeting = ({ setModalActive }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <img className={styles.logo} src={Logo} alt="logo" />
                <h1 className="title-1">Крупнейшая финансовая компания страны</h1>
                <p className={`${styles.subtitle} text-1`}>Становись частью финансовой истории!</p>
                <button className={`${styles.btn} btn-1`} onClick={() => setModalActive(true)}>Возможности для тебя</button>
            </div>
        </div>
    )
}

export default Greeting;