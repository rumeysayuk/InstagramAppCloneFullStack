import React from 'react';
import {useSelector} from "react-redux";
import SignedIn from "../../components/Navbar/SignedIn/SignedIn";
import SignedOut from "../../components/Navbar/SignedOut/SignedOut";

const SignIn = () => {
    const {authData} = useSelector(state => state.auth);
    return (
        <div>
            {
                authData?(SignedIn):(SignedOut)
            }
        </div>
    )
}

export default SignIn;
