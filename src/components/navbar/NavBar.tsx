// Sidebar.js
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    drawer: {
        flexShrink: 0,
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth / 2,
    },
}));

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

            {/* Контент */}
            <main className={`${classes.content} ${isOpen ? classes.contentShift : ''}`}>
                {/* Ваш контент */}
            </main>
        </div>
    );
}

export default Sidebar;