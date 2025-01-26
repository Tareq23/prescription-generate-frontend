import React, { useState } from 'react';
import Signin from "../components/auth/Signin";


const Auth = () => {

    const [showSignin, setShowSignin] = useState(true);

    const handleShow = () => setShowSignin(true);
    const handleClose = () => setShowSignin(false);

    return (
        <div>
            <Signin show={showSignin} handleClose={handleClose} />
        </div>
    );
};

export default Auth;