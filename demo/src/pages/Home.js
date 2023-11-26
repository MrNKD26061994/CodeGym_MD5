import Header from "../Component/Header";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import {Link, Outlet} from "react-router-dom";

export default function Home() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <Link to={'/'}>List Student</Link> |
            <Link to={'/create-student'}>Add Student</Link> |
            <Link to={'/edit-student/1'}>Edit Student</Link> |
            <hr/>
            <Outlet></Outlet>
            <hr/>
            <Footer></Footer>
        </>
    )
}