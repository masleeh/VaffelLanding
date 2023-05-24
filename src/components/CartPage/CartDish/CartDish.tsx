import { TCartItem } from "../../../types/Data";

const CartDish = ({
    id,
    name,
    description,
    weight,
    quantity = 1,
    price,
    image_link,
    type,
    handleRemove,
    index,
    decreaseItemCart,
    increaseItemCart,
    addToCart
}: TCartItem & {
    type: "cart" | "fav";
    handleRemove: (type: "cart" | "fav", id: number) => void;
    index: number;
    increaseItemCart: (index: number) => void;
    decreaseItemCart: (index: number) => void;
    addToCart: (dishData: TCartItem) => void;
}) => {
    return (
        <div className="cart-item">
            <button
                className="cart-item-close"
                onClick={() => handleRemove(type, id!)}
            >
                <img src="/icons/close.svg" alt="" />
            </button>

            <div className="cart-item-img-cont">
                <img src={image_link} alt="" className="cart-item-img" />
            </div>
            <h2 className="cart-item-title">
                {name} {weight && ` - ${weight} г`}
            </h2>

            <p className="cart-item-desc">{description}</p>

            <div className="cart-item-btn-row">
                {type === "cart" && (
                    <>
                        <button
                            className="cart-item-btn"
                            onClick={() => decreaseItemCart(index)}
                        >
                            -
                        </button>
                        <button className="cart-item-btn">{quantity}</button>
                        <button className="cart-item-btn" onClick={() => increaseItemCart(index)}>+</button>
                    </>
                )}

                <h3 className="cart-item-price">{price * quantity} р</h3>

                {type === "fav" && (
                    <button style={{ marginLeft: 20 }} onClick={() => addToCart({id, name, price, description, image_link, weight, quantity: 1})}>
                        <img alt="" src="/icons/cart.svg" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default CartDish;
