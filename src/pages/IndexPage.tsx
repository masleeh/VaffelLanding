import Contacts from "../components/IndexPage/Contacts/Contacts"
import HeaderContainer from "../components/IndexPage/Header/HeaderContainer"
import MenuContainer from "../components/IndexPage/Menu/MenuContainer"
import MenuDownloadContainer from "../components/IndexPage/MenuDownload/MenuDownloadContainer"
import PermanentContainer from "../components/IndexPage/Permanent/PermanentContainer"
import { motion } from "framer-motion";


const IndexPage = () => {
    return (
        <motion.div
            initial={{opacity: 0, x: 500}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -500}}
        >
            <HeaderContainer />
            <MenuContainer />
            <MenuDownloadContainer />
            <PermanentContainer />
            <Contacts />
        </motion.div>
    )
}

export default IndexPage