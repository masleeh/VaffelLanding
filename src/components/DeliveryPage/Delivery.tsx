

const Delivery = () => {
    return (
        <section className="deliv">
            <div className="container">
                <h2 className="title-h1">Как происходит доставка?</h2>

                <div className="deliv-grid">
                    <img src="/images/del1.png" alt="" className="deliv-img deliv-img-left" />
                    <div className="deliv-col">
                        <h4 className="deliv-title">Заказ на сайте/через приложение</h4>
                        <p className="deliv-desc">Вы оставляете заявку на оформление заказа</p>
                    </div>
                    <h1 className="deliv-numb deliv-numb-end">01</h1>

                    <h1 className="deliv-numb deliv-numb-start">02</h1>
                    <div className="deliv-col">
                        <h4 className="deliv-title">Уточнение заказа</h4>
                        <p className="deliv-desc">Менеджер перезванивает Вам для уточнения деталей заказа</p>
                    </div>
                    <img src="/images/del2.png" alt="" className="deliv-img deliv-img-right" />

                    <img src="/images/del3.png" alt="" className="deliv-img deliv-img-left" />
                    <div className="deliv-col">
                        <h4 className="deliv-title">Приготовление заказа</h4>
                        <p className="deliv-desc">Наши повара приготовят Вам самые вкусные вафли</p>
                    </div>
                    <h1 className="deliv-numb deliv-numb-end">03</h1>

                    <h1 className="deliv-numb deliv-numb-start">04</h1>
                    <div className="deliv-col">
                        <h4 className="deliv-title">Доставка</h4>
                        <p className="deliv-desc">Доставка в течение 20-30 минут</p>
                    </div>
                    <img src="/images/del4.png" alt="" className="deliv-img deliv-img-right" />

                    <img src="/images/del5.png" alt="" className="deliv-img deliv-img-left" />
                    <div className="deliv-col">
                        <h4 className="deliv-title">Получение заказа</h4>
                        <p className="deliv-desc">Вы можете оплатить заказ онлайн на сайте, в приложении, либо при получении любым удобным способом</p>
                    </div>
                    <h1 className="deliv-numb deliv-numb-end">05</h1>
                </div>
            </div>
        </section>
    )
}

export default Delivery