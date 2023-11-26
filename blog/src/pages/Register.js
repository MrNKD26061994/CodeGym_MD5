import {Link} from "react-router-dom";

export default function Register() {
    return (
        <>
            <div className="row">
                <div className="col-4 offset-4">
                    <h1 style={{textAlign: 'center'}}>Register</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email/Uername</label>
                            <input type="email" className={'form-control'} id='exampleInputEmail1' aria-describedby='emailHelp' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className={"form-control"} id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">RePassword</label>
                            <input type="password" className={"form-control"} id="exampleInputPassword1" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className={"form-check-input"} id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button style={{width: '100%', borderRadius: '5px'}} type="submit" className="btn btn-primary">Submit</button>
                        <Link to={'/'} style={{textDecoration: 'none', color: 'white'}}>
                            <button style={{width: '100%', borderRadius: '5px', marginTop: '16px'}} type="submit" className="btn btn-secondary">Cancel</button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}