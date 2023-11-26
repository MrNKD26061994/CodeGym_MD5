let x = 'NA'
let obj = {
    name: 'A',
    age: 20
}
let list = [
    {
        name: 'A',
        age: 20
    },
    {
        name: 'B',
        age: 21
    }
]
let arr = ['A', 'B', 'C'];

function Demo() {
    return (
        <div>
            {console.log(x)}
            <h1>Hello</h1>
            <h1>{x}</h1>
            <h1>{obj.name}, {obj.age}</h1>
            {arr.map(i => {return <h1>{i}</h1>})}
            {list.map(i => (<h1>{i.name}, {i.age}</h1>))}
        </div>
    )
}

export default Demo;