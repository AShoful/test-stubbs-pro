import React from 'react'
import classes from './Input.module.css'



const Input = props => {
  
  const inputType = props.type || 'text'
  const cls = [classes.Input, classes[props.size]]
  return (
    <div className={cls.join(' ')}>
      <input
        type={inputType}
        value={props.value}
        name = {props.name}
        placeholder = {props.placeholder}
        onChange={props.onChange}
        size = {props.size}
        />
    </div>
  )
}

export default Input