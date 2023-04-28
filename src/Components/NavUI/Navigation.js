import React, { useRef } from 'react';
import styles from './navigation.module.scss'
import { useDispatch } from 'react-redux';
import { changeCategory } from '../../Redux/categorySlice';

const Navigation = () => {

  const dispatch = useDispatch();
  const change = (category) => dispatch(changeCategory(category))

  

  const handleClick = (category) => {
    change(category)
  }

  return (
    <div className={styles.navigation}>
      <div onClick={() =>handleClick('HEADLINES')} >
        HEADLINES
      </div>
      <div onClick={() => handleClick('WORLD')}>
        WORLD
      </div>
      <div onClick={() => handleClick('POLITICS')}>
        POLITICS
      </div>
      <div onClick={() => handleClick('health')}>
        HEALTH
      </div>
      <div onClick={() => handleClick('CRIME & JUSTICE')}>
        CRIME & JUSTICE 
      </div>
      <div onClick={() => handleClick('science')}>
        SCIENCE & TECHNOLOGY
      </div>
      <div onClick={() => handleClick('sports')}> 
        SPORTS
      </div>
      <div onClick={() => handleClick('MONEY')}>
        MONEY
      </div>
      <div onClick={() => handleClick('CULTURE')}>
        CULTURE
      </div>
      <div onClick={() => handleClick('WEATHER')}>
        WEATHER
      </div>
      <div onClick={() => handleClick('entertainment')}>
        ENTERTAITMENT
      </div>
      <div onClick={() => handleClick('business')}>
        BUSINESS
      </div>
    </div>
  );
}
export default Navigation;
