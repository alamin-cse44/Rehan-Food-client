import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

// import { Rating } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";

import quote from '../../../assets/home/quote.png';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/testimonial")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="my-20">
      <SectionTitle
        heading="TESTIMONIALS"
        subHeading="---What Our Clients Say---"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col gap-4 items-center mx-24 my-16">
              {/* <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly /> */}
              <img src={quote} alt="" />
              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
