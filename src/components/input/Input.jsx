import React from 'react';
import classes from './Input.module.css'

const Input = ({enabled, userChoice, setUserChoice}) => {
  return (
    <input
        disabled={ !enabled }
        value={ 
          enabled
          ?
          userChoice.valueFrom
          :
          userChoice
         } 
        onChange={ e => {
          setUserChoice({...userChoice, valueFrom: e.target.value})
        } }
        type="number" 
        placeholder='0.00'
        className={classes.input}/>
  );
};

export default Input;