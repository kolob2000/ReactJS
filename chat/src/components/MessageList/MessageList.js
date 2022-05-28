import styles from "./MessageLIst.module.scss"
import {TextField, Button, Alert} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import {useEffect, useRef, useState} from "react";

export const MessageList = ({messageList, setMessageList}) => {
    const BOT_MESSAGE = {user: 'Bot', text: 'Message typed by bot'};
    const [userMessage, setUserMessage] = useState({user: 'User', text: ''})
    const InputRef = useRef(null)
    const MessageListRef = useRef(null)
    const messageListDiv = document.querySelector('#messageListDiv')
    useEffect(() => InputRef.current?.firstChild?.firstChild?.focus())
    useEffect(() => {
        let timerId = null;
        if (MessageListRef.current) {
            MessageListRef.current.scrollTo(0, MessageListRef.current.scrollHeight);
        }
        if (messageList[messageList.length - 1]?.['user'] === 'User') {
            timerId = setTimeout(() => {
                setMessageList(prevState => [...prevState, {...BOT_MESSAGE, id: Date.now()}])
            }, 2000)
        }
        return () => clearInterval(timerId);

    }, [messageList])
    const handleSetMessage = (e) => {
        setUserMessage(prevState => {
            return {
                ...prevState,
                text: e.target.value
            }
        })
    }
    const handleSendMessage = (e) => {
        if (userMessage.text !== '') {
            setMessageList(prevState => [...prevState, {...userMessage, id: Date.now()}])
            setUserMessage(prevState => {
                return {
                    ...prevState,
                    text: ''
                }
            })


        }

    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSendMessage()
    }

    return (
        <div ref={MessageListRef} className={styles.message_list}>
            {messageList.map((item, index) => {
                return (
                    <ul key={item.id} className={styles.display_message}
                        style={item.user === 'Bot' ? {float: "right"} : {float: "left"}}>
                        <li className={styles.user_name}>{item.user}</li>
                        <li>{item.text}</li>
                    </ul>
                )
            })}

            <div className={styles.send_message}>
                <TextField ref={InputRef}
                           value={userMessage.text}
                           onKeyDown={handleKeyDown}
                           onChange={handleSetMessage}
                           className={styles.message_input} size={"small"} variant="standard"
                           placeholder='Введите текст...'/>
                <Button onClick={handleSendMessage}><SendIcon color={"warning"}/></Button>
            </div>

        </div>
    )

}
