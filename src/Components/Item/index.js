/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import classes from './Item.module.css';
import Transcript from '../Transcript';
import Input from '../UI/Input';

const Item = ({ index, item, handleValue, handleName, remove }) => {
  const [visible, setVisible] = useState(false);

  const total = () => item.value.reduce((res, i) => (res += i.value ? i.value : i), 0);
  return (
    <>
      <div className={classes.Item}>
        <div className={classes.name}>
          <span className={classes.index}>{index + 1} &ensp;</span>
          <Input size="middle" value={item.name} onChange={(e) => handleName(index, e.target.value)} />
        </div>
        <div className={classes.value}>
          <span className={classes.add} onClick={() => setVisible(!visible)}>
            {!visible ? '+' : null}
          </span>
          <p className={classes.total}>{total()}</p>
          <span className={classes.remove} onClick={() => remove(item.id)}>
            &times;
          </span>
        </div>
      </div>
      {visible ? <Transcript handleValue={handleValue} index={index} item={item} setVisible={setVisible} /> : null}
    </>
  );
};

export default Item;
