import { Add, PlayArrow } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { TV_GENRES, MOVIE_GENRES } from "../../movieGenres";
import axios from "axios";
import "./Feature.scss";
import { Link } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";
const Feature = ({ type, setGenre }) => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getRandomMovie = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/movie/random", {
          headers: {
            token: JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setContent(res.data[0]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getRandomMovie();
  }, []);

  return (
    <div
      className="feature"
      style={{
        backgroundImage: `linear-gradient(
          0deg,var(--main-color) 0,rgba(0,0,0,0) 85%),
        url(${content.img})`,
      }}
    >
      {loading && (
        <div className="feature-loadingspinner">
          <LoadingSpinner />
        </div>
      )}
      {!loading && (
        <React.Fragment>
          {" "}
          {type && (
            <div className="genre">
              <p className="genreLabel">
                {type === "movie" ? "Movies" : "Series"}
              </p>
              <select
                className="genreSelect"
                onChange={(e) => setGenre(e.target.value)}
              >
                <option className="genreOption">Genre</option>
                {type === "movie" &&
                  MOVIE_GENRES.map((genre) => (
                    <option className="genreOption" value={genre.name}>
                      {genre.name}
                    </option>
                  ))}
                {type === "series" &&
                  TV_GENRES.map((genre) => (
                    <option className="genreOption" value={genre.name}>
                      {genre.name}
                    </option>
                  ))}
              </select>
            </div>
          )}
          <div className="infor">
            {/* <img src={content.titleImg} className="title" /> */}
            <h1 className="title">{content.title}</h1>
            <p className="desc">{content.desc}</p>
            <div className="buttons">
              <Link className="link" to={`/watch/${content._id}`}>
                <button className="play-button">
                  <PlayArrow className="play-button-icon" /> Play
                </button>
              </Link>
              <button className="add-button">
                <Add className="add-button-icon" /> My List
              </button>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Feature;
