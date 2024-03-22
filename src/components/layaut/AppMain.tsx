



import Header from "../header/Header";
import Sidebar from "../navbar/NavBar";
import {Outlet, Route, Routes} from "react-router-dom";
import {RegistrationPage} from "../Pages/registrationPage/RegistrationPage";
import React, {useState} from "react";

import {Dashboard} from "../Pages/dashboard/Dashboard";
import {Products} from "../Pages/product/Products";
import {FinishedGraphicProduct} from "../Pages/dashboard/graphics/FinishedGraphicProduct";
import {SalesGraphic} from "../Pages/dashboard/graphics/SalesGraphic";


export const AppMain = () => {

    return (
                                <Routes>
                                    <Route path="/" element={<Dashboard />}/>
                                        <Route path="/dashboard" element={<Dashboard />} />
                                        <Route path="/product" element={<Products />} />
                                        <Route path="/complitedProduct" element={<FinishedGraphicProduct />} />
                                        <Route path="/annualProfit" element={<SalesGraphic />} />
                                        <Route path="/registrationForm" element={<RegistrationPage />} />
                                </Routes>

    )
}