import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NavbarContainer from "./components/Navbar/NavbarContainer";

function App() {
    return (
        <Router>
            <NavbarContainer />
            <Routes>
                <Route path="/" element={<IndexPage />} />
            </Routes>
        </Router>
    );
}

export default App;
