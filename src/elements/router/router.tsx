import * as React from "react";
import {
    createBrowserRouter,

} from "react-router-dom";
import {Dashboard} from "../../components/Pages/dashboard/Dashboard";
import {Products} from "../../components/Pages/product/Products";
import {FinishedGraphicProduct} from "../../components/Pages/dashboard/graphics/FinishedGraphicProduct";
import {SalesGraphic} from "../../components/Pages/dashboard/graphics/SalesGraphic";
import {RegistrationPage} from "../../components/Pages/registrationPage/RegistrationPage";
import {AppMain} from "../../components/layaut/AppMain";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppMain />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "product",
                element: <Products />
            },
            {
                path: "complitedProduct",
                element: <FinishedGraphicProduct />
            },
            {
                path: "annualProfit",
                element: <SalesGraphic />
            },
            {
                path: "registrationForm",
                element: <RegistrationPage />
            }
        ]
    }
]);