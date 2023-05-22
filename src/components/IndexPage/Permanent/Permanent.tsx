import { TPromo, TSeason } from "../../../types/Data"
import BackBottom from "../../UI/BackBottom"
import BackTop from "../../UI/BackTop"
import PromSlider from "../../UI/PromSlider"
import PermPromote from "./PermPromote/PermPromote"

type TProm = {
    promData: TPromo[];
    promLoading: boolean;
    seasonData: TSeason[];
    seasonLoading: boolean
}

const Permanent = ({promData, promLoading, seasonData, seasonLoading}:TProm) => {
    return (
        <>
            <BackTop />
            <section className="permanent">
                <div className="container">
                    <h1 className="title-h1">Наши акции</h1>
                    <h2 className="promo-title">Постоянные</h2>
                    <div className="permanent-dish-row">
                        {promLoading ? <div>oops</div> :
                            promData && promData.map((promo, index) => {
                                return <PermPromote 
                                    key={promo.id}
                                    title={promo.title}
                                    description={promo.description}
                                    image_link={promo.image_link}
                                />
                            })
                        }
                    </div>

                    <h2 className="promo-title">Ограниченные</h2>

                    <PromSlider slides={seasonData}/>
                    

                </div>
            </section>
            <BackBottom />
        </>
    )
}

export default Permanent