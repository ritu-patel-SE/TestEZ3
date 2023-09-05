import React from 'react'
import styles from './button.module.css'

export const ButtonComponent = ({ text }) => {
  return (
    <div className={styles.card}>
      Example Component: {text}
    </div>
  )
}
