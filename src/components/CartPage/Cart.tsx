import { Link } from "react-router-dom";
import { ICart } from "../../redux/services/cartService";
import { TCartItem } from "../../types/Data";
import CartDish from "./CartDish/CartDish";

type TCart = {
    favState: ICart;
    handleRemove: (type: "cart" | "fav", id: number) => void;
    increaseItemCart: (index: number) => void;
    decreaseItemCart: (index: number) => void;
    addToCart: (dishData: TCartItem) => void;
};

const Cart = ({
    favState,
    handleRemove,
    decreaseItemCart,
    increaseItemCart,
    addToCart,
}: TCart) => {
    return (
        <div className="container">
            <section className="cart">
                <div className="cart-info">
                    <h1 className="title-h1">Информация</h1>
                    <h1
                        className="title-h1"
                        style={{ marginLeft: "40%", marginTop: -10 }}
                    >
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
                            <input
                                type="radio"
                                id="check1"
                                className="cart-inp-check"
                                name="deliv"
                            />
                            <label
                                htmlFor="check1"
                                className="cart-inp-check-label"
                            >
                                Доставка
                            </label>
                        </div>

                        <div className="cart-inp-check-row">
                            <input
                                type="radio"
                                id="check2"
                                className="cart-inp-check"
                                name="deliv"
                            />
                            <label
                                htmlFor="check2"
                                className="cart-inp-check-label"
                            >
                                Самовывоз
                            </label>
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
                            marginTop: 25,
                        }}
                    >
                        Сохранить
                    </button>
                </div>

                <div className="cart-pl">
                    <h1 className="title-h1">Корзина</h1>
                    {favState.cart.map((cartItem, index) => {
                        return (
                            <CartDish
                                key={index}
                                type="cart"
                                id={cartItem.id}
                                description={cartItem.description}
                                name={cartItem.name}
                                image_link={cartItem.image_link}
                                weight={cartItem.weight}
                                price={cartItem.price}
                                quantity={cartItem.quantity}
                                handleRemove={handleRemove}
                                index={index}
                                decreaseItemCart={decreaseItemCart}
                                increaseItemCart={increaseItemCart}
                                addToCart={addToCart}
                            />
                        );
                    })}

                    {favState.cart.length < 1 && (
                        <>
                            <h3 className="cart-empty"> Ваша корзина пуста</h3>
                            <Link to="/">
                                <button
                                    className="yButton yButton-small"
                                    style={{ marginTop: 20 }}
                                >
                                    Перейти в меню
                                </button>
                            </Link>
                        </>
                    )}

                    {favState.cart.length > 0 && (
                        <>
                            <div className="cart-pl-row">
                                <h3 className="cart-inp-title">Сумма заказа</h3>
                                <h3 className="cart-inp-title">
                                    {favState.cart.reduce(
                                        (a, b) => a + b.price * b.quantity!,
                                        0
                                    )}{" "}
                                    р
                                </h3>
                            </div>

                            <button
                                className="yButton yButton-large"
                                style={{ marginTop: 40 }}
                            >
                                Оформить заказ
                            </button>
                        </>
                    )}

                    <h3 className="title-h1" style={{ marginTop: 40 }}>
                        Избранное
                    </h3>
                    {favState.fav.map((cartItem, index) => {
                        return (
                            <CartDish
                                key={index}
                                type="fav"
                                id={cartItem.id}
                                description={cartItem.description}
                                name={cartItem.name}
                                image_link={cartItem.image_link}
                                weight={cartItem.weight}
                                price={cartItem.price}
                                handleRemove={handleRemove}
                                index={index}
                                decreaseItemCart={decreaseItemCart}
                                increaseItemCart={increaseItemCart}
                                addToCart={addToCart}
                            />
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Cart;
