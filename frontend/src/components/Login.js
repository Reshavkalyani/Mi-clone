import React, {useState} from "react"
import "../styles/Login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux"
import {actionCreators} from "../redux/index"


const Login = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const {changeuser, changetonull} = bindActionCreators(actionCreators, dispatch);
    
    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const senduser = (data) =>{
        // alert(data);
        changeuser(data);
        console.log(state.account)
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            senduser(res.data.user.name)
            history.push("/")
        })
    }

    return (
        <div className="login">
            <div className="login___container">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div className="or">OR</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
        </div>
    )
}

export default Login;