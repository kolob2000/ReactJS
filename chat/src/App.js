import React, {useState} from "react";
import {Button} from "@mui/material"
import {Header} from "./components/Header/Header";
import {ChatList} from "./components/ChatList/ChatList";
import {Layout} from "./components/Layout/Layout";
import styles from "./App.module.scss"


export const App = () => {
    const [messageList, setMessageList] = useState([]);

    return (
        <div className={styles.main}>
            <Header/>
            <Layout messageList={messageList} setMessageList={setMessageList} st={'hello'}/>
        </div>

    );

}