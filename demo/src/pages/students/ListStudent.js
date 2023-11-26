import {Link, Outlet, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ListStudent() {

    const {state} = useLocation()
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/students').then(res => {
            setList(res.data)
        })
    }, [list]);

    // console.log(state)
    return (
        <>
            <h1>AAAAAAAAAAA</h1>
            <Link to={'/edit-students/1700562285192'}>Edit Student</Link>
            <Outlet></Outlet>
            <h1>BBBBBBBBBBBBBBB</h1>
            <h1>List Student</h1>
            {list.map((item, key) => {
                return (
                    <>
                        <Link to={'/edit-student/' + item.id}><h3 key={key}>{item.name}: {item.description}</h3></Link>
                        <h1>{item.id}</h1>
                        <button onClick={() => {
                            axios.delete('http://localhost:3000/students/' + item.id).then(() => {
                            })
                        }}>Delete</button>
                    </>
                )
            })}
        </>
    )
}