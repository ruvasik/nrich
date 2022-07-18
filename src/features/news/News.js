import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getNewsAsync, selectNews, selectStatus} from "./newsSlice";
import moment from "moment";
import styles from './News.module.css';

export function News() {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const isLoading = useSelector(selectStatus);

  useEffect(() => {
    if (news.length === 0)
      dispatch(getNewsAsync());
  }, []);

  return (
    <div>
      {isLoading && 'Loading...'}
      {
        news.map(item => (
          <div key={item.url} className={styles.article}>
            <h2 className={styles.title}>{item.title}</h2>
            <h3 className={styles.author}>{item.author}</h3>
            <h6 className={styles.date}>{moment(item.publishedAt).format("DD.MM.yy")}</h6>
            <div className={styles.description}>
              {item.description}
            </div>
          </div>
        ))
      }
    </div>
  );
}
