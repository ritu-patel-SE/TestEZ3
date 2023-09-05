import React from 'react'
import styles from './button.module.css'

export const ButtonComponent = ({ text, description }) => {
  return <div className={styles.card}> Product number: {text} Product number: {description} </div>
}
