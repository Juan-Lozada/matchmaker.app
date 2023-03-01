import { Swiper, SwiperSlide } from "swiper/react";

import Carousel1 from '../img/Carousel1.jpg';
import Carousel2 from '../img/Carousel2.jpg';
import Carousel3 from '../img/Carousel3.jpg';

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/carousel.css";

import { EffectFade, Autoplay } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                modules={[EffectFade, Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <img src={Carousel1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Carousel2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Carousel3} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
