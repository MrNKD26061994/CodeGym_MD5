import {useEffect, useState} from "react";

export default function FComponent() {
    // Hook: dùng state và life cycle trong function component
    let [list, setList] = useState([{
        name: "A",
        age: 23
    },
        {
            name: "B",
            age: 29
        }]);
    let [name, setName] = useState("");
    let [age, setAge] = useState('');
    // userState thay thế State trong class Component
    // userEffect thay thế life cycle (vòng đời) trong class Component
    useEffect(() => {
        console.log(1) //Chạy liên tục sau khi re-render
        return () => {
            console.log(5) // chạy một lần trước ky unmount
        }
    }, []); // Có [] chỉ chạy một lần sau render
                // Có giá trị trong [] chỉ chạy khi giá trị dó thay đổi
    return (
        <>
            <h1>Hello</h1>
            {list.map((item, index) => (
                <h2 key={index}>{item.name}, {item.age}</h2>
            ))}

            <input type="text" name={'inputName'} value={name} onChange={(e) => {
                setName(e.target.value)
            }}/>
            <input type="text" name={'inputAge'} value={age} onChange={(e) => {
                setAge(e.target.value)
            }}/>
            <button onClick={() => {
                setList([...list, {name: name, age: age}])
            }}>Add</button>
        </>
    )
}