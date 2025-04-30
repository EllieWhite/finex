import styles from './communities.module.scss';

const Communities = () => {
    const itemsTag = [
        {id: 1, name: 'DevOps Community'},
        {id: 2, name: 'Java Community'},
        {id: 3, name: 'QA Community'},
        {id: 4, name: 'Python Community'},
        {id: 5, name: 'Kubernetes Community'},
        {id: 6, name: 'Cloud Community'},
        {id: 7, name: 'Design Community'},
        {id: 8, name: 'Frontend Community'}
    ]

    const numsItem = [
        {id: 1, num: '15', designation: 'лидеров и активистов'},
        {id: 2, num: '300', designation: 'участников'},
        {id: 3, num: '100', designation: 'митапов и конференций'},
        {id: 4, num: '10', designation: 'DEMO DAYS, круглых столов, конференций с внешними спикерами'},
        {id: 5,  designation: 'Совместно с Ассоциацией ФинТех (АФТ) и ключевыми участниками финансового рынка создали отраслевой центр экспертиз по безопасной разработке — FinDevSecOps'},
    ]

    const tagItems = itemsTag.map((item) => (
        <li key={item.id} className={styles.item}><p>{item.name}</p></li>
    ));

    const numItems = numsItem.map((item) => (
        <li key={item.id} className={styles.numItem}>
            {item.num ? <h5 className={styles.subtitle}>{item.num}</h5> : ''}
            <p className={styles.designation}>{item.designation}</p>
        </li>
    ));

    return (
        <div className="t-vetrical">
            <h2 className="title-2">IT сообщества</h2>
            <ul className={`${styles.wrapper} t-vertical-small`}>
                {tagItems}
            </ul>
            <ul className={styles.box}>
                {numItems}
            </ul>
        </div>
    );
};

export default Communities;

