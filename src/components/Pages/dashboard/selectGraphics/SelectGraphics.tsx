import React, {memo, useState} from "react";
import {NavLink} from "react-router-dom";
import { SalesGraphic } from "../graphics/SalesGraphic";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {FinishedGraphicProduct} from "../graphics/FinishedGraphicProduct";

type nameGraphicsAndRoutingType = {
    title: string;
    route: string;
    component?: React.ReactNode;
}

export const SelectGraphics = memo(() => {
    const [expanded, setExpanded] = useState(false);

    const nameGraphicsAndRouting: nameGraphicsAndRoutingType[] = [
        {
            title: 'Количество сделанной продукции',
            route: '/complitedProduct',
            component:<FinishedGraphicProduct/>
        },
        {
            title: 'Годовая прибыль',
            route: '/annualProfit',
            component: <SalesGraphic/>
        },

    ]

    const handleChange =  () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div>
                <h3>Граффики компании</h3>
                {nameGraphicsAndRouting.map((p, index) => (
                    <Accordion  onChange={handleChange} key={p.route}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{p.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <NavLink to={p.route}>{p.title}</NavLink>
                        </AccordionDetails>
                    </Accordion>
                ))}



            </div>
        </>
    );
})
