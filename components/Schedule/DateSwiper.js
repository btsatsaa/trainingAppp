// components/DateSwiper.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const DateSwiper = ({ dates, onDateSelect }) => {
  
  return (
    <Swiper spaceBetween={20} slidesPerView={3}>
      {dates.map((date) => (
        <SwiperSlide key={date} onClick={() => onDateSelect(date)}>
          {date}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DateSwiper;
