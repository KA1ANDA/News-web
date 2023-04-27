import React, { useState } from 'react';
import { useGetEveryTeslaNewsQuery } from '../../Redux/ApiNews';
import TeslaNewsBlock from './TeslaNewsBlock';
import styles from './mainArea.module.scss'
import { useSelector } from 'react-redux';



const TeslaNews = () => {
  const {language} = useSelector (state => state.headerSlice)
  const [newsQuantity,setNewsQuantity] = useState(6)
  const {data=[],isLoading,error} = useGetEveryTeslaNewsQuery({number:newsQuantity , lang:language})

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