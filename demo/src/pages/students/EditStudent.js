import {useNavigate, useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import {useEffect, useState} from "react";

export default function EditStudent() {

    const {id} = useParams();
    const navigate = useNavigate()
    const [student, setStudent] = useState({});
    useEffect(() => {
        axios.get('http://localhost:3000/students/' + id).then(res => {
            setStudent({
                name: res.data.name,
                description: res.data.description,
                action: res.data.action,
            })
        })
    }, []);
    return (
        <>
            <h1>Edit Student</h1>
            <Formik
                initialValues={{
                    name: student.name,
                    description: student.description,
                    action: student.action
                }}
                enableReinitialize={true}
                onSubmit={(values) => {
                    axios.put('http://localhost:3000/students/' + id, values).then(() => {
                        navigate('/')
                    })
                }}
            >
                <Form>
                    <Field name = {'name'}></Field>
                    <ErrorMessage name={'name'}></ErrorMessage>
                    <Field name = {'description'}></Field>
                    <ErrorMessage name={'description'}></ErrorMessage>
                    <Field name = {'action'}></Field>
                    <ErrorMessage name={'action'}></ErrorMessage>
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )
}