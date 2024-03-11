import React, {memo} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Sidebar from "./components/navbar/NavBar";

import { Route, Routes} from "react-router-dom";
import {Products} from "./components/Pages/product/Products";
import {Dashboard} from "./components/Pages/dashboard/Dashboard";
import {SalesGraphic} from "./components/Pages/dashboard/graphics/SalesGraphic";
import {FinishedGraphicProduct} from "./components/Pages/dashboard/graphics/FinishedGraphicProduct";



const App =memo(()=>{
    return (
        <div className="app-wrapper">
            <Header />

            <div className="sidebar-content-wrapper">
                <Sidebar />
                <div className='app-wrapper-content content-wrapper'>
                    <Routes>
                        <Route path="/"  element={<Dashboard/>}/>
                        <Route path="/dashboard"  element={<Dashboard/>} />
                        <Route path="/product"  element={<Products/>} />
                        <Route path="/complitedProduct"  element={<FinishedGraphicProduct />} />
                        <Route path="/annualProfit"  element={<SalesGraphic/>} />
                    </Routes>

                </div>
            </div>
        </div>
    );
})

export default App;
