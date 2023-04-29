import { NavLink } from 'react-router-dom'
import { INavbar } from '../../types/Navbar'

const Navbar: React.FC<INavbar> = ({path}) => {
    return (
        <div className="container">
            <nav className="navbar">
                <NavLink to="/" className="navbar-img-cont">
                    <img alt="Vaffel logo" src="./public/logo.png" className="navbar-img"/>
                </NavLink>

                <div className="icon-text">
                    <div className="icon-cont-med">
                        <img className="navbar-img" alt="Location" src="./public/loc-icon.svg"/>
                    </div>
                    <h2 className="navbar-title nav-bordered">Выберите город</h2>
                </div>

                <NavLink to="/" 
                    className={path == "/" 
                    ? "navbar-title nav-selected" 
                    : "navbar-title"}>Главная</NavLink>
                <NavLink to="/delivery" 
                    className={path == "/delivery" 
                    ? "navbar-title nav-selected" 
                    : "navbar-title"}>Доставка</NavLink>
                <NavLink to="/about" 
                    className={path == "/about" 
                    ? "navbar-title nav-selected" 
                    : "navbar-title"}>О нас</NavLink>

                <div className="icon-text">
                    <div className="icon-cont-med">
                        <img className="navbar-img" alt="Location" src="./public/loc-icon.svg"/>
                    </div>
                    <h2 className="navbar-title">Корзина</h2>
                </div>
            </nav>
        </div>
    )
}

export default Navbar