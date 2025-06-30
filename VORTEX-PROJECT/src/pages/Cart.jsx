import "../styles/cart.css";

const Cart = () => {
    return (
        <main className="cart__container">
            <div className="title">
                <h1>SHOPPING CART</h1>
            </div>
            <section className="shopping__overview">
                <section className="cards">
                    <article className="product__card">
                        <a href="./manga.html">
                            <img src="./assets/1974745929.jpg" alt="Manga cover" />
                        </a>
                        <div className="product__information">
                            <h2>SAKAMOTO DAYS - VOL.12</h2>
                            <h3>Yuuto Suzuki</h3>
                            <h4>QTY: 1</h4>
                        </div>
                        <p className="price"></p>
                    </article>
                    <article className="product__card">
                        <a href="./manga.html">
                            <img src="./assets/1974745929.jpg" alt="Manga cover" />
                        </a>
                        <div className="product__information">
                            <h2>SAKAMOTO DAYS - VOL.12</h2>
                            <h3>Yuuto Suzuki</h3>
                            <h4>QTY: 1</h4>
                        </div>
                        <p className="price"></p>
                    </article>
                    <article className="product__card">
                        <a href="./manga.html">
                            <img src="./assets/1974745929.jpg" alt="Manga cover" />
                        </a>
                        <div className="product__information">
                            <h2>SAKAMOTO DAYS - VOL.12</h2>
                            <h3>Yuuto Suzuki</h3>
                            <h4>QTY: 1</h4>
                        </div>
                        <p className="price"></p>
                    </article>
                    <article className="product__card">
                        <a href="./manga.html">
                            <img src="./assets/1974745929.jpg" alt="Manga cover" />
                        </a>
                        <div className="product__information">
                            <h2>SAKAMOTO DAYS - VOL.12</h2>
                            <h3>Yuuto Suzuki</h3>
                            <h4>QTY: 1</h4>
                        </div>
                        <p className="price"></p>
                    </article>
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
                            <p>4 ITEMS</p>
                        </article>
                    </div>
                    <article className="price">
                        <p>TOTAL: €0.00</p>
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
