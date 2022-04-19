import Field from '../../../Components/Field';
import usePerson from './usePerson';
import { Grid, Typography, Skeleton } from "@mui/material";
import { useMemo } from 'react';
import { useParams } from "react-router-dom";

export default function Person(props) {
    const params = useParams();
    const { data, loading = true, error } = usePerson(params);
    const { name, height, mass, hairColor, eyeColor, birthYear, gender } = data

    const fields = useMemo(() => [
        {
            label: 'Height',
            value: height,
        },
        {
            label: 'Mass',
            value: mass,
        },
        {
            label: 'Hair Color',
            value: hairColor,
        },
        {
            label: 'Eye Color',
            value: eyeColor,
        },
        {
            label: 'Birth Year',
            value: birthYear,
        },
        {
            label: 'Gender',
            value: gender,
        },

    ], [birthYear, eyeColor, gender, hairColor, height, mass]);

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
