import React, {useState} from 'react'
import classes from './Transcript.module.css'  


const Transcript = ({ handleValue, index}) => {
    const [value, setValue] = useState(0)
    
    return <div className = {classes.Transcript} >
        <span onClick = {() =>
            {handleValue(index, value); setValue(0)} }
            >добавить</span> 
        <input
        type = 'text'
        onChange = {(e) => setValue(e.target.value)}
        value = {value}/>
    </div>
}   



export default Transcript
