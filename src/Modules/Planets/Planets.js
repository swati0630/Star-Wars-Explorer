import usePlanets from './usePlanets';
import Card from '../../Components/Card';
import {Typography, Grid } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import { useMemo } from 'react';

export default function Planets(props) {
    const {data, loading, error} = usePlanets();

    const content = useMemo(() => {
        if (loading) {
            return Array.from({length: 12}).map((_, index) => (
                <Grid item key={`skeleton-${index}`} xs={4}>
                    <Card loading={loading}>
                        <PublicIcon />
                    </Card>
                </Grid>
            ));
        }
        return data.map(({name, id}) => (
            <Grid item key={name} xs={4}>
                <Card title={name} id={id}>
                    <PublicIcon />
                </Card>
            </Grid>
        ));
    }, [data, loading]);

    if (error) {
        return <Typography>Unable to fetch Planets</Typography>;
    }

    return <Grid container xs={12} spacing={1}>{content}</Grid>;
}
