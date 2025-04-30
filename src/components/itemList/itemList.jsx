import React from 'react';
import styles from './itemList.module.scss';

const ItemList = ({ items, hasCol3 }) => {
    const listItems = items.map((item) => (
        <li key={item.id} className={`${styles.item} ${item.hover_up ? styles.hover_up : ''} ${item.hover_fade ? styles.hover_fade : ''}`}>
            <img className={styles.img} src={item.img} alt={item.title} />
            <div className={styles.text}>
                <h4 className="title-3">{item.title}</h4>
                {item.text && <p className={styles.designation}>{item.text}</p>}
            </div>
        </li>
    ));

    return <ul className={`${styles.list} ${hasCol3 ? styles.xl_col_3 : ''}`}>{listItems}</ul>;
}

export default ItemList;