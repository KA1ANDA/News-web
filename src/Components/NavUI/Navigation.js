import React from 'react';
import styles from './navigation.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../Redux/categorySlice';

const Navigation = () => {

  const {category} = useSelector (state => state.categorySlice)

  const dispatch = useDispatch();
  const change = (category) => dispatch(changeCategory(category))

  

  const handleClick = (category) => {
    change(category)
  }

  return (
    <div className={styles.navigation}>
      <div onClick={() =>handleClick('general')} className={category === 'general' && styles.active} >
        GENERAL
      </div>
      <div onClick={() => handleClick('WORLD')}>
        WORLD
      </div>
      <div onClick={() => handleClick('POLITICS')}>
        POLITICS
      </div>
      <div onClick={() => handleClick('health')} className={category === 'health' && styles.active}>
        HEALTH
      </div>
      <div onClick={() => handleClick('technology')} className={category === 'technology' && styles.active}>
        TECHNOLOGY
      </div>
      <div onClick={() => handleClick('science')} className={category === 'science' && styles.active}>
        SCIENCE
      </div>
      <div onClick={() => handleClick('sports')} className={category === 'sports' && styles.active}> 
        SPORTS
      </div>
      <div onClick={() => handleClick('crypto')}>
        MONEY
      </div>
      <div onClick={() => handleClick('CULTURE')}>
        CULTURE
      </div>
      <div onClick={() => handleClick('WEATHER')}>
        WEATHER
      </div>
      <div onClick={() => handleClick('entertainment')} className={category === 'entertainment' && styles.active}>
        ENTERTAITMENT
      </div>
      <div onClick={() => handleClick('business')} className={category === 'business' && styles.active}>
        BUSINESS
      </div>
    </div>
  );
}
export default Navigation;
