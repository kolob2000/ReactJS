import styles from "./Message.module.scss"

const Message = (props) => {
    return (
        <>
            {props.messageList.map((item) => {
                return (
                    <ul className={styles.message_ul}
                        style={item.name === 'Bot' ? {alignSelf: 'flex-end'} : {alignSelf: "flex-start"}}>
                        <li style={{fontWeight:"600", textTransform:"capitalize"}}>{item.name}&nbsp;:</li>
                        <li>{item.text}</li>
                    </ul>
                )
            })}
        </>
    )

}
export default Message;