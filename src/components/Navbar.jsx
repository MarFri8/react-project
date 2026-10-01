import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Home
            </NavLink>
            {" | "}
            <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Users
            </NavLink>
        </nav>
    );
}

export default Navbar;
