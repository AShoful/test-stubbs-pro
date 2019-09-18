import React from 'react'
import Item from '../Item'
import classes from './ListItems.module.css'

const ListItems = ({items, onremove, handleName, handleValue}) => 
    <div className = {classes.ListItems}>
        {items.store.map((item, index) => 
        <Item key = {item.id}
            remove = {onremove} 
            handleValue = {handleValue}
            handleName = {handleName}
            item = {item} 
            index = {index}
            />)}
    </div>
   
export default ListItems    

