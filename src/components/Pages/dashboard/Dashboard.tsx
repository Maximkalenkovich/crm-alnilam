import React from 'react';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import s from './dashboardStyles/dashboardStyles.module.css';
import {SelectGraphics} from "./selectGraphics/SelectGraphics";

const sections = [
    {
        title: 'Всего Сотрудников',
        icon: <PeopleSharpIcon className={s.svg} />,
        value: '1000',
    },
    {
        title: 'Заказы',
        icon: <ShoppingBasketIcon className={s.svg} />,
        value: '1000',
    },
    {
        title: 'Продажи',
        icon: <MonetizationOnIcon className={s.svg} />,
        value: '1000',
    },
    {
        title: 'В Ожидании',
        icon: <HourglassEmptyIcon className={s.svg} />,
        value: '1000',
    },
];

export const Dashboard = () => {
    return (
        <>
            <div className="container">
                <div className={s.dashboard}>
                    {sections.map((section, index) => (
                        <div className={s.section} key={index}>
                            <h3 className={s.title}>
                                {section.title} {section.icon}
                            </h3>
                            <span className={s.span}>{section.value}</span>
                        </div>
                    ))}
                </div>
                <SelectGraphics />
            </div>
        </>
    );
};