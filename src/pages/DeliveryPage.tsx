import { motion } from "framer-motion";
import DeliveryContainer from "../components/DeliveryPage/DeliveryContainer";

const DeliveryPage = () => {
    return (
        <motion.div
            initial={{opacity: 0, x: 500}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -500}}
        >
            <DeliveryContainer />
        </motion.div>
    )
}

export default DeliveryPage