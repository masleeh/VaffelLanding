
interface IDishCardProps {
    name?: string,
    description?: string,
    ingredient?: "Рыба" | "Курица" | "Свинина",
    price?: number,
    discountprice?: number,
    weight_big?: number,
    weight_small?: number,
    image_link?: string
}

const DishCard = ({name, description, ingredient, price, discountprice, weight_big, weight_small, image_link}:IDishCardProps) => {
    const getColorClass = ():string => {
        switch (ingredient) {
            case "Свинина": return "light-violet"
            case "Курица": return "grand-yellow"
            case "Рыба": return "light-blue"
            default: return ""
        }
    }
    
    return (
        <div className='dish-card'>
            
            {ingredient && <h3 className={["dish-card-ingredient", getColorClass()].join(" ")}>{ingredient}</h3>}
            <button className="dish-card-like-cont">
                <img alt="" src="./images/unlike.svg"/>
            </button>

            <div className="dish-card-image-cont">
                <img alt={name} src={image_link} className="dish-card-image"/>
            </div>

            <h2 className="dish-card-title">{name}</h2>
            <p className="dish-card-description">{description}</p>

            <div className="dish-card-grid">
                <button className="dish-card-weight">{weight_big} г</button>
                <h4 className="dish-card-prevprice">{price} р</h4>
                <button className="dish-card-weight">{weight_small} г</button>
                <button className="dish-card-buy">{discountprice} р <img alt="" src=""/></button>
            </div>
        </div>  
    )
}

export default DishCard