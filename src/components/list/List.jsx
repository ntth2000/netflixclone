import ListItem from "../listItem/ListItem2";
import React, { useRef, useState, useEffect } from "react";
import "./List.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
const List = ({ list, showItem }) => {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [unit, setUnit] = useState(
    (document.body.clientWidth -
      document.body.clientWidth * 0.08 -
      (slidesPerView - 1) * 5) /
      slidesPerView
  );
  useEffect(() => {
    if (document.body.clientWidth >= 992) {
      setSlidesPerView(5);
    } else if (document.body.clientWidth >= 768) {
      setSlidesPerView(4);
    } else if (document.body.clientWidth >= 576) {
      setSlidesPerView(3);
    }
  }, [document.body.clientWidth]);
  // const unit =
  //   (document.body.clientWidth -
  //     document.body.clientWidth * 0.08 -
  //     (slidesPerView - 1) * 5) /
  //   slidesPerView;
  const sliderRef = useRef();
  const [slideNumber, setslideNumber] = useState(0);
  const sliderHandler = (direction) => {
    let distanceX = sliderRef.current.getBoundingClientRect().x - 50;
    // document.body.clientWidth * 0.08;
    if (direction === "left" && slideNumber > 0) {
      setslideNumber(slideNumber - 1);
      sliderRef.current.style.transform = `translateX(${
        (+unit + 5) * slidesPerView + distanceX
      }px)`;
    }
    if (
      direction === "right" &&
      slideNumber < list.content.length / slidesPerView - 1
    ) {
      setslideNumber(slideNumber + 1);
      sliderRef.current.style.transform = `translateX(${
        -(unit + 5) * slidesPerView + distanceX
      }px)`;
    }
  };
  return (
    <div className="list">
      <p className="title">{list.title}</p>
      <div className="wrapper">
        {slideNumber > 0 && (
          <div
            className="back slider-arrow"
            onClick={() => sliderHandler("left")}
          >
            <ArrowBackIosOutlined className="arrow-icon" />
          </div>
        )}
        <div className="slider" ref={sliderRef}>
          {list.content.map((item, i) => (
            <ListItem
              index={i}
              item={item}
              key={item}
              showItem={showItem}
              slidesPerView
              unit
            />
          ))}
        </div>
        {slideNumber < list.content.length / 5 - 1 && (
          <div
            className="forward slider-arrow"
            onClick={() => sliderHandler("right")}
          >
            <ArrowForwardIosOutlined className="arrow-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
