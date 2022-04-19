import { Grid, Typography, Skeleton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useMemo } from 'react';

const useStyles = makeStyles(({spacing}) => ({
    label: {
        paddingRight: spacing(2),
        fontWeight: 'bold !important',
    },
}));

export default function Field({label, value, loading}) {
    const classes = useStyles();
    const content = useMemo(() => {
        if (loading) {
            return <Skeleton animation="wave" width="80%" />;
        }
        return <Typography>{value}</Typography>
    }, [loading, value]);
    
    return (
        <Grid container xs={12} direction="row">
            <Typography className={classes.label}>{label}</Typography>
            {content}
        </Grid>
    );
}
