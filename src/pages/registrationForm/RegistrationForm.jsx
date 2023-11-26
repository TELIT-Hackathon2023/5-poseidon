import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import './registrationForm.scss';

const RegistrationForm = () => {
    return (
        <div className='container'>
            <Formik
                initialValues={{
                    email: '',
                    car: '',
                    password: ''
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Incorrect email address')
                        .required('Required field'),
                    car: Yup.string()
                        .min(4, 'Minimum 4 symbols')
                        .max(10, 'Maximum 10 symbols')
                        .required('Required field'),
                    password: Yup.string()
                        .required('Required field')
                        .min(6, 'Minimum 6 characters'),
                })}
                onSubmit={(values, { resetForm }) => {
                    console.log(JSON.stringify(values, null, 2));

                    // Однак це лише фронтенд, і логіку реєстрації слід виконувати на бекенді
                    const apiUrl = 'http://147.232.153.206:5000/api/auth/register';

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
                            // Ваші подальші дії після успішної відправки даних
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            // Ваші подальші дії в разі помилки
                        });

                    // Очистити форму
                    resetForm();
                }}>

                <Form className="form">
                    <h2>Registration Form</h2>
                    <label htmlFor="email">Your email</label>
                    <Field
                        id="email"
                        name="email"
                        type="email" />
                    <ErrorMessage className="error" name="email" component="div" />

                    <label htmlFor="car">Car number</label>
                    <Field
                        id="car"
                        name="car"
                        type="text"
                        transform={(value) => value.toUpperCase()} />
                    <ErrorMessage className="error" name="car" component="div" />

                    <label htmlFor="password">Your password</label>
                    <Field
                        id="password"
                        name="password"
                        type="password" />
                    <ErrorMessage className="error" name="password" component="div" />

                    <button type="submit">Register</button>
                    <p>Already have an account? <Link to="/">Login here</Link>.</p>
                </Form>
            </Formik>


        </div>
    )
}

export default RegistrationForm;