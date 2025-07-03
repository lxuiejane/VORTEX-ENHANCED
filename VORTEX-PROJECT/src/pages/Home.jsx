import React, { useState, useEffect } from "react";
import "../styles/home.css";

import manga1 from "../assets/images/kaiju.png";
import manga2 from "../assets/images/myhero.png";
import manga3 from "../assets/images/onepiece.png";
import manga4 from "../assets/images/sakamotodays.png";
import manga5 from "../assets/images/yozakura.png";

const mangas = [
  { id: 1, title: "Kaiju", src: manga1 },
  { id: 2, title: "My Hero", src: manga2 },
  { id: 3, title: "One Piece", src: manga3 },
  { id: 4, title: "Sakamoto Days", src: manga4 },
  { id: 5, title: "Yozakura", src: manga5 },
];

const Home = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const toggleFavorite = (id) => {
    let updatedFavorites;
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((fav) => fav !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    // 👉 Geen redirect meer naar /profile
  };

  return (
    <main className="profile__container">
      <section className="homepage__banner-container"></section>

      <section className="homepage__welcome text"></section>

      <section className="new-releases">
        <h2>New Releases</h2>
      </section>

      <section className="manga-gallery">
        {mangas.map((manga) => (
          <div
            key={manga.id}
            className="manga-item-box"
            onClick={() => toggleFavorite(manga.id)}
          >
            <img src={manga.src} alt={manga.title} className="manga-img" />
            <span className="heart">
              {favorites.includes(manga.id) ? "❤️" : "🤍"}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
