import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
