import React, { useEffect, useState } from "react";
import "../styles/profile.css";

import manga1 from "../assets/images/kaiju.png";
import manga2 from "../assets/images/myhero.png";
import manga3 from "../assets/images/onepiece.png";
import manga4 from "../assets/images/sakamotodays.png";
import manga5 from "../assets/images/yozakura.png";

const allMangas = {
  1: { title: "Kaiju", src: manga1 },
  2: { title: "My Hero", src: manga2 },
  3: { title: "One Piece", src: manga3 },
  4: { title: "Sakamoto Days", src: manga4 },
  5: { title: "Yozakura", src: manga5 },
};

const Profile = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    const validFavorites = stored.filter((id) => allMangas[id]); // filter foute ID's
    setFavorites(validFavorites);
  }, []);

  return (
    <main className="profile__container">
      <section className="profile__content">
        <h2 className="profile__user-title">My Favorite Manga</h2>
        <div className="manga-gallery">
          {favorites.length === 0 ? (
            <p>You haven't favorited anything yet.</p>
          ) : (
            favorites.map((id) => {
              const manga = allMangas[id];
              if (!manga) return null; // veiligheid
              return (
                <div key={id} className="manga-item-box">
                  <img src={manga.src} alt={manga.title} className="manga-img" />
                  <p>{manga.title}</p>
                </div>
              );
            })
          )}
        </div>
      </section>
    </main>
  );
};

export default Profile;
