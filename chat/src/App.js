import styles from "./App.module.scss"
import mes_style from "../src/components/Message.module.scss"
import Message from "./components/Message";
import {useEffect, useRef, useState} from "react";


function App() {
    const [messageList, setMessageList] = useState([]);
    const botMessage = {'name': 'Bot', 'text': 'Hello i\'m Bot'};
    const [userMessage, setUserMessage] = useState('');
    const messageScroll = useRef(null);
    useEffect(() => {

        if (messageList.length !== 0) {
            if (messageList[messageList.length - 1]['name'] !== 'Bot') {
                setTimeout(() => {
                    setMessageList(prevState => {
                        return [...prevState, botMessage]
                    })
                }, 1500)
            }

        }
        const app = document.querySelector('#root');

        app.scrollIntoView({block: "end", behavior: "smooth"});


    }, [messageList])

    const sendMessage = ((message) => {
        if (message.text !== '') {
            setMessageList(prevState => {
                return [...prevState, message]
            })
        }
    })
    const handleChangeMessage = (event) => {
        setUserMessage(event.target.value)
    }
    return (
        <div ref={messageScroll} className={styles.App}>
            <h1 style={{
                width: '100%',
                textAlign: 'center',
                position: "sticky",
                top: '0',
                color: "#ddce6b",
                background: "black"
            }}>Chat Bot</h1>
            <div style={{flexGrow: '1', width: '100%', display: 'flex', flexDirection: 'column'}}>

                <Message messageList={messageList}/>
            </div>
            <div className={styles.sticky_form} action="">
                <input type="text" placeholder={'Сообщение'}
                       onChange={event => handleChangeMessage(event)}/>
                <button onClick={() => {
                    sendMessage({'name': 'user', 'text': userMessage})
                }} type={"button"}>Отправить
                </button>
            </div>
        </div>
    );
}

export default App;
