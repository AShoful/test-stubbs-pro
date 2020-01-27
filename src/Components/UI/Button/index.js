import React from 'react'
import classes from './Button.module.css'

const Button = props => {
  const cls = [classes.Button, classes[props.type], classes[props.size]]
  return <button
      onClick={props.onClick}
      className={cls.join(' ')}
      disabled={props.disabled}
    >
      {props.children}
    </button>
}

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  type: 'primary',
  size: 'main'
}

export default Button