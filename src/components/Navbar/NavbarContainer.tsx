import Navbar from './Navbar'
import {useLocation} from 'react-router-dom'

const NavbarContainer = () => {
    const location = useLocation()
    return (
        <Navbar 
            path={location.pathname}
        />
    )
}

export default NavbarContainer