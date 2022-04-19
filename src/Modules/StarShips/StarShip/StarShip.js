import Field from '../../../Components/Field';
import useStarShip from './useStarShip';
import { Grid, Typography, Skeleton } from "@mui/material";
import { useMemo } from 'react';
import { useParams } from "react-router-dom";

export default function StarShip(props) {
    const params = useParams();
    const { data, loading = true, error } = useStarShip(params);
    const { name, model, manufacturer, length, crew, passengers, consumables } = data

    const fields = useMemo(() => [
        {
            label: 'Model',
            value: model,
        },
        {
            label: 'Manufacturer',
            value: manufacturer,
        },
        {
            label: 'Length',
            value: length,
        },
        {
            label: 'Crew',
            value: crew,
        },
        {
            label: 'passengers',
            value: passengers,
        },
        {
            label: 'Consumables',
            value: consumables,
        },

    ], [consumables, crew, length, manufacturer, model, passengers]);

    const content = useMemo(() => {
        return fields.map((args, index) => (
            <Grid item key={`Field-${index}`}>
                <Field {...args} loading={loading} />
            </Grid>
        ));
    }, [fields, loading]);

    const title = useMemo(() => {
        if (loading) {
            return <Skeleton animation="wave" width="80%" />;
        }
        return <Typography variant="h4" component="h1">{name}</Typography>;
    }, [loading, name]);

    if (error) {
        return <Typography>Unable to fetch Person</Typography>;
    }

    return (
        <Grid container spacing={1} justifyContent="flex-start" direction="column">
            <Grid item>
                {title}
            </Grid>
            {content}
        </Grid>
    );
}
