import Field from '../../../Components/Field';
import usePlanet from './usePlanet';
import { Grid, Typography, Skeleton } from "@mui/material";
import { useMemo } from 'react';
import { useParams } from "react-router-dom";

export default function Planet(props) {
    const params = useParams();
    const { data, loading = true, error } = usePlanet(params);
    const { name, gravity, diameter, rotationPeriod, surfaceWater, orbitalPeriod, population } = data

    const fields = useMemo(() => [
        {
            label: 'Gravity',
            value: gravity,
        },
        {
            label: 'Diameter',
            value: diameter,
        },
        {
            label: 'Rotation Period',
            value: rotationPeriod,
        },
        {
            label: 'Surface Water',
            value: surfaceWater,
        },
        {
            label: 'Orbital Period',
            value: orbitalPeriod,
        },
        {
            label: 'Population',
            value: population,
        },

    ], [diameter, gravity, orbitalPeriod, population, rotationPeriod, surfaceWater]);

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
