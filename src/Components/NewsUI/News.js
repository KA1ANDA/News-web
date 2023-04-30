import React, { useState } from 'react';
import {  useGetNewsQuery, useGetTopHeadlinesQuery } from '../../Redux/ApiNews';
import TeslaNewsBlock from './NewsBlock';
import styles from './mainArea.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { changePageSize } from '../../Redux/newsSlice';
import Loader from '../General/Loader';



const TeslaNews = () => {
  const {category} = useSelector (state => state.categorySlice)
  const {language} = useSelector (state => state.headerSlice)
  const {pageSizeMain} = useSelector (state => state.newsSlice)


  const dispatch = useDispatch()
  const changeNewsAmount = () => dispatch(changePageSize())

  const {data=[],isLoading,error} = useGetNewsQuery({number:pageSizeMain , lang:language , newsCategory:category})
 

 
  if (isLoading){
    return <Loader />
  }


  return (
    <div className={styles.main}>

     {data.articles && data.articles.map((item) => item.urlToImage && <TeslaNewsBlock
      image={item.urlToImage}
      title={item.title}
      description ={item.description}
      publishedAt={item.publishedAt}
      url={item.url}/>)}

      <div className={styles.error}>
        {error && <div>No More News Found</div>}
      </div>
      <div className={styles.showMoreBtn}>
        <button onClick={changeNewsAmount}>Show More</button>
      </div>
    </div>
  );
}
export default TeslaNews;