import React from 'react';
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={ classes.header }>
      <div className={ classes.headerLogo}>
        Конвертор валют
      </div>

    </header>
  );
};

export default Header;