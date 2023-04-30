import React, { useState } from 'react';
import styles from './search.module.scss';
import { useGetNewsFromSearchQuery } from '../../Redux/ApiNews';
import SearchNewsBlock from './SearchNewsBlock';
import {AiOutlineSearch} from 'react-icons/ai';
import {CgClose} from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearch } from '../../Redux/headerSlice';


const Search = () => {
  const [searchValue,setSearchValue] = useState('')
  const [newsQuantity,setNewsQuantity] = useState(6)
  const {language} = useSelector (state => state.headerSlice)
  const {data=[],isLoading,error} = useGetNewsFromSearchQuery({ value:searchValue,number:newsQuantity,lang:language })

  const dispatch = useDispatch()
  const toggle = () => dispatch(toggleSearch())

  const changeValue = (event) =>{
    setSearchValue(event.target.value)
  }

  return (
    <div className={styles.searchArea}>
      <div className={styles.close} onClick={toggle}><CgClose /></div>
      <div className={styles.title}>Search</div>
      <div className={styles.input}>
        <div className={styles.searchIcon}><AiOutlineSearch /></div>
        <div>
        <input placeholder='Search topics' onChange={changeValue}></input>
        </div>
      </div>
      <div className={styles.resultTitle}>
        <h2>Result</h2>
      </div>
      <div className={styles.searchResult}>
        {data.articles && data.articles.map((item) => item.urlToImage && <SearchNewsBlock
        image={item.urlToImage}
        title={item.title}
        description ={item.description}
        publishedAt={item.publishedAt}
        url={item.url}/>)}
      </div>
      <div className={styles.showMoreBtn}>
        <button onClick={() =>setNewsQuantity(newsQuantity+30)}>Show More</button>
      </div>
    </div>
  );
}
export default Search;