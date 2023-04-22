import React from 'react';
import { useGetEveryTeslaNewsQuery } from '../../Redux/ApiNews';
import TeslaNewsBlock from './TeslaNewsBlock';
import styles from './mainArea.module.scss'



const TeslaNews = () => {

  const {data=[],isLoading} = useGetEveryTeslaNewsQuery()


  if (isLoading){
    return <h1>LOADING...</h1>
  }

  return (
    <div className={styles.main}>
     {data.articles.map((item) => <TeslaNewsBlock
      image={item.urlToImage}
      title={item.title}/>)}
    </div>
  );
}
export default TeslaNews;