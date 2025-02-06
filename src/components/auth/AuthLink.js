
import { useAuth } from "../../context/AuthContext";
import {Link} from 'react-router-dom';

const AuthLink = () => {
    const {handleLogout, isLogin} = useAuth();

    if(isLogin){
        return (<a className="nav-link" onClick={handleLogout}>Logout</a>);
    }
    return (
        <Link className="nav-link" to="/auth/login">Login</Link>
    );
};


export default AuthLink;