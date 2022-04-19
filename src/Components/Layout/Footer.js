import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';


const useStyles = makeStyles(({palette, spacing}) => ({
    footer: {
        padding: spacing(2),
    },
    paddingRight: {
        paddingRight: spacing(1),
    },
}));

export default function Footer(props) {
    const classes = useStyles();
    return (
        <Grid container justifyContent="space-between" className={classes.footer} spacing={1}>
            <Grid item container xs={6}>
                <InfoIcon className={classes.paddingRight} />
                <Typography>Coding Assignment for REDSpace: Star Wars</Typography>
            </Grid>
            <Grid item container xs={6} justifyContent="flex-end">
                <ContactsIcon className={classes.paddingRight} />
                <Typography>Author: Swati Verma</Typography>
            </Grid>
        </Grid>
    );
}
