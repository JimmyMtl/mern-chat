import React from 'react';
import style from "./UserItem.module.scss"

const UserItem = ({userObject: {username, avatar}}) => {
    return (
        <button type={"button"} className={style.container}>
            <div className={style.logoContainer}>
                <img src={avatar || "/logo192.png"} alt=""/>
            </div>
            <span>{username}</span>
        </button>
    );
};

export default UserItem;