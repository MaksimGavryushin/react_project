import styles from './Message.module.css'

export function Message(props) {
    
    console.log('props', props);
    console.log(styles);
    
    return (
        <h1 className={styles.color}> {props.title} </h1>
    )
}