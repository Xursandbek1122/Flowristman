import React from "react";
import Header from "./companents/header";
import Category from "./companents/category";
import Discount from "./companents/Discount";
import Order from "./companents/order";
import Info from "./companents/info";


const Home = () => {
    return (
        <>
            <Header/>
            <Category/>
            <Discount/>
            <Order/>
            <Info/>
        </>
    )
}

export default Home;