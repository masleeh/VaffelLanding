
interface IDishCardProps {
    title?: string,
    description?: string,
    ingredient?: "Рыба" | "Курица" | "Свинина",
    price?: number,
    discountprice?: number,
    weight_big?: number,
    weight_small?: number,
    image_link?: string
}

const DishCard = ({title = "Легенда Норвегии", description = "Лосось, сливочный сыр, огурец, руккола, шпинатное тесто", ingredient = "Свинина", price = 315, discountprice = 283, weight_big = 260, weight_small = 130, image_link = "https://firebasestorage.googleapis.com/v0/b/test-7978c.appspot.com/o/images%2F%D0%A5%D1%8D%D0%B9%20%D0%A5%D0%B0%D0%BD%D0%B8?alt=media&token=97e77ef8-ba44-41b0-8758-1c28525b30c6"}:IDishCardProps) => {
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
                <img alt={title} src={image_link} className="dish-card-image"/>
            </div>

            <h2 className="dish-card-title">{title}</h2>
            <p className="dish-card-description">{description}</p>

            <div className="dish-card-grid">
                
            </div>
        </div>  
    )
}

export default DishCard