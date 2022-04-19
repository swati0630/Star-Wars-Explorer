import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AppsIcon from '@mui/icons-material/Apps';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';


const useStyles = makeStyles(({palette, spacing}) => ({
    header: {
        padding: spacing(2),
        backgroudColor: palette.main,
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const {pathname} = useLocation();

    const path = useMemo(() => {
        const val = pathname.split('/')[1];
        return val.toLocaleUpperCase();
    }, [pathname]);

    const title = useMemo(() => ['Star Wars', path].join(' - '), [path]);

    return (
        <Grid container justifyContent="flex-start" className={classes.header} spacing={1}>
            <AppsIcon />
            <Typography>{title}</Typography>
        </Grid>
    );
}
