import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Login } from "../pages/login/login";
import { Register } from "../pages/register/register";

export const UseRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
};
