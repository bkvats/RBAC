import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Loader from "./components/Loader";

export default function App() {
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