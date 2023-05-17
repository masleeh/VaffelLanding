import BackTop from '../UI/BackTop'

const Footer = () => {
    return (
        <footer className='footer'>
            <BackTop />
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-column">
                        <img src="/logo.png" alt="" className="footer-logo" />
                        <h5 className="footer-title1">Добро пожаловать в вафельную семью!</h5>
                        <h5 className="footer-title2" style={{marginTop: 34}}>ⒸVaffel 2022 </h5>
                        <h5 className="footer-title2">Все права защищены</h5>
                    </div>

                    <div className="footer-column">
                        <h5 className="footer-title3">Сотрудничество</h5>
                        <a href="" className="footer-link">Партнерство для ресторанов</a>
                        <a href="" className="footer-link">Пользовательское соглашение</a>
                        <a href="" className="footer-link">О политике конфиденциальности</a>

                        <div className="contact_i_row">
                            <img src="/icons/vk.svg" alt="" className="contact_i_ico" />
                            <img src="/icons/tg.svg" alt="" className="contact_i_ico" />
                            <img src="/icons/inst.svg" alt="" className="contact_i_ico" />
                        </div>
                    </div>

                    <div className="footer-column">
                        <h5 className="footer-title3">Компания</h5>
                        <a href="" className="footer-link">О нас</a>
                        <a href="" className="footer-link">Контакты</a>
                        <a href="" className="footer-link">Правила оплаты</a>    
                        <a href="" className="footer-link">Условия акций сервиса</a>    
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer