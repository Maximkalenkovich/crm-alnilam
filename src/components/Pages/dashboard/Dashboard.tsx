
import s from './dashboardStyles/dashboardStyles.module.css'
import {SelectGraphics} from "./selectGraphics/SelectGraphics";
import React from "react";

export const Dashboard = () => {
    return (
        <>
            <div className={'container'}>
                <div className={s.dashboard}>
                    <div className={s.totalUser}>Всего пользователей</div>
                    <div className={s.totalOrder}>Заказы</div>
                    <div className={s.totalSales}>Продажи</div>
                    <div className={s.totalPending}>В ожидании</div>
                </div>
                <SelectGraphics/>

            </div>
        </>

    );
};

