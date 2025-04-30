import React from 'react';
import styles from './gallerySlide.module.scss';

const GallerySlide = ({ title, imageUrl, altText, text, illustrateImg }) => {
    return (
        <div className={styles.slide}>
            <div className={`${styles.item} ${styles.itemTitle}`}>
                <h5 className={styles.title}>{title}</h5>
                {imageUrl ? (
                    <img src={imageUrl} alt={altText} />
                    ) : null
                }
            </div>
            <div className={`${styles.item} ${styles.itemContent} ${illustrateImg ? styles.itemWidthImg : ""}` }>
                {text ? (
                <p className={styles.text}>{text}</p>
                ) : null}

                {illustrateImg ? (
                    <picture>
                        <source srcSet={illustrateImg} media="(max-width: 655px)" />
                        <img src={illustrateImg} alt={altText} />
                    </picture>
                    ) : null
                }
            </div>
        </div>
    );
};

export default GallerySlide;