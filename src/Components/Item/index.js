import React from 'react'
import classes from './Item.module.css'
import Input from '../UI/Input'

const Item = ({index, item, handleValue, handleName, remove}) => 
    <div className = {classes.Item}>
        <div className = {classes.name}>
            <span>{index + 1} &ensp;</span>
            <Input 
                value = {item.name}
                onChange = {(e) => handleName(index, e.target.value)}
            />
        </div>
        <div className = {classes.value}>
            <span onClick = {() => remove(item.id)}>X &ensp;</span>
            <Input 
                value = {item.value}
                onChange = {(e) => handleValue(index, e.target.value)}
                size = {'small'}
            />
        </div>    
    </div> 

export default Item
