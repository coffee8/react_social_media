import React from 'react';
import {Form, Field} from "react-final-form";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/AuthReducer";
import {Navigate} from "react-router-dom";
import style from "./Login.module.css"

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
            rememberMe: values.rememberMe
        }))
    }

    return <div className={style.loginPage}>
        <h4 className={style.loginMessage}>Please login</h4>
        <Form onSubmit={onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name={'email'}
                               component={'input'}
                               type={'text'}
                               placeholder={'email'}
                               className={style.field}
                        />
                    </div>
                    <div>
                        <Field name={'password'}
                               component={'input'}
                               type={'password'}
                               placeholder={'password'}
                               className={style.field}/>
                    </div>
                    <div>
                        <label> Remember me: </label>
                        <Field name={'rememberMe'}
                               component={'input'}
                               type={'checkbox'}
                                className={style.fieldCheckbox}
                        />
                    </div>
                    <button name={'submit'} type={'submit'} className={style.button}>Submit</button>
                </form>
            )}
        </Form>
    </div>
}

export default Login;