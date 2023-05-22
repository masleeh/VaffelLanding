import CartDish from "./CartDish/CartDish";

const Cart = () => {
    return (
        <div className="container">
            <section className="cart">
                <div className="cart-info">
                    <h1 className="title-h1">Информация</h1>
                    <h1 className="title-h1" style={{ marginLeft: "40%", marginTop: -10 }}>
                        о заказе
                    </h1>

                    <h4 className="cart-inp-title">Имя</h4>
                    <input type="text" className="cart-inp" />
                    <h4 className="cart-inp-title">Телефон</h4>
                    <input type="text" className="cart-inp" />
                    <h4 className="cart-inp-title">Адрес</h4>
                    <input type="text" className="cart-inp" />
                    <h4 className="cart-inp-title">Способ получения</h4>

                    <fieldset>
                        <div className="cart-inp-check-row">
                            <input type="radio" id="check1" className="cart-inp-check"  name="deliv"/>
                            <label htmlFor="check1" className="cart-inp-check-label">Доставка</label>
                        </div>

                        <div className="cart-inp-check-row">
                            <input type="radio" id="check2" className="cart-inp-check" name="deliv"/>
                            <label htmlFor="check2" className="cart-inp-check-label">Самовывоз</label>
                        </div>
                    </fieldset>

                    <h4 className="cart-inp-title">Примечание к заказу</h4>
                    <textarea className="cart-inp-textar" />

                    <button
                        className="yButton yButton-large"
                        style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            marginTop: 25
                        }}
                    >
                        Сохранить
                    </button>
                </div>

                <div className="cart-pl">
                    <h1 className="title-h1">Корзина</h1>
                    <CartDish />
                </div>
            </section>
        </div>
    );
};

export default Cart;
