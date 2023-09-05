import React from 'react'
import styles from './button.module.css'

export const ButtonComponent = ({ text, description }) => {
  return  <div className={styles.card}> <h4>Product number: {text}</h4> <p>Product number: {description} </p></div>
}
