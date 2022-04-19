import useStarShips from './useStarShips';
import Card from '../../Components/Card';
import {Typography, Grid } from '@mui/material';
import RocketIcon from '@mui/icons-material/Rocket';
import { useMemo } from 'react';


export default function StarShips(props) {
    const {data, loading, error} = useStarShips();

    const content = useMemo(() => {
        if (loading) {
            return Array.from({length: 12}).map((_, index) => (
                <Grid item key={`skeleton-${index}`} xs={4}>
                    <Card loading={loading}>
                        <RocketIcon />
                    </Card>
                </Grid>
            ));
        }
        return data.map(({name, id}) => (
            <Grid item key={name} xs={4}>
                <Card title={name} id={id}>
                    <RocketIcon />
                </Card>
            </Grid>
        ));
    }, [data, loading]);

    if (error) {
        return <Typography>Unable to fetch StarShips</Typography>;
    }

    return <Grid container xs={12} spacing={1}>{content}</Grid>;
}
