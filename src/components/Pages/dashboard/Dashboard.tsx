
import s from './dashboardStyles/dashboardStyles.module.css'
import {SalesGraphic} from "./graphics/SalesGraphic";

export const Dashboard = () => {
    return (
<>
    <div className={s.dashboard}>
        <div className={s.totalUser}>Всего пользователей</div>
        <div className={s.totalOrder}>Заказы</div>
        <div className={s.totalSales}>Продажи</div>
        <div className={s.totalPending}>В ожидании</div>
    </div>
    <div className={s.graphic}>
        <SalesGraphic />
    </div>

</>


    );
};

