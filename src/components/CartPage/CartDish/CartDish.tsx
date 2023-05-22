


const CartDish = () => {
    return (
        <div className="cart-item">

            <button className="cart-item-close">
                <img src="/icons/close.svg" alt=""  />
            </button>

            <img src="" alt="" className="cart-item-img" />
            <h2 className="cart-item-title">Легенда Норвегии - 130 г.</h2>

            <p className="cart-item-desc">
                Запеченное куриное филе, томат, айсберг, соус «Цезарь», шпинатное тесто
            </p>


            <div className="cart-item-btn-row">
                <button className="cart-item-btn">-</button>
                <button className="cart-item-btn">1</button>
                <button className="cart-item-btn">+</button>

                <h3 className="cart-item-price">
                    283 p
                </h3>
            </div>
        </div>
    )
}

export default CartDish