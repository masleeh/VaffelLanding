import { motion } from "framer-motion";
import CartContainer from "../components/CartPage/CartContainer";


const CartPage = () => {
    return (
        <motion.div
            initial={{opacity: 0, x: 500}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -500}}
        >
            <CartContainer />
        </motion.div>
    )
}

export default CartPage