import React, { useState } from "react";
import "../styles/cart.css";

const initialProducts = [
  {
    id: 1,
    title: "SAKAMOTO DAYS - VOL.12",
    author: "Yuuto Suzuki",
    qty: 1,
    price: 9.99,
    imgSrc: "/assets/sakamoto.png",
  },
  {
    id: 2,
    title: "SAKAMOTO DAYS - VOL.12",
    author: "Yuuto Suzuki",
    qty: 1,
    price: 9.99,
    imgSrc: "/assets/sakamoto.png",
  },
  {
    id: 3,
    title: "SAKAMOTO DAYS - VOL.12",
    author: "Yuuto Suzuki",
    qty: 1,
    price: 9.99,
    imgSrc: "/assets/sakamoto.png",
  },
  {
    id: 4,
    title: "SAKAMOTO DAYS - VOL.12",
    author: "Yuuto Suzuki",
    qty: 1,
    price: 9.99,
    imgSrc: "/assets/sakamoto.png",
  },
];

const Cart = () => {
  const [products, setProducts] = useState(initialProducts);

  // Verwijder een product op id
  const removeProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Bereken totaalprijs
  const totalPrice = products.reduce(
    (sum, product) => sum + (product.price ?? 0) * (product.qty ?? 1),
    0
  );

  return (
    <main className="cart__container">
      <div className="title">
        <h1>SHOPPING CART</h1>
      </div>

      <section className="shopping__overview">
        <section className="cards">
          {products.map(({ id, title, author, qty, price, imgSrc }) => (
            <article className="product__card" key={id} style={{ position: "relative" }}>
              <button
                className="remove-button"
                onClick={() => removeProduct(id)}
                aria-label="Remove product"
              >
                &#10006;
              </button>
              <a href="./manga.html">
                <img src={imgSrc} alt="Manga cover" />
              </a>
              <div className="product__information">
                <h2>{title}</h2>
                <h3>{author}</h3>
                <h4>QTY: {qty}</h4>
              </div>
              <p className="price">€{price.toFixed(2)}</p>
            </article>
          ))}
        </section>

        <section className="product__overview">
          <div className="title__overview">
            <div className="line"></div>
            <h2>Order overview</h2>
            <div className="line__two"></div>
          </div>

          <div className="card__information">
            <article className="buyer__information">
              <p>USER'S FIRST + INITIALS + SURNAME.</p>
            </article>
            <article className="buyer__information">
              <p>USER’S ADRES + POSTAL CODE + CITY.</p>
            </article>
            <article className="buyer__information">
              <p>{products.length} ITEMS</p>
            </article>
          </div>

          <article className="price">
            <p>TOTAL: €{totalPrice.toFixed(2)}</p>
            <div className="line3"></div>
          </article>

          <article className="submit__button">
            <p>PURCHASE NOW</p>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Cart;
