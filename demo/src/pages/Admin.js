import Header from "../Component/Header";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import {Outlet} from "react-router-dom";

export default function Admin() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <h1>Admin page</h1>
            <hr/>
            <Footer></Footer>
        </>
    )
}