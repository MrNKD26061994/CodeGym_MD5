import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export default function Navbar() {
    const dispatch = useDispatch;
    const navigate = useNavigate();

    const user = useSelector(state => {
        return state.user.currentUser
    })

    function handleLogout() {
        localStorage.clear()
    }

    function handleLogin() {
        navigate('/')
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className={"navbar-brand"} to={"/home"}>Logo</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                {user != null ?
                                    <li className="nav-item active">
                                        <Link className={"nav-link"} to={"/home/add-blog"}>Add new Blog <span className="sr-only">(current)</span></Link>
                                    </li>
                                    : ''}
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                        </div>

                        <form className="form-inline my-2 my-lg-0">
                            {/*<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">*/}
                            {user != null ? user.username : ''}
                            {user != null ?
                                <button onClick={handleLogout} className="ml-3 btn btn-outline-danger my-2 my-sm-0" type="submit">Logout</button>
                                : <button onClick={handleLogin} className="ml-3 btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>}

                        </form>
                    </nav>
                </div>
            </div>
        </>
    )
}