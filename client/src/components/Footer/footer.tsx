
'use client';

import React from 'react'
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

function Footer() {
  return (
    <div>
      <h1>footer</h1>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>

     
    </div>
  )
}

export default Footer