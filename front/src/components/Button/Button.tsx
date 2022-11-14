import { FC } from 'react'
import styles from './Button.module.css'

export interface ButtonProps {
  label: string
  onClick: () => void
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.buttonText}>{label}</span>
    </button>
  )
}
