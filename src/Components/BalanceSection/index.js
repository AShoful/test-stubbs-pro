import React from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import ListItems from '../ListItems'
import {initialStore, title, 
    onSaveState, includes, total} from './function'

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
            store: [...this.state.store, 
                {id: Date.now(), name: value, value: []}]
        }, () => this.reset()
        )
    }

    handleValue = ( index, value) => {
        if(!isNaN(value)){
        const newStore = this.state.store
        newStore[index].value.push({'value': +value, 'id': Date.now()})
        this.setState({
            store: newStore
        })}
    }

    handleName = (index, value) => {
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

    render(){
        let {line, store} = this.state 
        const {name} = this.props
                                      
    return <div className={classes.BalanceSection}>
        <h1 className={classes.label}>{title(name)}</h1>
        <ListItems 
            store={store}
            onremove={this.handleRemove}
            handleValue={this.handleValue} 
            handleName={this.handleName}
            />
        <div className={classes.total}>
            <span className={classes.totalData}>ИТОГО</span>  
            <span className={classes.totalData}>{total(store)} ₴</span>            
        </div>    
        <div  className={classes.edit}>
            <Input size={'main'}
                onChange={this.handleChange}
                value={this.state.line}
            />
            <Button size={'main'}
                onClick={() =>this.handleAdd(line)}
                disabled={!line.trim() || includes(store, line)}
                > 
                Добавить категорию
            </Button>
            <Button size={'main'}
                onClick={() => {onSaveState(name, store)}}
                >
                Сохранить изменения   
            </Button>    
           
        </div>
     </div>
    }
}

export default BalanceSection 