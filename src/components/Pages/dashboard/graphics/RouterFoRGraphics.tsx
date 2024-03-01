import {Route, Routes} from "react-router-dom";
import {Product} from "../../product/Product";
import {SalesGraphic} from "./SalesGraphic";
import React from "react";


export const RouterFoRGraphics=()=>{
    return(
        <Routes>
            <Route path="/complitedProduct"  element={<SalesGraphic/>} />
        </Routes>
    )
}