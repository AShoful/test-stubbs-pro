/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import ListItems from '../ListItems';
import { initialStore, title, onSaveState, includes, total, clearState } from './function';

import classes from './BalanceSection.module.css';

class BalanceSection extends React.Component {
  state = {
    line: '',
    store: initialStore(this.props.name) || []
  };

  handleChange = (e) => {
    this.setState({
      line: e.target.value
    });
  };

  reset = () => {
    this.setState({
      line: ''
    });
  };

  handleAdd = (value) => {
    this.setState(
      {
        // eslint-disable-next-line react/no-access-state-in-setstate
        store: [...this.state.store, { id: Date.now(), name: value, value: [] }]
      },
      () => this.reset()
    );
  };

  handleValue = (index, value) => {
    if (!isNaN(value)) {
      // eslint-disable-next-line react/no-access-state-in-setstate
      const newStore = this.state.store;
      newStore[index].value.push({ value: +value, id: Date.now() });
      this.setState({
        store: newStore
      });
    }
  };

  handleName = (index, value) => {
    const newStore = this.state.store;
    newStore[index].name = value;
    this.setState({
      store: newStore
    });
  };

  handleRemove = (id) => {
    if (window.confirm('Вы действительно хотите удалить строку?')) {
      this.setState({
        store: this.state.store.filter((item) => item.id !== id)
      });
    }
  };

  render() {
    const { line, store } = this.state;
    const { name } = this.props;

    return (
      <div className={classes.BalanceSection}>
        <h1 className={classes.label} onClick={() => clearState(name)}>
          {title(name)}
        </h1>
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
        <div className={classes.edit}>
          <Input size="main" onChange={this.handleChange} value={this.state.line} />
          <Button size="main" onClick={() => this.handleAdd(line)} disabled={!line.trim() || includes(store, line)}>
            Добавить категорию{' '}
            {title(name)
              .toLocaleLowerCase()
              .slice(0, title(name).length - 1)}
            ов
          </Button>
          <Button
            size="main"
            onClick={() => {
              onSaveState(name, store);
            }}
          >
            > Сохранить изменения
          </Button>
        </div>
      </div>
    );
  }
}

export default BalanceSection;
