import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HomePage from "./common/pages/HomePage/HomePage";

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./common/pages/LoginPage/LoginPage";
import {AuthProvider} from "./common/context/auth/AuthContext";


function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <header className="App-header">
                        <div className={'App-container-logo-title'}>
                            <img src={logo} className={"App-logo"} alt="logo"/>
                            <h1 className="App-title">Welcome to MERN Chat app</h1>
                        </div>
                        <div className="App-container-link">
                            <Link className={"App-link"} to={"/"}>Home</Link>
                            <Link className={"App-link"} to={"/login"}>Sign In</Link>
                        </div>
                    </header>
                    <Routes>
                        <Route exact path={"/"} element={<HomePage/>}/>
                        <Route path={"/login"} element={<LoginPage/>}/>
                    </Routes>
                </div>
                <ToastContainer theme={"dark"}/>
            </Router>
        </AuthProvider>
    );
}

export default App;
