import styles from './mission.module.scss';
import Goal from '../../assets/goal.svg';
import Shield from '../../assets/shield.svg';

const Mission = () => {
  const itemsMission = [
    {
      id: 1,
      title: 'Видение',
      designation:
        'мы\u00A0трансформируем финансовый рынок для\u00A0роста благосостояния каждого.',
        img: `${Goal}`
    },
    {
      id: 2,
      title: 'Миссия',
      designation:
        'выстроить новую модель взаимодействия, на\u00A0которую мы\u00A0все\u00A0сможем опереться.',
        img: `${Shield}`
    },
  ];

  const missionItems = itemsMission.map((item) => (
    <div key={item.id} className={styles.item}>
        <div className={styles.item__box}>
            <h4 className="title-4">{item.title}</h4>
            <p className={styles.designation}>{item.designation}</p>
        </div>
      <img className={styles.img} src={item.img} alt={item.title} />
    </div>
  ));

  return (
    <div className="t-vetrical">
        <h2 className="title-2">Нас вдохновляют <br/>наши миссия и&#160;видение</h2>
        <div className={`${styles.wrapper} t-vertical-small`}>
            {missionItems}
        </div>
    </div>

  );
};

export default Mission;

