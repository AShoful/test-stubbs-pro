import React from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import ListItems from '../ListItems'
import { initialStore, title} from './functionInit'

import  classes from './BalanceSection.module.css'

class BalanceSection extends React.Component { 

    state = {
        line: '',
        store:  initialStore(this.props.name) || []
    }

    handleChange = (e) => {
        this.setState({
            line: e.target.value
        })
    }

    reset = () => {
        this.setState({
            line: ''
        })
    }

    handleAdd = (value) => {
        this.setState({
            store: [...this.state.store, {id: Date.now(), name: value, value: 0}]
        }, () => this.reset()
        )
    }

    handleValue = ( index, value) => {
        if(!isNaN(value)){
        const newStore = this.state.store
        newStore[index].value = +value
        this.setState({
            store: newStore
        })}
    }

    handleName = ( index, value) => {
        const newStore = this.state.store
        newStore[index].name = value
        this.setState({
            store: newStore
        })
    }

    handleRemove = (id) => {
        if (window.confirm('Вы действительно хотите удалить строку?')) {
        this.setState({
            store: this.state.store.filter(item => item.id !== id)
        }         
    )}
    }

    onSaveState = () => {
        const {name} = this.props
        localStorage.removeItem(`store${name}`)
        localStorage.setItem(`store${name}`, JSON.stringify(this.state.store))
        alert(`Раздел ${title(name)} успешно сохранен`)
    }

    total = () => {
        const {store} = this.state
        let total = 0
        for(let i = 0; i < store.length; i++ ){
        total = total + store[i].value
        }
        return total
    }

    render(){
        let {line, store} = this.state        
    return <div className = {classes.BalanceSection}>
        <h1 className = {classes.label}>{title(this.props.name)}</h1>
        <ListItems 
            items = {store}
            onremove = {this.handleRemove}
            handleValue = {this.handleValue} 
            handleName = {this.handleName}
            />
        <div className = {classes.total}>
            <p>ИТОГО</p>  
            <p>{this.total()} ₴</p>            
        </div>    
        <div  className = {classes.edit}>
            <Input 
                onChange = {this.handleChange}
                value = {this.state.line}
            />
            <Button 
                onClick = {() =>this.handleAdd(line)}
                disabled = {!line || store.includes(line)}
                > 
                Добавить категорию
            </Button>
            <Button
                onClick = {() => this.onSaveState()}
                >
                Сохранить изменения   
            </Button>    
           
        </div>
     </div>
    }
}

export default BalanceSection 