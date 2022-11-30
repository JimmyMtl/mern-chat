import React, {useContext} from 'react';
import style from './UserList.module.scss'
import UserItem from "../UserItem/UserItem";
import AuthContext from "../../context/auth/AuthContext";

const usersList = [
    {
        username: "Me",
        avatar: ''
    },
    {
        username: "You",
        avatar: ''
    }
]
const UserList = () => {
    const {auth} = useContext(AuthContext)

    return (
        <div className={style.container}>
            Connected as <b>{auth.username}</b>
            {usersList?.map((user, key) => (
                <UserItem key={key} userObject={user}/>)
            )}
        </div>
    );
};

export default UserList;