import React from 'react';
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={ classes.footer }>
      <a 
        className={ [classes.link, classes.item].join(' ') } 
        href="https://www.cbr-xml-daily.ru/">
          API для курсов ЦБ РФ
      </a>
      <div className={ classes.item }>2025</div>
    </footer>
  );
};

export default Footer;