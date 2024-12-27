import React from 'react'
import './styles.css'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Card({ card }) {
  return (
    <div className='card-box'>

    <Swiper
        spaceBetween={15}
        slidesPerView={1}
        loop={true}
        mousewheel={true}
        cssMode={true}
        className="swiper-container"
    >
      {card.imgSrc.map((src, i) => (
        <SwiperSlide key={i}>
            <img src={src} className='card-img' />
        </SwiperSlide>
      ))}
    </Swiper>

      <div className="card-info-flex">
        <h3 className='card-title'>{card.title}</h3>
        <div className="card-rating">
            <StarRoundedIcon />
            <p>{card.rating}</p>
        </div>
      </div>
      <p style={{margin: 0, color: 'var(--font-grey'}}>{card.desc}</p>
      <p style={{margin: 0, color: 'var(--font-grey'}}>{card.date}</p>
      <p style={{margin: "0.2rem", fontSize: '1rem', color: 'var(--black'}}>
        <span style={{fontWeight: '600'}}>{card.price} </span> 
        a night
      </p>
    </div>
  )
}

export default Card
