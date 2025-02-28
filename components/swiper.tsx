"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Product {
  name: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Ferilac-XT",
    image:
      "https://www.manlacpharma.com/wp-content/uploads/2021/03/IMG_20210309_164635.jpg",
  },
  {
    name: "Lycron-L",
    image:
      "https://www.manlacpharma.com/wp-content/uploads/2021/03/IMG_20210309_164635.jpg",
  },
  {
    name: "Enzygant",
    image:
      "https://www.manlacpharma.com/wp-content/uploads/2021/03/IMG_20210309_164635.jpg",
  },
  {
    name: "Maplex",
    image:
      "https://www.manlacpharma.com/wp-content/uploads/2021/03/IMG_20210309_164635.jpg",
  },
  {
    name: "Maplex",
    image:
      "https://www.manlacpharma.com/wp-content/uploads/2021/03/IMG_20210309_164635.jpg",
  },
];

const SwiperComp = () => {
  return (
    <>
      {products && products.length ? (
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // Delay between slides (in ms)
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          loop={true} // Infinite loop
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain w-full"
              />
              <p className="text-lg font-semibold mt-3">{product.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </>
  );
};

export default SwiperComp;
