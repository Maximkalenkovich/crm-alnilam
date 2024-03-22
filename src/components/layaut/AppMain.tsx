import Header from "../header/Header";
import Sidebar from "../navbar/NavBar";
import {Outlet} from "react-router-dom";
import {RegistrationPage} from "../Pages/registrationPage/RegistrationPage";
import React, {useState} from "react";
import {Button} from "@mui/material";


export const AppMain = () => {

    const [registr, setRegistr] = useState(true);
    const handlerVewPage = () => {
        setRegistr(!registr);
    }
    return (
        <>
            {
                registr ?<>
                        <RegistrationPage/>
                    <>
                        <Button onClick={handlerVewPage}>Посмотреть без регистрации</Button>
                    </>

                    </>
                   :
                    <div className="app-wrapper">
                        <Header/>
                        <div className="sidebar-content-wrapper">
                            <Sidebar />
                            <div className='app-wrapper-content content-wrapper'>

                                <Outlet />

                            </div>
                        </div>
                    </div>
            }
        </>

    )
}
