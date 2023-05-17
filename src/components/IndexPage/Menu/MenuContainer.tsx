import { useState } from 'react'
import { vaffelDataApi } from '../../../redux/services/userService'
import Menu from './Menu'

const MenuContainer = () => {
    const [activeCat, setActiveCat] = useState<string>("Популярное")

    const {data: catData, isLoading: catLoading} = vaffelDataApi.useGetAllCategoriesQuery(``)
    const {data: dishesData, isLoading: dishesLoading} = vaffelDataApi.useGetAllDishesQuery(activeCat)

    const selectCat = (name: string) => {
        setActiveCat(name)
    }

    return (
        <Menu 
            catData={catData}
            catLoading={catLoading}
            activeCat={activeCat}
            selectCat={selectCat}
            dishesData={dishesData}
            dishesLoading={dishesLoading}
        />
    )
}

export default MenuContainer