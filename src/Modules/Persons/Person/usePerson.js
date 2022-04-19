import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';

const URL = 'https://swapi.dev/api/people/';

const usePerson = ({id}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const fetchPerson = useCallback(() => {
        setLoading(true);
        const path = [URL, id].join('');
        axios.get(path)
            .then((res) => {
                const {name, height, mass, hair_color, eye_color, birth_year, gender} = res.data; 
                setData({
                    name,
                    height: height,
                    mass: mass,
                    hairColor: hair_color,
                    eyeColor: eye_color,
                    birthYear: birth_year,
                    gender: gender
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

export default usePerson;