import { Card as MuiCard, CardContent, Typography, Grid, Skeleton } from "@mui/material";
import { makeStyles } from '@mui/styles';
import {useMemo, useCallback} from 'react';
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles(({palette, spacing}) => ({
    title: {
        textOverflow: 'ellipsis',
        whiteSpace: 'noWrap',
        overflow: 'hidden',
    },
    cursor: {
        cursor: 'pointer',
    },
    grow: {
        flexGrow: '1',
    },
}));

export default function Card({children, title, loading, id, ...props}) {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleNavigate = useCallback(() => navigate(id), [navigate, id]);

    const content = useMemo(() => {
        if (loading) {
            return <Skeleton width="80%" animation="wave" />;
        }
        return <Typography variant="h6" component="h1" className={classes.title}>{title}</Typography>;
    }, [classes, loading, title]);

    return (
        <MuiCard variant="outlined" onClick={handleNavigate} {...props}>
            <CardContent>
                <Grid container direction="row" wrap="noWrap" spacing={1} className={classes.cursor}>
                    <Grid item>{children}</Grid>
                    <Grid item className={classes.grow}>{content}</Grid>
                </Grid>
            </CardContent>
        </MuiCard>
    );
}
