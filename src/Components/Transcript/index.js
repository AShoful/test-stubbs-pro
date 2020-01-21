import React, {useState} from 'react'
import classes from './Transcript.module.css'  

const Transcript = ({ handleValue, index, item}) => {
    const [value, setValue] = useState(0)
    
    return <React.Fragment> 
        {item.value.map((it, i) => it ? 
        <div className = {classes.history}
            key = {i}> 
            <span> {it.id ? new Date(it.id).toLocaleString().split(", ")[0] : '01.01.2019'}</span> 
            <span>{it.value ? it.value : it}</span>
        </div> : 
        null)}
        <div className = {classes.Transcript} >
            <span onClick = {() =>
                {handleValue(index, value); setValue(0)} }
                >добавить</span> 
            <input
            type = 'text'
            onChange = {(e) => setValue(e.target.value)}
            value = {value}/>
        </div>
    </React.Fragment>
}   



export default Transcript
