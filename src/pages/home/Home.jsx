import React, { useEffect, useState } from "react";
import Feature from "../../components/feature/Feature";
import Header from "../../components/header/Header";
import List from "../../components/list/List2";
import axios from "axios";
import "./Home.scss";
import Footer from "../../components/footer/Footer";
import Itemdetail from "../../components/itemDetail/ItemDetail";
import $ from "jquery";
const Home = ({ type }) => {
  const [itemId, setItemId] = useState("");
  const showItem = (id) => {
    $("body").css({
      overflow: "hidden",
    });
    $(".modal").show();
    setItemId(id);
  };
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
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

    const getLists = async () => {
      try {
        const res = await axios.get(
          `/list${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token: JSON.parse(localStorage.getItem("user")).token,
            },
          }
        );
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getLists();
    
  }, [type, genre]);
  return (
    <React.Fragment>
      <Itemdetail id={itemId} />
      <div className="home">
        <Header />
        <Feature type={type} setGenre={setGenre} />
        <div className="listContainer">
          {lists.map((list, i) => (
            <List list={list} key={i} showItem={showItem} />
          ))}
        </div>
        <div className="home-footer-wrapper">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
