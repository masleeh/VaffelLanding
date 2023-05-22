import { useState } from 'react'
import { vaffelDataApi } from '../../../redux/services/userService'
import Menu from './Menu'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { IDishCardProps } from './DishCard/DishCard'
import { addFav, removeFav } from '../../../redux/services/cartService'
import { TCartItem } from '../../../types/Data'

const MenuContainer = () => {
    const [activeCat, setActiveCat] = useState<string>("Популярное")

    const {data: catData, isLoading: catLoading} = vaffelDataApi.useGetAllCategoriesQuery(``)
    const {data: dishesData, isLoading: dishesLoading} = vaffelDataApi.useGetAllDishesQuery(activeCat)

    const selectCat = (name: string) => {
        setActiveCat(name)
    }

    const favState = useAppSelector(state => state.cart.favIds)
    const dispatch = useAppDispatch()

    const addToFav = (dishData: TCartItem) => {
        console.log("add")
        dispatch(addFav(dishData))
    }

    const removeFromFav = (dishId: number) => {
        console.log("remove")
        dispatch(removeFav(dishId))
    }

    return (
        <Menu 
            catData={catData}
            catLoading={catLoading}
            activeCat={activeCat}
            selectCat={selectCat}
            dishesData={dishesData}
            dishesLoading={dishesLoading}
            favState={favState}
            addToFav={addToFav}
            removeFromFav={removeFromFav}
        />
    )
}

export default MenuContainer