import {
  Add,
  KeyboardArrowDown,
  PlayArrow,
  ThumbDown,
  ThumbUp,
} from "@material-ui/icons";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ListItem.scss";
const Listitem = ({ item, index, showItem }) => {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [unitWidth, setUnitWidth] = useState(
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
    setUnitWidth(
      (document.body.clientWidth -
        document.body.clientWidth * 0.08 -
        (slidesPerView - 1) * 5) /
        slidesPerView
    );
    console.log("slidesPerView", slidesPerView);
    console.log("unitwidth", unitWidth);
  }, [document.body.clientWidth]);
  console.log(document.body.clientWidth);

  const [isHovered, setisHovered] = useState(false);
  const [listItem, setListItem] = useState({});

  useEffect(() => {
    const getListItem = async () => {
      try {
        const res = await axios.get(`/movie/${item}`, {
          headers: {
            token: JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setListItem(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getListItem();
  }, [item]);

  const leftPosition = (325 - unitWidth) / 2;
  const topPosition = (340 - unitWidth / 1.7) / 2;

  return (
    <div
      className="listItem"
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      //style={{ left: isHovered ? index * unitWidth : 0 }}
      style={{ width: `${unitWidth}px` }}
    >
      <img
        src={listItem?.thumbnailImg}
        alt=""
        className="listItem-thumbnailImg"
      />
      {isHovered && (
        <div
          className="listItem-Hovered"
          style={{ left: `-${leftPosition}px`, top: `-${topPosition}px` }}
        >
          <img
            src={listItem?.thumbnailImg}
            alt=""
            className="listItem-hoveredThumbnailImg"
          />
          <Link to={`/watch/${item}`}>
            <video src={listItem?.trailer} loop autoPlay={true} muted />
          </Link>
          <div className="listItem-buttom">
            <div className="listItem-icons">
              <div className="listItem-icons-left">
                <Link to={`/watch/${item}`}>
                  <PlayArrow className="listItem-icon play" />
                </Link>
                <Add className="listItem-icon" />
                <ThumbUp className="listItem-icon" />
                <ThumbDown className="listItem-icon" />
              </div>
              <div className="listItem-icons-right">
                <KeyboardArrowDown
                  className="listItem-icon"
                  onClick={() => showItem(item)}
                />
              </div>
            </div>
            <div className="listItem-infor">
              <span className="listItem-time">{listItem?.duration}</span>
              <span className="listItem-resolution">HD</span>
            </div>
            <div className="listItem-desc">
              {listItem?.genre
                ? listItem?.genre.map(
                    (genreName, i) =>
                      i <= 2 && (
                        <React.Fragment>
                          <span className="listItem-genreName">
                            {genreName.name}
                          </span>
                          <span className="listItem-genreName-dot"></span>
                        </React.Fragment>
                      )
                  )
                : []}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Listitem;
