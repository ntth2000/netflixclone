import {
  Add,
  KeyboardArrowDown,
  PlayArrow,
  ThumbDown,
  ThumbUp,
} from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./ListItem2.scss";
const Listitem = ({ item, showItem }) => {
  const [listItem, setListItem] = useState({});
  const [unitWidth, setUnitWidth] = useState($(".listItem").width());
  const [hoveredUnitWidth, setHoveredUnitWidth] = useState(
    $(".listItem-Hovered").width()
  );
  const [hoverPosition, setHoverPosition] = useState({
    left: (hoveredUnitWidth - unitWidth) / 2,
  });
  $(".listItem-Hovered").css({ left: `-${hoverPosition.left}px` });
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
    $(document).ready(function () {
      setUnitWidth($(".listItem").width());
      setHoveredUnitWidth($(".listItem-Hovered").width());
      setHoverPosition({
        left: (hoveredUnitWidth - unitWidth) / 2,
      });
    });
    console.log("unitwidth", unitWidth);
    console.log("position", hoverPosition);
  }, [item, unitWidth, $("body").width(), hoveredUnitWidth]);
  return (
    <div className="listItem">
      <img
        src={listItem?.thumbnailImg}
        alt=""
        className="listItem-thumbnailImg"
      />
      <div
        className="listItem-Hovered"
        style={{
          left: `-${hoverPosition.left}px`,
        }}
      >
        <img
          src={listItem?.thumbnailImg}
          alt=""
          className="listItem-hoveredThumbnailImg"
        />
        <Link to={`/watch/${item}`}>
          <video src={listItem?.trailer} loop autoPlay={true} muted />
        </Link>
        <div className="listItem-bottom">
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
    </div>
  );
};

export default Listitem;
