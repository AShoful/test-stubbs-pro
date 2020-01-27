import React, {useState} from 'react'
import classes from './Transcript.module.css'  
import Input from '../UI/Input'
import Button from '../UI/Button'

const Transcript = ({ handleValue, index, item, setVisible}) => {
    const [value, setValue] = useState(0)
    
    return <React.Fragment> 
        <span className={classes.close} onClick={()=>setVisible(false)}>
            &times;
        </span>
        {item.value.map((_, i) => _ ? 
        <div className={classes.history}
            key={i}> 
            <span className={classes.details}> 
                {new Date(_.id).toLocaleString().split(", ")[0]}
            </span> 
            <span className={classes.details}>
                {_.value}
            </span>
        </div> : null)}
        <div className={classes.Transcript} >
            <Button 
            onClick={() => {handleValue(index, parseFloat(value)); setValue(0); setVisible(false)} }
            disabled={!parseFloat(value)}
            size={'small'}
            >
            добавить
            </Button> 
            <Input
            type='text'
            onChange={(e) => setValue(e.target.value)}
            value={value}
            size={'small'}
            />
        </div>
    </React.Fragment>
}   



export default Transcript
