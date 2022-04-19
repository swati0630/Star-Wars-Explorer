import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Footer from './Footer';
import Header from './Header';

const useStyles = makeStyles(({spacing}) => ({
    root: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        minHeight: '100%',
    },
    content: {
        justifyContent: 'flex-start',
        flexGrow: '1',
        padding: spacing(0, 1),
    },
    blueColor: {
        backgroundColor: '#e3f2fd',
    },
}));

export default function MainPage({children, ...props}) {
    const classes = useStyles(props);
    return (
        <Grid container className={classes.root}>
            <Grid item component="header" spacing={2} xs={12} className={classes.blueColor}>
                <Header />
            </Grid>
            <Grid item container component="main" xs={12} className={classes.content}>
                {children}
            </Grid>
            <Grid item component="footer" spacing={2} xs={12} className={classes.blueColor}>
                <Footer />
            </Grid>
        </Grid>
    );
}
