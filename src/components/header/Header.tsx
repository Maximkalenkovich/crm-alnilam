import React from "react";
import { AppBar, Toolbar, InputBase, IconButton, Badge } from '@material-ui/core';
import { Search as SearchIcon, Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon } from '@material-ui/icons';
import {useStyles} from "./stylesHeader/headerStyle";


function Header() {
    // стили материал юа
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <div className={classes.grow} />
                <div className={classes.search}>
                    <div className={classes.searchIcon}>

                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search..."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>

                <IconButton color="inherit">
                    {/*иконка для уведомлений*/}
                    <Badge badgeContent={3} color="secondary">
                        <NotificationsIcon style={{ color: "black" }}/>
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    {/*иконка для аккаунта*/}
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;