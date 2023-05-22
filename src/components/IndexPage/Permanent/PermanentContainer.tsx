import Permanent from './Permanent'
import { vaffelDataApi } from '../../../redux/services/userService'

const PermanentContainer = () => {
    const {data: promData, isLoading: promLoading} = vaffelDataApi.useGetPromotionsQuery('')
    const {data: seasonData, isLoading: seasonLoading} = vaffelDataApi.useGetSeasonsQuery('')
    
    return (
        <Permanent 
            promData={promData}
            promLoading={promLoading}
            seasonData={seasonData}
            seasonLoading={seasonLoading}
        />
    )
}

export default PermanentContainer