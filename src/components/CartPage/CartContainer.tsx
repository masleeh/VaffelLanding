import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { decreaseQuantity, increaseQuantity, removeItemFromCart } from '../../redux/services/cartService'
import { removeFav } from '../../redux/services/cartService'
import Cart from './Cart'

const CartContainer = () => {
    const favState = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()

    const increaseItemCart = (index: number) => {
        dispatch(increaseQuantity(index))
    }

    const decreaseItemCart = (index:number) => {
        dispatch(decreaseQuantity(index))
    }

    const removeFavItem = (id: number) => {
        dispatch(removeFav(id))
    }

    const removeCartItem = (id:number) => {
        dispatch(removeItemFromCart(id))
    }

    const handleRemove = (type: "cart" | "fav", id: number) => {
        if (type === "fav") {
            removeFavItem(id)
        } else {
            removeCartItem(id)
        }
    }

    return (
        <Cart 
            favState={favState}
            handleRemove={handleRemove}
            increaseItemCart={increaseItemCart}
            decreaseItemCart={decreaseItemCart}
        />
    )
}

export default CartContainer