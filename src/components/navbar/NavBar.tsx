import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {useStyles} from "./navBarStyles/navBarStyles";
import {NavLink} from "react-router-dom";
import {Dashboard} from "@material-ui/icons";
import s from './navBarStyles/navBarStylesforlink.module.css';
import ProductIcon from '@material-ui/icons/LocalMall';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessengerIcon from '@material-ui/icons/Message';
import ListIcon from '@material-ui/icons/List';




function Sidebar() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const routes = [
        {to:'/dashboard',label:'Dashboard',component:<Dashboard/>},
        {to:'/product',label:'Product',component:<ProductIcon />},
        {to:'/messenger',label:'Messenger',component:<MessengerIcon />},
        {to:'/orderList',label:'Order List',component:<ListIcon/>}
    ]

    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classes.root}>
            {/* Боковая панель */}
            <Drawer
                variant="permanent"
                className={`${classes.drawer} ${isOpen ? classes.drawerOpen : classes.drawerClose}`}
                classes={{
                    paper: `${isOpen ? classes.drawerOpen : classes.drawerClose}`,
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleToggleSidebar}>
                        {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
                    </IconButton>
                </div>

                <ul className = {isOpen?s.open :s.closed}>
                    {routes.map((route,index)=>
                        <li className={s.li} key={index}> <NavLink className={({isActive})=>isActive? s.active :s.link} to={route.to}>{isOpen? route.label:route.component}</NavLink></li>)}
                </ul>
            </Drawer>
        </div>
    );
}

export default Sidebar;