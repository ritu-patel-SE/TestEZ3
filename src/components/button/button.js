import React from 'react'
import styles from './button.module.css'

export const ButtonComponent = ({ text }) => {
  return <div className={styles.buttontest}>Example Component: {text}</div>
}
