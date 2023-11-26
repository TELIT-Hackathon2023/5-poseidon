import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated } from '../../store/autentificateSlice';

import './loginForm.scss';

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleLogin = (values, resetForm) => {
        console.log(JSON.stringify(values, null, 2));

        const apiUrl = 'http://147.232.153.206:5000/api/auth/login';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);

                // Зберігаємо токен та, можливо, car у локальному сховищі
                localStorage.setItem('authToken', data.accessToken);
                localStorage.setItem('car', data.car);

                // Викликаємо setIsAuthenticated для оновлення стану
                dispatch(setIsAuthenticated());
            })
            .catch(error => {
                console.error('Error:', error);
            });

        // Очистити форму
        resetForm();
    };

    return (
        <div className='container'>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Incorrect email address')
                        .required('Required field'),
                    password: Yup.string()
                        .required('Required field')
                        .min(6, 'Minimum 6 characters'),
                })}
                onSubmit={(values, { resetForm }) => handleLogin(values, resetForm)}>

                <Form className="form">
                    <h2>Login Form</h2>
                    <label htmlFor="email">Your email</label>
                    <Field
                        id="email"
                        name="email"
                        type="email" />
                    <ErrorMessage className="error" name="email" component="div" />

                    <label htmlFor="password">Your password</label>
                    <Field
                        id="password"
                        name="password"
                        type="password" />
                    <ErrorMessage className="error" name="password" component="div" />

                    <button type="submit">Login</button>

                    <p>Don't have an account? <Link to="/register">Register here</Link>.</p>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginForm;