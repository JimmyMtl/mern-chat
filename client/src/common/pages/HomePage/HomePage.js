import React from 'react';
import style from './HomePage.module.scss'
import Chat from "../../component/Chat/Chat";
import UserList from "../../component/UserList/UserList";

const HomePage = () => {
    return (
        <div className={style.container}>
            <UserList/>
            <Chat/>
        </div>
    );
};

export default HomePage;