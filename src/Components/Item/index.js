import React, {useState} from 'react'
import classes from './Item.module.css'
import Transcript from '../Transcript'


const Item = ({index, item, handleValue, handleName, remove}) => { 
    const [visible, setVisible] = useState(false)
    
    const total = () => item.value.reduce((res, i) => res += i.value ? i.value : i, 0)
    return (
    <React.Fragment>
        <div className = {classes.Item}>
            <div className = {classes.name}>
                <span>{index + 1} &ensp;</span>
                <input 
                    value = {item.name}
                    onChange = {(e) => handleName(index, e.target.value)}
                />
            </div>
            <div className = {classes.value}>
                <span onClick = {() => setVisible(!visible)} >+</span>
                <p>{total()}</p>
                <span onClick = {() => remove(item.id)}>&times;</span>
            </div>
        </div> 
        { visible ? 
            <Transcript 
                handleValue = {handleValue}
                index = {index}
                item = {item}
        /> : null}
    </React.Fragment>)
}      

export default Item
