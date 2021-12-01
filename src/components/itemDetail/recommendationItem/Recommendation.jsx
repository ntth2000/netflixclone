import { Add, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./RecommendationItem.scss";
const Recommendation = ({ item }) => {
  return (
    <div className="recommendationItem">
      <div
        className="recommendationItem-top"
        style={{
          backgroundImage: `linear-gradient(
            -160deg,#181818 0,rgba(0,0,0,0) 40%), 
            url(${item.img})`,
        }}
      >
        <p className="recommendationItem-top-duration">{item.duration}</p>
        <div className="recommendationItem-top-play">
          <div className="recommendationItem-top-play-wrapper">
            <PlayArrow classname="recommendationItem-top-play-icon" />
          </div>
        </div>

        <p className="recommendationItem-top-title">{item.title}</p>
      </div>
      <div className="recommendationItem-bottom">
        <div className="recommendationItem-bottom-top">
          <div className="recommendationItem-bottom-top-info">
            {" "}
            <p className="recommendationItem-bottom-top-info-resolution">HD</p>
            <p className="recommendationItem-bottom-top-info-year">
              {item.year}
            </p>
          </div>
          <div className="recommendationItem-bottom-top-add">
            <span className="recommendation-bottom-top-add-wrapper">
              <Add className="recommendation-bottom-top-add-icon" />
            </span>
          </div>
        </div>
        <div className="recommendationItem-bottom-desc">
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
