import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import UserDashboard from "../pages/UserDashboard";

export default function AuthLayout() {
    const {isLoggedIn, currentUser} = useSelector(state => state.user);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) navigate("/login");
    }, [isLoggedIn]);
    return (
        isLoggedIn && currentUser.role === "admin" ? <AdminDashboard /> : <UserDashboard />
    )
}