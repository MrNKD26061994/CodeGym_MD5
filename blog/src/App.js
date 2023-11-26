import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import ListBlog from "./pages/home/blog/ListBlog";
import AddBlog from "./pages/home/blog/AddBlog";
import {ToastContainer} from "react-toastify";
import EditBlog from "./pages/home/blog/EditBlog";

function App() {

  return (
    <>
      <div className= 'container-fluid'>
        <ToastContainer />
        <Routes>
          <Route path={''} element={<Login></Login>} />
          <Route path={'/register'} element={<Register></Register>} />
          <Route path={'/home'} element={<Home></Home>}>
            <Route path={''} element={<ListBlog></ListBlog>} />
            <Route path={'add-blog'} element={<AddBlog></AddBlog>} />
            <Route path={'edit-blog/:id'} element={<EditBlog></EditBlog>} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
