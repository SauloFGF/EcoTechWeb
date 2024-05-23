import styles from './Input.module.css'

type IInputTypes = React.ComponentProps<'input'> & {
    label?: string;
    span?: string;
}

const Input = ({ label, span, ...props }: IInputTypes) => {
  return <div className={styles.inputBox}>
    {label && <label>{label}</label>}
    <input {...props} />
    {span && <span>{span}</span>}
  </div>;
};

export default Input;
