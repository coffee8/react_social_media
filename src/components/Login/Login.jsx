import React from 'react';
import {Form, Field} from "react-final-form";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/AuthReducer";
import {Navigate} from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth)
    const id = useSelector(state => state.auth.id)

    if (isAuth) {
        return <Navigate to={`/profile/${id}`}/>;
    }

    const onSubmit = (values) => {
        dispatch(login({
            email: values.email,
            password: values.password,
            rememberMe: values.rememberMe}))
    }

    return <div>
        <div>Please login</div>
        <Form onSubmit={onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label> Email: </label>
                        <Field name={'email'}
                               component={'input'}
                               type={'text'}
                               placeholder={'email'}/>
                    </div>
                    <div>
                        <label> Password: </label>
                        <Field name={'password'}
                               component={'input'}
                               type={'password'}
                               placeholder={'password'}/>
                    </div>
                    <div>
                        <label> Remember me: </label>
                        <Field name={'rememberMe'}
                               component={'input'}
                               type={'checkbox'}/>
                    </div>
                    <button name={'submit'} type={'submit'}>Submit</button>
                </form>
            )}
        </Form>
    </div>
}

export default Login;