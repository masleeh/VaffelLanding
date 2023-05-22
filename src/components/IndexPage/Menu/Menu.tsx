import { Link } from "react-router-dom"
import DishCard from "./DishCard/DishCard"
import { TCategories, TDishes } from "../../../types/Data";

type TMenu = {
    catLoading: boolean;
    catData: TCategories[] | undefined;
    activeCat: string;
    selectCat: (name: string) => void;
    dishesData: TDishes[],
    dishesLoading: boolean,
}

const Menu = ({catData, catLoading, activeCat, selectCat, dishesData, dishesLoading}: TMenu) => {
    return (
        <>
        <div className="menu-back-top">
            <img src="./images/back-top.svg" alt="" className="menu-back-top-img" />
        </div>

        <section className="menu">
            <div className="container">
                <h1 className="title-h1 menu-title">Меню</h1>


                {catLoading ? <div className="menu-cats-row">
                    <button className="menu-cats-item-loading"></button>
                    <button className="menu-cats-item-loading"></button>
                    <button className="menu-cats-item-loading"></button>
                    <button className="menu-cats-item-loading"></button>
                    <button className="menu-cats-item-loading"></button>
                    <button className="menu-cats-item-loading"></button>
                    <button className="menu-cats-item-loading"></button>
                </div> :
                    <div className="menu-cats-row">
                        {catData && catData!.map((category, index) => {
                            return <button 
                                key={index}
                                className={category.name === activeCat ? 
                                    "menu-cats-item menu-cats-item-selected" 
                                    : "menu-cats-item"}
                                onClick={() => selectCat(category.name)}
                                >{category.name}</button>
                        })}
                    </div>
                }

                {dishesLoading ? <div className="menu-dish-row">
                    <div>hahaha</div>
                </div> 
                    :<div className="menu-dish-row">
                        {dishesData && dishesData.map((dishItem, index) => {
                            return <DishCard 
                                key={index}
                                name={dishItem.name}
                                description={dishItem.description}
                                price={dishItem.price}
                                discountprice={dishItem.discountprice}
                                image_link={dishItem.image_link}
                                weight_big={dishItem.weight_big}
                                weight_small={dishItem.weight_small}
                                ingredient={dishItem.ingredient}
                            />
                        })}
                    </div>}

                <Link to="/delivery" className="menu-findmore">Узнайте, как происходит доставка →</Link>
            </div>
        </section>

        <div className="menu-back-bot">
            <img src="./images/back-bot.svg" alt="" className="menu-back-bot-img" />
        </div>
        </>
    )
}

export default Menu