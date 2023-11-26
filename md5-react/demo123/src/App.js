import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

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

export default App;
