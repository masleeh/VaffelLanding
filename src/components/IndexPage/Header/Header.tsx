

const Header = () => {
    return (
        <div className="container">
            <header className="header">
                <h1 className="header-title title-h1">Норвежские вафли</h1>
                <h2 className="header-description">Горячая мягкие вафли с хрустящей корочкой и аппетитным наполнением</h2>
                <button className="yButton yButton-large" style={{marginTop: 70}}>Оформить заказ</button>
            
                <div className="header-vaf-cont">
                    <img src="./images/headm.png" alt="" className="header-vaf-img" />
                </div>
                <div className="header-back-cont">
                    <img src="./images/headb.png" alt="" className="header-vaf-img" />
                </div>
            </header>
        </div>
    )
}

export default Header