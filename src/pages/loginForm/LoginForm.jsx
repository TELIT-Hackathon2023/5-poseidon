import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import './loginForm.scss';

const LoginForm = ({ onLogin }) => {
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
                onSubmit={(values, { resetForm }) => {
                    console.log(JSON.stringify(values, null, 2));
                    // Ваша логіка для обробки логіну

                    // Очистити форму
                    resetForm();
                    // Викликати функцію для зміни стану батьківського компонента
                    onLogin();
                }}>

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
    )
}

export default LoginForm;