import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ItemDetail.scss";
import { Add, Close, PlayArrow, ThumbDown, ThumbUp } from "@material-ui/icons";
import Recommendation from "./recommendationItem/Recommendation";
import Loadingspinner from "../UI/LoadingSpinner";
const Itemdetail = ({ id }) => {
  const [item, setItem] = useState({});
  const [recommendationList, setRecommendationList] = useState([]);
  const [loadingListItem, setLoadingListItem] = useState(false);
  const [loadingRecommendation, setLoadingRecommendation] = useState(false);
  useEffect(() => {
    const getListItem = async () => {
      setLoadingListItem(true);
      try {
        const res = await axios.get(`/movie/${id}`, {
          headers: {
            token: JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setItem(res.data);
        setLoadingListItem(false);
      } catch (error) {
        setLoadingListItem(false);
        console.log(error);
      }
    };
    getListItem();
    const getRecommendation = async () => {
      setLoadingRecommendation(true);
      try {
        const res = await axios.get(`/movie/recommendation`, {
          headers: {
            token: JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setRecommendationList(res.data);
        setLoadingRecommendation(false);
      } catch (err) {
        console.log(err);
        setLoadingRecommendation(false);
      }
    };
    getRecommendation();
  }, [id]);
  return (
    <div className="modal">
      <div className="modal-close-wrapper">
        <span className="modal-close-span">
          <Close className="modal-close-icon" />
        </span>
      </div>
      <div className="modal-content">
        <div className="itemDetail">
          {loadingListItem ? (
            <div className="itemDetail-loadingspinner-wrapper">
              <Loadingspinner />
            </div>
          ) : (
            <React.Fragment>
              <div
                className="itemDetail-top"
                style={{
                  backgroundImage: `linear-gradient(
          0deg,#181818 0,rgba(0,0,0,0) 70%),
        url(${item?.img})`,
                }}
              >
                <div className="itemDetail-top-bottom">
                  <h2 className="itemDetail-top-bottom-title">{item?.title}</h2>
                  <div className="itemDetail-top-icons-wrapper">
                    <div className="itemDetail-top-icon-play-wrapper">
                      <PlayArrow className="itemDetail-top-icon-play" /> Play
                    </div>
                    <div className="itemDetail-top-icon-wrapper">
                      <Add className="itemDetail-top-icon" />
                    </div>
                    <div className="itemDetail-top-icon-wrapper">
                      <ThumbUp className="itemDetail-top-icon" />
                    </div>
                    <div className="itemDetail-top-icon-wrapper">
                      <ThumbDown className="itemDetail-top-icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="itemDetail-info">
                <div className="itemDetail-info-left">
                  <div className="itemDetail-info-left-top">
                    <div className="itemDetail-info-left-top-item">
                      {item?.year}
                    </div>
                    <div className="itemDetail-info-left-top-item resolution">
                      HD
                    </div>
                    <div className="itemDetail-info-left-top-item">
                      {item?.duration}
                    </div>
                  </div>
                  <div className="itemDetail-info-left-bottom">
                    <p>{item?.desc}</p>
                  </div>
                </div>
                <div className="itemDetail-info-right">
                  <div className="itemDetail-info-right-item">
                    <p>
                      Genres:
                      <b> {item?.genre?.map((each) => each.name).join(", ")}</b>
                    </p>
                  </div>
                  <div className="itemDetail-info-right-item">
                    <p>
                      Countries:<b> {item?.countries?.join(", ")}</b>
                    </p>
                  </div>
                  <div className="itemDetail-info-right-item">
                    <p>
                      {item?.languages?.length === 1 ? "Language" : "Languages"}:
                      <b> {item?.languages?.join(", ")}</b>
                    </p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
          {loadingRecommendation ? (
            <div className="itemDetail-loadingspinner-wrapper">
              <Loadingspinner />
            </div>
          ) : (
            <div className="itemDetail-bottom">
              <h2>More Like This</h2>
              <div className="itemDetail-bottom-wrapper">
                {recommendationList?.map((recommendation) => (
                  <Recommendation item={recommendation} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Itemdetail;
