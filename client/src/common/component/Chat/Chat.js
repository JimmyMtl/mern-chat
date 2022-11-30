import React, {useState, useEffect} from 'react';
import style from './Chat.module.scss'
import io from 'socket.io-client'
import axios from 'axios'
import {toast} from 'react-toastify'
import ChatMessage from "../ChatMessage/ChatMessage";

const ENDPOINT = "/"
const socket = io(ENDPOINT);
const Chat = () => {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [messageState, setMessageState] = useState('');
    const [messagesList, setMessagesList] = useState([]);
    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
            toast.success('Connected')
        });

        socket.on('message', (message) => {
            setMessagesList(precList => ([...precList, message]))
        })

        socket.on('disconnect', () => {
            setIsConnected(false);
            toast.error('Disconnected')
        });
        return () => {
            socket.off();
        };
    }, []);
    const fetchBaseMessageList = async () => {
        try {
            const res = await axios.get('/api/message')
            console.log(res)
            setMessagesList(res?.data?.messageList)
        } catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        fetchBaseMessageList()

    }, []);
    const handleSubmit = (e) => {
        e.preventDefault()
        socket.emit('message', {
            message: messageState,
            from: {
                username: 'b',
            },
            to: {
                username: 'a'
            }
        })
    }
    return (
        <div className={style.container}>

            <div className={style.containerChat}>
                {messagesList.map((message, key) => (
                    <ChatMessage key={key} messageObject={message}/>
                ))}
            </div>
            <form className={style.containerFormChat} onSubmit={handleSubmit}>
                <textarea value={messageState} onChange={(e) => setMessageState(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Chat;