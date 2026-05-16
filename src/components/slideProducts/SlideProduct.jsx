import React from "react";
import Product from "./Product";
import "../slideProducts/SlideProduct.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

import { Navigation } from "swiper/modules";

function SlideProduct({ data, title }) {
  // console.log(data);

  return (
    <div className="slide_products slide">
      <div className="container">
        <div className="top_slide">
          <h2>{title} </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
            cum.
          </p>
        </div>
        <Swiper
          loop={data.length > 5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={10}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            576: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 3,
            },

            1024: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Product item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideProduct;
