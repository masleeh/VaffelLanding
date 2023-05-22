import { TPromo } from "../../../../types/Data"



const PermPromote = ({description, title, image_link}: TPromo) => {
    return (
        <div className="prom_card">
            <img className='prom_card_image' alt="" src={image_link}/>
            <h4 className="prom_card_title">{title}</h4>
            <p className="prom_card_desc">{description}</p>
        </div>
    )
}

export default PermPromote