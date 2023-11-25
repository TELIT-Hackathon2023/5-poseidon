import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './registrationForm.scss';

const RegistrationForm = () => {
    return (
        <div className='container'>
            <Formik
                initialValues={{
                    email: '',
                    carNumber: '',
                    password: ''
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Incorrect email address')
                        .required('Required field'),
                    carNumber: Yup.string()
                        .min(4, 'Minimum 4 symbols')
                        .max(10, 'Maximum 10 symbols')
                        .required('Required field'),
                    password: Yup.string()
                        .required('Required field')
                        .min(6, 'Minimum 6 characters'),
                })}
                onSubmit={(values, { resetForm }) => {
                    console.log(JSON.stringify(values, null, 2));
                    // Ваш логіка для обробки введених даних

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

                    <label htmlFor="carNumber">Car number</label>
                    <Field
                        id="carNumber"
                        name="carNumber"
                        type="text"
                        transform={(value) => value.toUpperCase()} />
                    <ErrorMessage className="error" name="carNumber" component="div" />

                    <label htmlFor="password">Your password</label>
                    <Field
                        id="password"
                        name="password"
                        type="password" />
                    <ErrorMessage className="error" name="password" component="div" />

                    <button type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    )
}

export default RegistrationForm;