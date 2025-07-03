import React, { useState } from "react";
import "../styles/cart.css";

// ✅ Import image (DO THIS instead of using a string path in the object)
import sakamotoCover from "../assets/images/sakamotodays.png";

// ✅ Use imported image variable inside the array
const initialProducts = [
    {
        id: 1,
        title: "SAKAMOTO DAYS - VOL.12",
        author: "Yuuto Suzuki - 鈴木祐斗",
        qty: 1,
        price: 9.99,
        imgSrc: sakamotoCover,
    },
    {
        id: 2,
        title: "SAKAMOTO DAYS - VOL.12",
        author: "Yuuto Suzuki - 鈴木祐斗",
        qty: 1,
        price: 9.99,
        imgSrc: sakamotoCover,
    },
    {
        id: 3,
        title: "SAKAMOTO DAYS - VOL.12",
        author: "Yuuto Suzuki - 鈴木祐斗",
        qty: 1,
        price: 9.99,
        imgSrc: sakamotoCover,
    },
    {
        id: 4,
        title: "SAKAMOTO DAYS - VOL.12",
        author: "Yuuto Suzuki - 鈴木祐斗",
        qty: 1,
        price: 9.99,
        imgSrc: sakamotoCover,
    },
];

const Cart = () => {
    const [products, setProducts] = useState(initialProducts);

    const removeProduct = (id) => {
        setProducts(products.filter((p) => p.id !== id));
    };

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
                <section className="product__overlay">
                    <article className="product__overview">
                        <div className="title__overview">
                            <div className="line"></div>
                            <h2>ORDER OVERVIEW</h2>
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


                    </article>
                    <section className="priceTotal">
                        <div className="divider"></div>
                        <p>TOTAL: €{totalPrice.toFixed(2)}</p>
                    </section>

                    <article className="submit__button">
                        <p>PURCHASE NOW</p>
                    </article>
                </section>
            </section>
        </main>
    );
};

export default Cart;
