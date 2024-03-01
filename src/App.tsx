import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Sidebar from "./components/navbar/NavBar";

import { Route, Routes} from "react-router-dom";
import {Product} from "./components/Pages/product/Product";
import {Dashboard} from "./components/Pages/dashboard/Dashboard";
import {SalesGraphic} from "./components/Pages/dashboard/graphics/SalesGraphic";


function App() {
    return (
        <div className="app-wrapper">
            <Header />

            <div className="sidebar-content-wrapper">
                <Sidebar />
                <div className='app-wrapper-content content-wrapper'>
                    <Routes>
                        <Route path="/"  element={<Dashboard/>}/>
                        <Route path="/dashboard"  element={<Dashboard/>} />
                        <Route path="/product"  element={<Product/>} />
                        <Route path="/complitedProduct"  element={<SalesGraphic/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
