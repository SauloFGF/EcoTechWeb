import styles from './Button.module.css'

const Button = ({ children, ...props  } :React.ComponentProps<'button'> ) => {
  return (
    <button {...props} className={styles.button}>{children}</button>
  )
}

export default Button
