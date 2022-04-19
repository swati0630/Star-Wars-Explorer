import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';

const URL = 'https://swapi.dev/api/starships/';

const useStarShip = ({id}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const fetchPerson = useCallback(() => {
        setLoading(true);
        const path = [URL, id].join('');
        axios.get(path)
            .then((res) => {
                const {name, model, manufacturer, length, crew, passengers, consumables} = res.data; 
                setData({name, model, manufacturer, length, crew, passengers, consumables});
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

export default useStarShip;