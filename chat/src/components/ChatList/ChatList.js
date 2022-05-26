import React, {useState} from "react";
import styles from "./ChatList.module.scss"

export const ChatList = () => {
    const [chatList, setChatList] = useState([
        {id: 1, title: 'Chat 1', message: 'message'},
        {id: 2, title: 'Chat 2', message: 'message'}
    ])
    return (
        <div className={styles.chat_list}>
            {chatList.map((item) => {
                return (<div key={item.id} className={styles.chat}>
                    <h3 className={styles.chat_heading}>{item.title}</h3>
                    <span className={styles.last_message}>{item.message}</span>
                </div>)
            })}


        </div>
    );
}