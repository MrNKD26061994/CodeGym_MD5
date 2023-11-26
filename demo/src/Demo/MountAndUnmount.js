import {Component} from "react";

export default class MountAndUnmount extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(1)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(2)
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(3)
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(4)
    }
    componentWillUnmount() {
        console.log(5)
    }
    render() {
        return (
            <h1>Life</h1>
        )
    }
}