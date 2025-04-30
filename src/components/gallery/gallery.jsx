import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import GallerySlide from '../gallerySlide/gallerySlide';
import SliderBtn from '../sliderBtn/sliderBtn';
import './gallery.scss'

import Parus from '../../assets/gallery/parusnyj-sport@2x.jpg';
import Voleibol from '../../assets/gallery/voleibol@2x.jpg';
import Yoga from '../../assets/gallery/yoga@2x.jpg';


const Gallery = () => {
    const sliderData = [
        {
          title: 'Корпоратив\u00adные клубы',
          text: 'У всех сотрудников МОЕХ есть\u00A0возможность реализовать свои таланты и\u00A0амбиции не\u00A0только на\u00A0рабочем месте, но\u00A0и\u00A0за\u00A0его пределами. Наши корпоративные клубы это\u00A0сплочённые команды, которые могут показать себя и\u00A0в\u00A0офисе, и\u00A0на\u00A0спортивной площадке, и\u00A0в\u00A0интеллектуальном поединке. Каждый сотрудник может присоединиться к\u00A0любому из\u00A0корпоративных клубов и\u00A0представлять Группу на\u00A0масштабных событиях.',
        },
        {
          title: 'Клуб парусного cпорта FINEX\u00A0Sailing',
          illustrateImg: Parus,
          altText: 'Клуб парусного спорта FINEX Sailing',
        },
        {
          title: 'Волейбольный клуб FINEX',
          illustrateImg: Voleibol,
          altText: 'Волейбольный клуб FINEX',
        },
        {
          title: 'Клуб FINEX\u00A0Yoga',
          altText: 'Клуб FINEX Yoga',
          illustrateImg: Yoga
        },
    ];

    return (
      <div className="t-vetrical">
        <div className='gallery_arrow_box'>
          <SliderBtn className='swiper-slider-prev' />
          <SliderBtn arrowRight className='swiper-slider-next' />
        </div>

        <Swiper
          className='gallery_swiper t-vertical-small'
          direction="horizontal"
          loop
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            clickable: true,
            prevEl: '.swiper-slider-prev',
            nextEl: '.swiper-slider-next',
          }}
        >

          {sliderData.map((slide, index) => (
            <SwiperSlide key={index}>
              <GallerySlide
                title={slide.title}
                imageUrl={slide.imageUrl}
                illustrateImg={slide.illustrateImg}
                altText={slide.altText}
                text={slide.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
}

export default Gallery;