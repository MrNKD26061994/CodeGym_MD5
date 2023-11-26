import {Field, Form, Formik} from "formik";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editBlog, getBlogByID} from "../../../services/blogsService";
import {useEffect} from "react";


export default function EditBlog() {
    const user = useSelector(state => {
        return state.user.currentUser
    })
    const blog = useSelector(state => {
        // console.log(state)
        return state.blog.blog
    })

    const navigate = useNavigate();

    const {id} = useParams()

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogByID(id))
    },[])

    const handleEdit = async (values, { resetForm }) => {
        let data = {...values, user: {id: user.id}}
        await dispatch(editBlog({id: id, data: data}))
        navigate('/home')
    }
    return (
        <>
            <div className="row">
                <div className="col-4 offset-4">
                    <h1 style={{textAlign: 'center'}}>Edit Blog</h1>
                    <Formik initialValues={{title: blog.title, content: blog.content}} enableReinitialize={true} onSubmit={(values,formikBag) => {
                        handleEdit(values, formikBag);
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