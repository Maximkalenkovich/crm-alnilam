
import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {useStyles} from "./navBarStyles/navBarStyles";



function Sidebar() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

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
                <List>
                    <ListItem button>
                        <ListItemIcon>{/* Иконка для пункта меню */}</ListItemIcon>
                        <ListItemText primary="Menu Item 1" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>{/* Иконка для пункта меню */}</ListItemIcon>
                        <ListItemText primary="Menu Item 2" />
                    </ListItem>
                    {/* Добавьте дополнительные пункты меню соответствующим образом */}
                </List>
            </Drawer>

            <main className={`${classes.content} ${isOpen ? classes.contentShift : ''}`}>
                {/* Ваш контент */}
            </main>
        </div>
    );
}

export default Sidebar;