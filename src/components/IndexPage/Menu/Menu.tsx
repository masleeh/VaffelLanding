import { Link } from "react-router-dom"
import DishCard from "./DishCard/DishCard"



const Menu = () => {
    return (
        <>
        <div className="menu-back-top">
            <img src="./public/images/back-top.svg" alt="" className="menu-back-top-img" />
        </div>

        <section className="menu">
            <div className="container">
                <h1 className="title-h1 menu-title">Меню</h1>

                <div className="menu-cats-row">
                    <button className="menu-cats-item menu-cats-item-selected">Популярное</button>
                    <button className="menu-cats-item">Завтраки</button>
                    <button className="menu-cats-item">Наборы</button>
                    <button className="menu-cats-item">Сырные и картофельные вафли</button>
                    <button className="menu-cats-item">Шпинатные вафли</button>
                    <button className="menu-cats-item">Томатные вафли</button>
                    <button className="menu-cats-item">Сладкие вафли</button>
                    <button className="menu-cats-item">Салаты</button>
                    <button className="menu-cats-item">Супы</button>
                    <button className="menu-cats-item">Напитки</button>
                    <button className="menu-cats-item">Подарочные сертификаты</button>
                </div>

                <div className="menu-dish-row">
                    <DishCard 

                    />
                </div>

                <Link to="/delivery" className="menu-findmore">Узнайте, как происходит доставка →</Link>
            </div>
        </section>

        <div className="menu-back-bot">
            <img src="./public/images/back-bot.svg" alt="" className="menu-back-bot-img" />
        </div>
        </>
    )
}

export default Menu