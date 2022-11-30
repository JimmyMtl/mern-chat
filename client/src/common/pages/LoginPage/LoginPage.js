import React, {useState, useContext} from 'react';
import style from "./LoginPage.module.scss"
import axios from "axios"
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import AuthContext from "../../context/auth/AuthContext";

const LoginPage = () => {
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post("/api/auth/login", {
            username
        })
        if (res.status === 200) {
            toast.success("Connected")
            dispatch({type: 'SET_USER', payload: res.data})
            navigate("/")
        }
    }
    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id={"username"} name={"username"} value={username}
                           onChange={(e) => setUsername(e?.target?.value)} placeholder={"Your username..."}/>
                    <button>Sign In</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;