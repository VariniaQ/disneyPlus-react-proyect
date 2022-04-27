import { Navigate } from 'react-router-dom';

function List() {

    let token = localStorage.getItem('token');

    return (
        <>
            {!token && <Navigate to="/login" />}
            <h2>I'm a list, u know?</h2>
        </>
    )
}

export default List;