
const Contacts = () => {
    return (
        <section className="contact">
            <div className="container">
                <h2 className="contact_title">Вы можете забрать свой заказ сами</h2>
                <h2 className="contact_title2">и получить скидку 10%</h2>

                <div className="contact_cont">
                    <h5 className="contact_s_title">А мы можем ответить на все Ваши вопросы</h5>
                    <div className="contact_s_row" style={{marginTop: 25}}>
                        <img className="contact_ico" src="/icons/phone.svg" />
                        <h4 className="contact_s_info">+ 7 (947) 290 17 94</h4>
                    </div>
                    <h5 className="contact_s_title" style={{marginTop: 25}}>Точки самовывоза</h5>

                    <div className="contact_s_grid">
                        <div className="contact_s_row">
                            <img className="contact_ico" src="/icons/loc.svg" />
                            <h4 className="contact_s_info">Восстания, 55</h4>
                        </div>
                        <div className="contact_s_row">
                            <img className="contact_ico" src="/icons/loc.svg" />
                            <h4 className="contact_s_info">Пулковское шоссе, 25</h4>
                        </div>
                        <div className="contact_s_row">
                            <img className="contact_ico" src="/icons/loc.svg" />
                            <h4 className="contact_s_info">Гороховая, 41</h4>
                        </div>
                        <div className="contact_s_row">
                            <img className="contact_ico" src="/icons/loc.svg" />
                            <h4 className="contact_s_info">Комендантский, 66</h4>
                        </div>
                    </div>

                    <div className="contact_i_row">
                        <img src="/icons/vk.svg" alt="" className="contact_i_ico" />
                        <img src="/icons/tg.svg" alt="" className="contact_i_ico" />
                        <img src="/icons/inst.svg" alt="" className="contact_i_ico" />
                    </div>

                    <h5 className="contact_s_title" style={{marginTop: 40}}>Наше мобильное приложение</h5>

                    <div className="contact_a_row">
                        <a href="#">
                            <div className="contact_app">
                                <img src="/icons/appst.svg" alt="" className="contact_app_ico" />
                                <h5 className="contact_app_title">Загрузите в App Store</h5>
                            </div>
                        </a>
                        <a href="#">
                            <div className="contact_app">
                                <img src="/icons/playm.svg" alt="" className="contact_app_ico" />
                                <h5 className="contact_app_title">Загрузите в Google Play</h5>
                            </div>
                        </a>
                        <a href="#">
                            <div className="contact_app">
                                <img src="/icons/appg.svg" alt="" className="contact_app_ico" />
                                <h5 className="contact_app_title">Загрузите в App Gallery</h5>
                            </div>
                        </a>
                    </div>
                </div>

                <img src="/contact.png" alt="" className="contact_img" />
            </div>
        </section>
    )
}

export default Contacts