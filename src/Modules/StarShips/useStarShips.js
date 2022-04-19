import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';

const URL = 'https://swapi.dev/api/starships';
const FIELD_NAME = 'starships';

const useStarShips = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const fetchStarShips = useCallback(() => {
        setLoading(true);
        axios.get(URL)
            .then((res) => {
                const titles = res.data.results.map(({name, url}) => {
                    const id = url.split(FIELD_NAME)[1].split('/')[1];
                    return {name, id};
                })
                setData(titles);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    useEffect(() => fetchStarShips(), []);

    return {data, loading, error}
};

export default useStarShips;