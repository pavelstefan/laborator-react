import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../store/user.slice';
import { useHistory } from "react-router-dom";

const Auth = () => {
    const email = useRef<any>();
    const password = useRef<any>();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogin = () => {
        if (email.current.value && password.current.value) {
            dispatch(updateProfile({ email: email.current.value, firstName: 'John', lastName: 'Doe' }));
            history.push('/game');
        }
    }

    return (
        <form className="row g-3">
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input ref={email} type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input ref={password} type="password" className="form-control" id="inputPassword4" />
            </div>

            <div className="col-12">
                <button type="button" className="btn btn-primary" onClick={handleLogin}>Sign in</button>
            </div>
        </form>
    );
};

export default Auth;