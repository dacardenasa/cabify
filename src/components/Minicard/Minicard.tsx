import React from 'react';
import logo from '../../img/logo.png';
import styles from './Minicard.module.css';

const Minicard = () => {

  return(
    <div className={ styles.miniCardStyles }>
      <img src={logo} className={ styles.miniCardLogoStyles } alt="logo-cabify" />
    </div>
  );

}

export default Minicard;
