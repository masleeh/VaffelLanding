import { useState } from 'react'
import { vaffelDataApi } from '../../../redux/services/userService'
import Menu from './Menu'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { addFav, addItemToCart, removeFav } from '../../../redux/services/cartService'
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
        dispatch(addFav(dishData))
    }

    const removeFromFav = (dishId: number) => {
        dispatch(removeFav(dishId))
    }

    const addToCart = (dishData: TCartItem) => {
        dispatch(addItemToCart(dishData))
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
            addToCart={addToCart}
        />
    )
}

export default MenuContainer