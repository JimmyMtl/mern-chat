import React, {useContext} from 'react';
import style from "./ChatMessage.module.scss";
import AuthContext from "../../context/auth/AuthContext";

const ChatMessage = ({messageObject: {message, from, avatar}}) => {
    const {auth} = useContext(AuthContext)
    console.log('from', from)
    return (
        <div
            className={`${style.containerRow} ${from?.username === auth?.username ? style.userMessage : ''}`}>
            <div className={style.containerAvatar}>
                <img src={avatar || "/logo192.png"} alt="le"/>
            </div>
            <div className={style.containerMessageUserlabel}>
                <span className={style.userLabel}>{from?.username}</span>
                <div className={style.message}>
                    {message}
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;