import Slider from '../../UI/Slider'

const MenuDownload = () => {
    return (
        <>
            <div className="container">
                <h5 className="download-title">Мы предлагаем отойти от привычных пицц, роллов, бургеров и вот этого всего, и попробовать что-то новенькое-банкетные сеты норвежских вафель и кейтеринг</h5>
            </div>

            <Slider />

            <div className="container">
                
                <button className='yButton yButton-large yButton-center download-btn'>Скачать меню</button>
            </div>
        </>
    )
}

export default MenuDownload