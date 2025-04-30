import styles from './teams.module.scss';
import Teams1 from '../../assets/teams-1.svg';
import Teams2 from '../../assets/teams-2.svg';
import Teams3 from '../../assets/teams-3.svg';
import Teams4 from '../../assets/teams-4.svg';
import Teams5 from '../../assets/teams-5.svg';

const Teams = () => {
    const itemsTag = [
        {id: 1, name: 'TECHTALK', icon: `${Teams1}`, content: 'Знакомим коллег с новыми процессами, инструментами и технологиями'},
        {id: 2, name: 'Обучение', icon: `${Teams2}`, content: 'Повышаем навыки владения инструментами'},
        {id: 3, name: 'Круглые столы', icon: `${Teams3}`, content: 'Решаем насущные проблемы DevOps совместными усилиями'},
        {id: 4, name: 'Встречи с приглашёнными специалистами', icon: `${Teams4}`, content: 'Перенимаем опыт других организаций'},
        {id: 5, name: 'Опросы', icon: `${Teams5}`, content: 'Определяем, в каком направлении двигаться и какой контент более интересен'},
    ]


    const tagItems = itemsTag.map((item) => (
        <li key={item.id} className={styles.item}>
            <div className={styles.itemHead}>
                <div className={styles.boxIcon}>
                    <img className={styles.icon} src={item.icon} alt={item.name} />
                </div>
                <p className='title-6'>{item.name}</p>
            </div>
            <p className={styles.content}>{item.content}</p>
        </li>
    ));

    return (
        <div className={styles.box}>
            <h3 className="title-5">Контент в&#160;сообществах</h3>
            <ul className={`${styles.wrapper} t-vertical-small`}>
                {tagItems}
            </ul>
        </div>
    );
};

export default Teams;

