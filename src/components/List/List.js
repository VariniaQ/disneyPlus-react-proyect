import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function List() {
    const navigate = useNavigate();

    useEffect(() => {

        if (!localStorage.getItem('token')) {
            navigate('/')
        }
    }, []);

    return (
        <h2>I'm a list, u know?</h2>
    )
}

export default List;