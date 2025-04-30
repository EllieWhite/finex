import React from 'react';
import styles from './modal.module.scss';

import CloseIcon from '../../assets/close.svg';

const Modal = ({active, setActive, children}) => { 
    return (
        <div className={`${styles.modal} ${active ? styles.active : ''}`} onClick={() => setActive(false)}>
            <div className={`${styles.content} ${active ? styles.active : ''}`} onClick={e => e.stopPropagation()}>
                <button name='btnClose' className={styles.btnClose}>
                    <img className={styles.iconClose} src={CloseIcon} alt="close" />
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal;