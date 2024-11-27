import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import UserDashboard from "../pages/UserDashboard";

export default function AuthLayout() {
    const {isLoading, isLoggedIn, currentUser} = useSelector(state => state.user);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(isLoading, isLoggedIn);
        if (!isLoading && !isLoggedIn) navigate("/login");
    }, [isLoading, isLoggedIn]);
    if (isLoading) return;
    return (
        isLoggedIn ? currentUser.role === "admin" ? <AdminDashboard /> : <UserDashboard /> : ""
    )
}