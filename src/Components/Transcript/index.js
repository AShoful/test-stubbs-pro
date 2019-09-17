import React from 'react'
import Input from '../UI/Input'
import classes from './Transcript.module.css'  


const Transcript = (props) => {


    return <div className = {classes.Transcript} >
        <span >+</span> 
        <Input
        size = 'small'
        value = {70}/>
    </div>
}   

// import Transcript from '../Transcript'

// const [visible, setVisible] = useState(false)
    // const [storeValue, setstoreValue] = useState([])

    // const handleTranscript = () => {
    //     const store = storeValue;

    // }
    //

    {/* <span onClick = {() => setVisible(!visible)} >&ensp;:</span>  */}

    {/* { visible ? 
            <Transcript

            />
        : null}  */}

export default Transcript
