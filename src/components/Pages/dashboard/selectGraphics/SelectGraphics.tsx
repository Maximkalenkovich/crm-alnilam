import {useState} from "react";
import {NavLink} from "react-router-dom";
import {SalesGraphic} from "../graphics/SalesGraphic";

type nameGraphicsAndRoutingType = {
    title: string;
    route: string;
    component?: React.ReactNode; // тип React.ReactNode означает, что здесь может быть любой валидный JSX элемент или компонент
}


export const SelectGraphics = () => {

    const [state, setState] = useState(false)

    const nameGraphicsAndRouting: nameGraphicsAndRoutingType[] = [
        {
            title: 'Количество сделанной продукции', route: '/complitedProduct', component: <SalesGraphic/>
        },
        {
            title: 'Годовая прибыль', route: '/annualProfit', component: <SalesGraphic/>
        },
    ]
    const onClickChange = () => {
        setState(!state)
    }

    return (
        <>
            <div>
                <h3 onClick={onClickChange}>список граффиков</h3>
                {state &&
                    nameGraphicsAndRouting.map(p => (
                        <ul>
                            <li><NavLink key={p.route} to={p.route}>{p.title}</NavLink></li>
                        </ul>
                    ))
                }
            </div>
        </>
    );
}




