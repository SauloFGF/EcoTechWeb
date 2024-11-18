import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

type IInputTypes = React.ComponentProps<'h1'> & {
  title?: string;
}

const Head = ({ ...props }: IInputTypes) => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
        </Link>
        {props.title ? (
          <Link className={styles.login} to="/conta">
            {props.title}
          </Link>) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>)
        }
      </nav>
    </header>
  )
}

export default Head
