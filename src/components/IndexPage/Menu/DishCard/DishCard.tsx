import { useState } from "react";
import { TCartItem } from "../../../../types/Data";
import { useAppDispatch } from "../../../../hooks/redux";

export interface IDishCardProps {
    id?: number;
    name?: string;
    description?: string;
    ingredient?: "Рыба" | "Курица" | "Свинина" | "Не выбрано";
    price?: number;
    discountprice?: number;
    weight_big?: number;
    weight_small?: number;
    image_link?: string;
    favState: number[];
    addToFav: (dishData: TCartItem) => void;
    removeFromFav: (dishId: number) => void;
    addToCart: (dishData: TCartItem) => void;
}

const DishCard = ({
    id,
    name,
    description,
    ingredient,
    price,
    discountprice,
    weight_big,
    weight_small,
    image_link,
    favState,
    addToFav,
    removeFromFav,
    addToCart
}: IDishCardProps) => {
    const getColorClass = (): string => {
        switch (ingredient) {
            case "Свинина":
                return "light-violet";
            case "Курица":
                return "grand-yellow";
            case "Рыба":
                return "light-blue";
            default:
                return "";
        }
    };

    const [selWeight, setSelWeight] = useState(weight_big)

    const handleFav = () => {
        if (!favState.includes(id!)) {
            addToFav({
                id: id!,
                name: name!,
                description: description!,
                weight: selWeight!,
                price: discountprice! || price!,
                image_link: image_link!,
            })
        } else {
            removeFromFav(id!)
        }
    }

    const handleAddToCart = () => {
        addToCart({
            id: id!,
            name: name!,
            weight: selWeight!,
            price: discountprice === 0 ? price! : discountprice!,
            image_link: image_link!,
            quantity: 1,
            description: description!
        })
    }

    return (
        <div className="dish-card">
            {ingredient && ingredient !== "Не выбрано" && (
                <h3
                    className={["dish-card-ingredient", getColorClass()].join(
                        " "
                    )}
                >
                    {ingredient}
                </h3>
            )}
            <button className="dish-card-like-cont" onClick={() => handleFav()}>
                <img alt="" src={favState.includes(id!) ? './icons/like.svg' : "./images/unlike.svg"} />
            </button>

            <div className="dish-card-image-cont">
                <img alt={name} src={image_link} className="dish-card-image" />
            </div>

            <h2 className="dish-card-title">{name}</h2>
            <p className="dish-card-description">{description}</p>

            <div className="dish-card-grid">
                <button className="dish-card-weight" onClick={() => setSelWeight(weight_big)}>{weight_big} г</button>
                {discountprice === 0 ? <div></div> : <h4 className="dish-card-prevprice">{price} р</h4>}
                {weight_small === 0 ? <div></div> : <button className="dish-card-weight" onClick={() => setSelWeight(weight_small)}>{weight_small} г</button>}
                <button className="dish-card-buy" onClick={() => handleAddToCart()}>
                    {discountprice === 0 ? price : discountprice} р <img alt="" src="" />
                    <img alt="" src="/icons/cart.svg" className="dish-card-icon" />
                </button>
            </div>
        </div>
    );
};

export default DishCard;
