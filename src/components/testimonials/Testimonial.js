import React from 'react';
import "./Testimonial.css";
import Image1 from "../../assets/avatar-1.svg";
import Image3 from "../../assets/avatar-3.svg";
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
      id: 1,
      image: Image1,
      title: "Mukesh Kaswan",
      subtitle: "Graphic designer at IKGPTU",
      comment:
        "I enjoy working with the him and learn so much. He make the process fun and interesting. Good luck!👍",
    },
    {
      id: 2,
      image: Image3,
      title: "Ranjeet Yadav",
      subtitle: "Coding Enthusiast",
      comment:
        "The quality of work he delivers is totally fantastic. Will see you very early👍",
    },
];
  
const Testimonial = () => {
    return (
        <section className="testimonials container section">
            <h2 className="section__title">Clients & Reviews</h2>

            <Swiper className="testimonials__container grid"
            modules={[ Pagination ]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            >
                {data.map(({id, image, title, subtitle, comment}) => {
                    return (
                        <SwiperSlide className="testimonial__item" key={id}>
                            <div className="thumb">
                                <img src={image} alt="image" />
                            </div>
                            <h3 className="testimonials__title">{title}</h3>
                            <span className="subtitle">{subtitle}</span>
                            <div className="comment">{comment}</div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonial
