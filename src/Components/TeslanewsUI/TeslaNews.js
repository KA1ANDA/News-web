import React from 'react';
import { useGetEveryTeslaNewsQuery } from '../../Redux/ApiNews';
import TeslaNewsBlock from './TeslaNewsBlock';
import styles from './mainArea.module.scss'



const TeslaNews = () => {
  const number = 6;
  const {data=[],isLoading} = useGetEveryTeslaNewsQuery(number)


  if (isLoading){
    return <h1>LOADING...</h1>
  }

  return (
    <div className={styles.main}>
     {data.articles.map((item) => item.urlToImage && <TeslaNewsBlock
      image={item.urlToImage}
      title={item.title}
      publishedAt={item.publishedAt}/>)}
      <div className={styles.showMoreBtn}>
        <button>Show More</button>
      </div>
    </div>
  );
}
export default TeslaNews;