import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { useState, forwardRef } from 'react'; // This is a HOOK
import { Navigate } from 'react-router-dom';

import SetLogin from '../../services/Login.services';

import './Login.css'

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {

    // useState return an array with 2 positions, so I declared a variable in this way:
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // state for token
    const [token, setToken] = useState();

    // state for message (snackbar from material ui)
    const [showMessage, setShowMessage] = useState({
        status: false,
        message: '',
        type: ''
    });

    // destructuring ShowMessage 
    const { status, message, type } = showMessage;

    const handleSubmit = (e) => {
        e.preventDefault();
        SetLogin(formData)
            .then((res) => {
                console.log("Success user login")
                // setting a value to user token
                setToken(res.data.token)

                setShowMessage({
                    status: true,
                    message: 'User login successful!',
                    type: 'success'
                })

                const token = res.data.token;
                localStorage.setItem('token', token)


            })
            .catch((err) => {
                console.log("Error while user try to login")
                setShowMessage({
                    status: true,
                    message: "Password or email is not valid",
                    type: 'error'
                })
            })
            .finally(() => {
                console.log("Login process end")
            })
    }

    const handleClose = () => {
        setShowMessage({
            ...showMessage,
            status: false
        })
    }

    const handleChange = (e) => {
        console.log(e.target.name);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            {token && <Navigate to="/" />}
            <div className='form'>
                <h2>Login</h2>
                <ValidatorForm onSubmit={handleSubmit}>
                    <TextValidator
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        validators={['required', 'isEmail']}
                        errorMessages={['Email is required', 'Email is not valid']}
                    />
                    <br />
                    <TextValidator
                        id="standard-basic"
                        label="Password"
                        variant="standard"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        validators={['required']}
                        errorMessages={['Password is required']}
                    />
                    <br />
                    <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </ValidatorForm>

                <Snackbar open={status} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={type} >
                        {message}
                    </Alert>
                </Snackbar>
            </div>
        </>

    )
}

export default Login;