import styles from './Form.module.css'

type IInputTypes = React.ComponentProps<'input'> & {
  label?: string;
  span?: string;
}

const Input = ({ label, span, ...props }: IInputTypes) => {
  return <input {...props} className={styles.inputBox} />
};

export default Input;
