import ListItem from "../listItem/ListItem2";
import React from "react";
import "./List2.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Import Swiper styles
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const List = ({ list, showItem }) => {
  return (
    <div className="list">
      <div className="list-top">
        <p className="title">{list.title}</p>
      </div>
      <div className="wrapper">
        <Swiper
          slidesPerView={2}
          slidesPerGroup={2}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          //loop={true}
          pagination={{ type: "bullets" }}
          spaceBetween={5}
          className="mySwiper"
          speed={1000}
          breakpoints={{
            500: {
              slidesPerGroup: 3,
              slidesPerView: 3,
            },
            768: {
              slidesPerGroup: 4,
              slidesPerView: 4,
            },
            992: {
              slidesPerGroup: 5,
              slidesPerView: 5,
            },
          }}
        >
          {list.content.map((item, i) => (
            <SwiperSlide>
              {" "}
              <ListItem index={i} item={item} key={item} showItem={showItem} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev">
            <ArrowBackIosOutlined className="swiper-button-icon" />
          </div>
          <div className="swiper-button-next">
            <ArrowForwardIosOutlined className="swiper-button-icon" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default List;
