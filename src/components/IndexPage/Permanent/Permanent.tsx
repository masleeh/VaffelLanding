import BackBottom from "../../UI/BackBottom"
import BackTop from "../../UI/BackTop"
import PromSlider from "../../UI/PromSlider"
import PermPromote from "./PermPromote/PermPromote"

const Permanent = () => {
    return (
        <>
            <BackTop />
            <section className="permanent">
                <div className="container">
                    <h1 className="title-h1">Наши акции</h1>
                    <h2 className="promo-title">Постоянные</h2>
                    <div className="permanent-dish-row">
                        <PermPromote />
                    </div>

                    <h2 className="promo-title">Ограниченные</h2>
                    <PromSlider slides={[""]}/>
                    

                </div>
            </section>
            <BackBottom />
        </>
    )
}

export default Permanent