import React from 'react'
import styles from './styles.module.css'
import {ButtonComponent} from './components/button/button'

export const ExampleComponent = ({ text }) => {
  return (
    <div className={styles.main}>
      <ButtonComponent text={text}/>
    </div>
  )
}