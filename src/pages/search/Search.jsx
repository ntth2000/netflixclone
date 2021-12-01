import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Search.scss";
import ListItem from "../../components/listItem/ListItem2";
import Itemdetail from "../../components/itemDetail/ItemDetail";
import Loadingspinner from "../../components/UI/LoadingSpinner";
import $ from "jquery";
const Search = () => {
  const location = useLocation();
  const [itemId, setItemId] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const showItem = (id) => {
    $("body").css({
      overflow: "hidden",
    });
    $(".modal").show();
    setItemId(id);
  };
  useEffect(() => {
    $(window).ready(function () {
      $(".modal").click(function () {
        $("body").css({ overflow: "auto" });
        $(this).hide();
        $(".modal-content").click(function (event) {
          event.preventDefault();
          event.stopPropagation();
        });
      });
    });
    const search = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/movie/search${location.search}`, {
          headers: {
            token: JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setSearchResults(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    search();
  }, [location.search]);
  return (
    <React.Fragment>
      <Itemdetail id={itemId} />
      <div className="searchPage">
        <Header />
        <div className="searchPageContainer">
          {loading && (
            <div className="searchPage-Loadingspinner">
              <Loadingspinner />
            </div>
          )}
          {!loading && (
            <React.Fragment>
              {searchResults.length === 0 && (
                <div className="searchpage-notfound">
                  <div className="searchpage-notfound-wrapper">
                    <p>
                      Your search for "{location.search.slice(3)}" did not have
                      any matches.
                    </p>
                    <p>Suggestions:</p>
                    <p>
                      <ul>
                        <li>Try different keywords</li>
                        <li>Looking for a movie for TV show</li>
                        <li>
                          Try using a movie, TV show title, an actor or director
                        </li>
                        <li>
                          Try a genre, like comedy, romance, sports, or drama
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              )}
              {searchResults.length > 0 && (
                <div className="searchpage-found">
                  <h1 className="searchpage-found-title">
                    Search results for "{location.search.slice(3)}"
                  </h1>
                  <div className="searchpage-found-wrapper">
                    {searchResults.map((item, i) => (
                      <ListItem
                        index={i}
                        item={item._id}
                        key={item._id}
                        showItem={showItem}
                      />
                    ))}
                  </div>
                </div>
              )}
            </React.Fragment>
          )}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Search;
