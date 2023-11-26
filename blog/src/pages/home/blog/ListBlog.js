import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteBlog, getBlogs} from "../../../services/blogsService";
import {Link} from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
export default function ListBlog() {
    const blogs = useSelector(state => {
        return state.blogs.blogs
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogs());
    },[])

    const handleDelete = (id) => {
        confirmAlert({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this blog?',
            buttons: [
                {
                    label: 'Cancel',
                    onClick: () => {}
                },
                {
                    label: 'Delete',
                    onClick: () => dispatch(deleteBlog(id))
                }
            ]
        });
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">Username</th>
                            <th scope="col" colSpan={2}>Acction</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            blogs.map((item, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.title}</td>
                                    <td>{item.content}</td>
                                    <td>{item.user.username}</td>
                                    <td>
                                        <Link className={"nav-link"} to={`/home/edit-blog/` + item.id}>Edit<span className="sr-only">(current)</span></Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}