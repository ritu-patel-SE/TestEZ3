import React from 'react'
import styles from './button.module.css'

export const ButtonComponent = ({ text,description }) => {
  return (
    <div className={styles.card}>
      Product Number: {text}
      Description: {description}
    </div>
  )
}
