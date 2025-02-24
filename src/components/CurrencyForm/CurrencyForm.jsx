import React from 'react';
import classes from './CurrencyForm.module.css'
import Select from '../select/Select';
import Input from '../input/Input';

const CurrencyForm = ({currencies, userChoice, setUserChoice, inputTo}) => {
  
  return (
    <form className={ classes.form }>
      <div className={classes.column}>
        <Select 
          name='selectFrom'
          userChoice={ userChoice }
          setUserChoice={ setUserChoice }
          currencies={ currencies }
        />
        <Input 
          enabled={ true }
          userChoice={userChoice}
          setUserChoice={ setUserChoice }
        />
      </div>
      
      <div className={classes.column}>
        <Select 
          name='selectTo'
          userChoice={ userChoice }
          setUserChoice={ setUserChoice }
          currencies={ currencies }
        />

        <Input 
          enabled={ false }
          userChoice={inputTo}
          setUserChoice={ setUserChoice }
        />
      </div>
    </form>
  );
};

export default CurrencyForm;