import React, {useState} from 'react'
import classes from './Transcript.module.css'  

const Transcript = ({ handleValue, index, item}) => {
    const [value, setValue] = useState(0)
    console.log(value)
    return <React.Fragment> 
        {item.value.map((it, i) => it ? 
        <div className = {classes.history}
            key = {i}> 
            <span> {it.id ? new Date(it.id).toLocaleString().split(", ")[0] : '01.01.2019'}</span> 
            <span>{it.value ? it.value : it}</span>
        </div> : 
        null)}
        <div className = {classes.Transcript} >
            <button 
            onClick = {() => {handleValue(index, parseFloat(value)); setValue(0)} }
            disabled = {!parseFloat(value)}
            >добавить</button> 
            <input
            type = 'text'
            onChange = {(e) => setValue(e.target.value)}
            value = {value}
            />
        </div>
    </React.Fragment>
}   



export default Transcript
