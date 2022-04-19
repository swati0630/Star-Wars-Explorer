import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';

const URL = 'https://swapi.dev/api/planets/';

const usePlanet = ({id}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const fetchPerson = useCallback(() => {
        setLoading(true);
        const path = [URL, id].join('');
        axios.get(path)
            .then((res) => {
                const {name, gravity, diameter, rotation_period, surface_water, orbital_period, population} = res.data; 
                setData({
                    name,
                    gravity,
                    diameter,
                    population,
                    rotationPeriod: rotation_period,
                    surfaceWater: surface_water,
                    orbitalPeriod: orbital_period,
                });
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [id]);

    useEffect(() => fetchPerson(), []);

    return {data, loading, error}
};

export default usePlanet;