import React, { useDebugValue } from "react"
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux"
import {actionCreators} from "../redux/index"


function Logcheck() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const {changeuser, changetonull} = bindActionCreators(actionCreators, dispatch);

    console.log(state);

    function logoutprocess(){
        changetonull();
    }


    if (state.account != null) {
        return (
            <>
                <a href="#">{state.account}</a>
                <a onClick= {logoutprocess} href="/">Logout</a>
                
            </>
            )
    }
    else {
        return (
            <>
                <a href="/login" >SIGN IN </a><span>|</span>
                <a href="/register">SIGN UP</a><span>|</span>
            </>
        )
    }
}

export default Logcheck;