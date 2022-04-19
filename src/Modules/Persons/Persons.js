import usePersons from './usePersons';
import Card from '../../Components/Card';
import {Typography, Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useMemo } from 'react';

export default function Persons(props) {
    const {data, loading, error} = usePersons();

    const content = useMemo(() => {
        if (loading) {
            return Array.from({length: 12}).map((_, index) => (
                <Grid item key={`skeleton-${index}`} xs={4}>
                    <Card loading={loading}>
                        <AccountCircleIcon />
                    </Card>
                </Grid>
            ));
        }
        return data.map(({name, id}) => (
            <Grid item key={name} xs={4}>
                <Card title={name} id={id}>
                    <AccountCircleIcon />
                </Card>
            </Grid>
        ));
    }, [data, loading]);

    if (error) {
        return <Typography>Unable to fetch Persons</Typography>;
    }

    return <Grid container xs={12} spacing={1}>{content}</Grid>;
}
