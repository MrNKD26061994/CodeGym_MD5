import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {login} from "../../../services/userService";
import {toast} from "react-toastify";
import {Field, Form, Formik} from "formik";
import {addBlog} from "../../../services/blogsService";

export default function AddBlog() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => {
        return state.user.currentUser
    })
    const handleAdd = async (values, { resetForm }) => {
        let data = {...values, user: {id: user.id}}
        await dispatch(addBlog(data))
        navigate('/home')
    }
    return (
        <>
            <div className="row">
                <div className="col-4 offset-4">
                    <h1 style={{textAlign: 'center'}}>Create Blog</h1>
                    <Formik initialValues={{title:'', content:''}} onSubmit={(values,formikBag) => {
                        handleAdd(values, formikBag);
                    }}>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Title</label>
                                <Field name={'title'} type="text" className={'form-control'} id='exampleInputEmail1' aria-describedby='emailHelp' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Content</label>
                                <Field name={'content'} type="text" className={"form-control"} id="exampleInputPassword1" />
                            </div>
                            <div className="form-group form-check">
                                <Field type="checkbox" className={"form-check-input"} id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button style={{width: '100%', borderRadius: '5px'}} type="submit" className="btn btn-primary">Submit</button>
                            <Link to={'register'} style={{textDecoration: 'none', color: 'white'}}>
                                <button style={{width: '100%', borderRadius: '5px', marginTop: '16px'}} type="submit" className="btn btn-secondary">Cancel</button>
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