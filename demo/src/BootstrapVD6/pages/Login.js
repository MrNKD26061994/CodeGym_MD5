import {Link} from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="row">
                <div className="col-4 offset-4">
                    <h1 style={{textAlign: 'center'}}>Login</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email/Uername</label>
                            <input type="email" className={'form-control'} id='exampleInputEmail1' aria-describedby='emailHelp' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className={"form-control"} id="exampleInputPassword1" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className={"form-check-input"} id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button style={{width: '100%', borderRadius: '5px'}} type="submit" class="btn btn-primary">Submit</button>
                        <button style={{width: '100%', borderRadius: '5px', marginTop: '16px'}} type="submit" class="btn btn-secondary">
                            <Link to={'register'} style={{textDecoration: 'none', color: 'white'}}>Register</Link>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}