import { ArrowBackIos } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./Watch.scss";
const Watch = () => {
  const { movieId } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const getItem = async () => {
      try {
        const res = await axios.get(`/movie/${movieId}`, {
          headers: {
            token: JSON.parse(localStorage.getItem("user")).token,
          },
        });
        console.log(res.data);
        setItem(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getItem();
  }, [movieId]);
  return (
    <div className="watch">
      <Link to="/">
        <div className="top">
          <ArrowBackIos className="topIcon" /> Home
        </div>
      </Link>
      <video
        src={item?.video}
        className="video"
        autoPlay
        progress
        controls
        autoPlay={true}
      />
    </div>
  );
};

export default Watch;
