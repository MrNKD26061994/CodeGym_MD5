import './App.css';
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
// import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ListStudent from "./pages/students/ListStudent";
import CreateStudent from "./pages/students/CreateStudent";
import EditStudent from "./pages/students/EditStudent";
import MountAndUnmount from "./Demo/MountAndUnmount";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "./Redux/action";
import Navbar from "./BootstrapVD6/component/Navbar";
import Login from "./BootstrapVD6/pages/Login";
import Register from "./BootstrapVD6/pages/Register";
import Home from "./BootstrapVD6/pages/home/Home";
import ListBlog from "./BootstrapVD6/pages/home/blog/ListBlog";
import AddBlog from "./BootstrapVD6/pages/home/blog/AddBlog";
import {getBlogs} from "./BootstrapVD6/services/blogsService";

function App() {
    // let [isShow, setIsShow] = useState(true);
    // let [pr, setPr] = useState(0);

    const dispatch = useDispatch();
    const blogs = useSelector(state => {
        console.log(state)
        return state;
    })

    useEffect(() => {
        dispatch(getBlogs());
    },[])

    // Redux
    // const x = useSelector(state => {
    //     return state;
    // })
    // const dispatch = useDispatch();
    return (
        <>
            {/*<Demo></Demo>*/}

            {/*Mount & Unmount*/}
            {/*<button onClick={() => {*/}
            {/*    setIsShow((!isShow));*/}
            {/*}}>Show</button>*/}
            {/*<button onClick={() => {*/}
            {/*    setPr((pr++));*/}
            {/*}}>Change</button>*/}
            {/*{isShow && <MountAndUnmount x={pr}></MountAndUnmount>}*/}

            {/*Function component*/}
            {/*<FComponent></FComponent>*/}

            {/*Routes*/}
            {/*<Routes>*/}
            {/*    <Route path={'/'} element={<Home></Home>}>*/}
            {/*        <Route path={'/'} element={<ListStudent />}>*/}
            {/*            <Route path={'/edit-students/:id'} element={<EditStudent />}></Route>*/}
            {/*        </Route>*/}
            {/*        <Route path={'/create-student'} element={<CreateStudent />}></Route>*/}
            {/*        <Route path={'/edit-student/:id'} element={<EditStudent />}></Route>*/}
            {/*    </Route>*/}
            {/*    <Route path={'/admin'} element={<Admin></Admin>}/>*/}
            {/*</Routes>*/}

            {/*Redux*/}
            {/*<button onClick={() => {*/}
            {/*    dispatch(getData())*/}
            {/*}}>Test</button>*/}

            {/*Add bootstrap*/}
            <div className= 'container-fluid'>
                {/*<Login></Login>*/}
                <Routes>
                    <Route path={''} element={<Login></Login>} />
                    <Route path={'/register'} element={<Register></Register>} />
                    <Route path={'/home'} element={<Home></Home>}>
                        <Route path={''} element={<ListBlog></ListBlog>} />
                        <Route path={'add-blog'} element={<AddBlog></AddBlog>} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
