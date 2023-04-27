import React, { useState } from 'react';
import styles from './header.module.scss';
import {RxAvatar} from 'react-icons/rx'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdLanguage} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../Redux/headerSlice';

const Header = () => {
  const {language} = useSelector (state => state.headerSlice)
  const dispatch = useDispatch()
  const setLanguage = () => dispatch(changeLanguage())

  return (
    <div className={styles.header}>
      <div className={styles.logo}></div>
      <div className={styles.loginSearch}>
        <div className={styles.search}><AiOutlineSearch /></div>
        <div className={styles.avatar}><RxAvatar /></div>
        <div onClick={setLanguage} className={styles.languageChange}>
          <MdLanguage />
          <span>{language}</span>
        </div>
      </div>
    </div>
  );
}
export default Header;