
import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    appBar: {
        zIndex:  100,
        backgroundColor:'white'// z-индекс для appBar
    },
    grow: {
        flexGrow: 1, // Растяжение элемента
    },
    iconButton:{
        color:'rgba(72, 128, 255, 1)'
    },
    NotificationsIcon:{
        color:'primary'
    }
}));