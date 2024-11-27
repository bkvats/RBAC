import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { isLoading, login, logout } from "./store/userSlice";

export default function App() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    // checking user is logged in or not via API
    // const response = await axios("/api/v1/user/current-user");
    // if (response.status === 200) dispatch(login(response.data));
    if (localStorage.getItem("currentUser")) dispatch(login(JSON.parse(localStorage.getItem("currentUser"))));
    else {
      dispatch(logout())
    }
  }, [isLoading, isLoggedIn]);
  return (
    <>
      <Header />
      <main style={{minHeight: "calc(100vh - 10rem)"}}>
        <Outlet />
      </main>
      <Footer />
      <Toast />
      <Loader />
    </>
  )
}