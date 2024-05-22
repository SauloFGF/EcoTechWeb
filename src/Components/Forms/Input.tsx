import styles from './Input.module.css'
type IInputTypes = React.ComponentProps<'input'> & {
    label: string;
}

const Input = ({label, ...props}: IInputTypes) => {
    return <div className={styles.inputBox}>
        <input {...props}/>
        {props.type == 'text' || props.type == 'password' &&
        <span>{label}</span>
        }
    </div>
}

export default Input;