import styles from './marquee.module.scss';

const Marquee = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.marquee}>
                <div className={styles.items}>
                    <p className={styles.item}>&#160;FINEX</p>
                    <p className={styles.item}>&#160;FINEX</p>
                    <p className={styles.item}>&#160;FINEX</p>
                </div>
                <div className={styles.items}>
                    <p className={styles.item}>&#160;FINEX</p>
                    <p className={styles.item}>&#160;FINEX</p>
                    <p className={styles.item}>&#160;FINEX</p>
                </div>
            </div>
        <p className={`${styles.subtitle} title-2`}>Финансовая Компания</p>
    </div>
    )
}

export default Marquee;