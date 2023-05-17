import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <NavbarContainer />
            <Routes>
                <Route path="/" element={<IndexPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
