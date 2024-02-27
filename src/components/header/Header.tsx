import React from "react";
import { AppBar, Toolbar, IconButton, Badge } from '@material-ui/core';
import { Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon } from '@material-ui/icons';
import {useStyles} from "./stylesHeader/headerStyle";
import InputSearch from "./inputSearch/InputSearch";


function Header() {
    // стили материал юа
    const classes = useStyles();
    return (
            <AppBar  className={classes.appBar}>
                <Toolbar>
                    <div className={classes.grow} />
                    <InputSearch/>
                    <IconButton color="inherit">
                        {/*иконка для уведомлений*/}
                        <Badge badgeContent={3} color="secondary">
                            <NotificationsIcon color="primary"/>
                        </Badge>
                    </IconButton>
                    <IconButton >
                        {/*иконка для аккаунта*/}
                        <AccountCircleIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
    );
}

export default Header;