import {Component} from "react";

export default class Demo extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    name: "A",
                    age: 23
                },
                {
                    name: "B",
                    age: 29
                }
            ],
            inputName: '',
            inputAge: ''
        }
    }

    add = () => {
        this.setState((state) => {
            return {
                list: [...state.list, {name: state.inputName, age: state.inputAge}],
                inputName: '',
                inputAge: '',
            }
        })
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            //     []: tên thuộc tính
        })
    }

    render() {
        return (
            <>
                {this.state.list.map((item, index) => (
                    <h2 key={index}>{item.name}, {item.age}</h2>
                ))}

                <input type="text" name={'inputName'} value={this.state.inputName} onChange={(e) => {
                    this.change(e)
                }}/>

                <br/>

                <input type="text" name={'inputAge'} value={this.state.inputAge} onChange={this.change}/>

                <button onClick={this.add}>Add</button>
            </>
        )
    }
}