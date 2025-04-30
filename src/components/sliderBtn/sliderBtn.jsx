import React from 'react';
import styles from './sliderBtn.module.scss';
import classNames from 'classnames';

const SliderBtn = ({ arrowRight, className }) => {
  const buttonClasses = classNames(
    styles.swiper_slider_arrow,
    arrowRight ? styles.arrow_right : '',
    className
  );

  return (
    <button className={buttonClasses}></button>
  );
};

export default SliderBtn;
