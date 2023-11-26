import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../services/userService";
import {Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async (values, { resetForm }) => {
        dispatch(login(values)).then((res) => {
            if(res.type === 'user/login/rejected'){
                navigate('/')
                toast.error("Login fail!");
                resetForm();
            } else {
                toast.success("Login successful!");
                navigate('/home')
            }
        })
    }
    return (
        <>
            <div className="row">
                <div className="col-4 offset-4">
                    <h1 style={{textAlign: 'center'}}>Login</h1>
                    <Formik initialValues={{username:'', password:''}} onSubmit={(values,formikBag) => {
                        handleLogin(values, formikBag);
                    }}>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email/Uername</label>
                                <Field name={'username'} type="text" className={'form-control'} id='exampleInputEmail1' aria-describedby='emailHelp' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <Field name={'password'} type="password" className={"form-control"} id="exampleInputPassword1" />
                            </div>
                            <div className="form-group form-check">
                                <Field type="checkbox" className={"form-check-input"} id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button style={{width: '100%', borderRadius: '5px'}} type="submit" className="btn btn-primary">Submit</button>
                            <Link to={'register'} style={{textDecoration: 'none', color: 'white'}}>
                                <button style={{width: '100%', borderRadius: '5px', marginTop: '16px'}} type="submit" className="btn btn-secondary">Register</button>
                            </Link>
                            <Link to={'home'} style={{textDecoration: 'none', color: 'white'}}>
                                <button style={{width: '100%', borderRadius: '5px', marginTop: '16px'}} type="submit" className="btn btn-success">Home</button>
                            </Link>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}