// Экспорт стилей с помощью makeStyles


import {makeStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme:Theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1, // z-индекс для appBar
    },
    search: {
        position: 'relative', // Позиционирование относительно родительского элемента
        borderRadius: theme.shape.borderRadius, // Радиус скругления углов
        backgroundColor: theme.palette.common.white, // Цвет фона
        marginLeft: 0, // Отступ слева
        width: '100%', // Ширина 100%
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1), // Отступ слева при разрешении экрана выше 'sm'
            width: 'auto', // Автоматическая ширина
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2), // Внутренний отступ сверху и снизу, отступ слева и справа
        height: '100%', // Высота 100%
        position: 'absolute', // Абсолютное позиционирование
        pointerEvents: 'none', // Не реагировать на события указателя мыши
        display: 'flex', // Отображение в виде флекс-контейнера
        alignItems: 'center', // Выравнивание содержимого по центру
        justifyContent: 'center', // Выравнивание содержимого по центру
        color: 'black', // Цвет иконки
    },
    inputRoot: {
        color: 'black', // Цвет текста
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0), // Внутренний отступ сверху, снизу, слева и справа
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, // Внутренний отступ слева
        transition: theme.transitions.create('width'), // Плавное изменение анимации при изменении ширины
        width: '100%', // Ширина 100%
        textAlign: 'left', // Выравнивание текста по левому краю
        [theme.breakpoints.up('md')]: {
            width: '20ch', // Ширина при разрешении экрана выше 'md'
        },
    },
    grow: {
        flexGrow: 1, // Растяжение элемента
    },
}));