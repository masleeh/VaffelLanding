import Contacts from "../components/IndexPage/Contacts/Contacts"
import HeaderContainer from "../components/IndexPage/Header/HeaderContainer"
import MenuContainer from "../components/IndexPage/Menu/MenuContainer"
import MenuDownloadContainer from "../components/IndexPage/MenuDownload/MenuDownloadContainer"
import PermanentContainer from "../components/IndexPage/Permanent/PermanentContainer"


const IndexPage = () => {
    return (
        <>
            <HeaderContainer />
            <MenuContainer />
            <MenuDownloadContainer />
            <PermanentContainer />
            <Contacts />
        </>
    )
}

export default IndexPage