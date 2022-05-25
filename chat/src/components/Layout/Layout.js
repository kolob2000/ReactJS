import {ChatList} from "../ChatList/ChatList";
import React from "react";
import styles from "./Layout.module.scss"
import {MessageList} from "../MessageList/MessageList";

export const Layout = ({ messageList, setMessageList}) => {
    return (
        <div className={styles.layout}>
            <ChatList/>
            <MessageList messageList={messageList} setMessageList={setMessageList}/>

        </div>
    );
}