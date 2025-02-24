import React from 'react';
import classes from './Select.module.css'

const Select = ({ name, userChoice, setUserChoice, currencies}) => {
  return (
    <select
        name={ name }
        className={ classes.select}
        value={ userChoice[name]}
        onChange={e => setUserChoice({
          ...userChoice, 
          [name]: e.target.value})}>
        {
          currencies.map(value => {
            return (
              <option 
                value={ value.CharCode } 
                key={ value.ID }
              >
                { value.Name }
              </option>
            )
          })
        }
      </select>
  );
};

export default Select;