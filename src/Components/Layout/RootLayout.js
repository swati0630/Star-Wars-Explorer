import MainPage from './MainPage';
import { Grid, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import { Suspense, useMemo, useCallback } from 'react';
import {useNavigate, Outlet} from "react-router-dom";

const useStyles = makeStyles(({spacing}) => ({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: '1',
        padding: spacing(2),
    },
}));

export default function RootLayout({props}) {
    const classes = useStyles(props);
    const navigate = useNavigate();
    const loading = useMemo(() => (<Typography>Loading</Typography>), []);
    const handlePerson = useCallback(() => navigate('/person'), [navigate]);
    const handlePlanet = useCallback(() => navigate('/planet'), [navigate]);
    const handleStarShip = useCallback(() => navigate('/StarShip'), [navigate]);

    return (
        <MainPage>
            <Grid component="menu" container xs={3}>
                <List>
                    <ListItem>
                        <ListItemButton onClick={handlePerson}>
                            <ListItemText primary="Person" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={handlePlanet}>
                            <ListItemText primary="Planet" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={handleStarShip}>
                            <ListItemText primary="StarShip" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Grid>
            <Grid component="content" container xs={9} className={classes.container}>
                <Suspense fallback={loading}>
                    <Outlet />
                </Suspense>
            </Grid>
        </MainPage>
    );
}
