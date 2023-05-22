import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Footer from "./components/Footer/Footer";
import DeliveryPage from "./pages/DeliveryPage";
import CartPage from "./pages/CartPage";

function App() {
    return (
        <Router>
            <NavbarContainer />
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/delivery" element={<DeliveryPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
