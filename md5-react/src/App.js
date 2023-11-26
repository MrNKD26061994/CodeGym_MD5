import './App.css';
import Demo from "./demoComponent";
import DemoClass from "./DemoClass";
import DemoCallback from "./demoCallback";
import {Link, Route, Routes} from "react-router-dom";
import Register from "./Routes/Register";
import Login from "./Routes/Login";

function App() {
  return (
    <>
        <Link to={'/login'}><h2>Login</h2></Link>
        <Link to={'/register'}><h2>Register</h2></Link>

        <Routes>
            <Route path={'login'} element={<Login></Login>}></Route>
            <Route path={'register'} element={<Register></Register>}></Route>
        </Routes>
    </>
  );
}

// JSX: công nghệ viết được JS trong HTML. Chỉ quy tắc viê trong () 1 thẻ HTML
export default App;
