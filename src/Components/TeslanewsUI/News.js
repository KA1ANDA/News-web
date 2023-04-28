import React, { useState } from 'react';
import {  useGetNewsQuery } from '../../Redux/ApiNews';
import TeslaNewsBlock from './NewsBlock';
import styles from './mainArea.module.scss'
import { useSelector } from 'react-redux';



const TeslaNews = () => {
  const {category} = useSelector (state => state.categorySlice)
  const {language} = useSelector (state => state.headerSlice)
  const [newsQuantity,setNewsQuantity] = useState(6)

  const {data=[],isLoading,error} = useGetNewsQuery({number:newsQuantity , lang:language , newsCategory:category})

 
  if (isLoading){
    return <h1>LOADING...</h1>
  }


  return (
    <div className={styles.main}>

     {data.articles && data.articles.map((item) => item.urlToImage && <TeslaNewsBlock
      image={item.urlToImage}
      title={item.title}
      description ={item.description}
      publishedAt={item.publishedAt}/>)}

      <div className={styles.error}>
        {error && <div>No More News Found</div>}
      </div>
      <div className={styles.showMoreBtn}>
        <button onClick={() =>setNewsQuantity(newsQuantity+30)}>Show More</button>
      </div>
    </div>
  );
}
export default TeslaNews;