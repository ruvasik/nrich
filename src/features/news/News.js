import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getNewsAsync, selectNews} from "./newsSlice";

import styles from './News.module.css';
import moment from "moment";

export function News() {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(getNewsAsync());
  }, []);

  return (
    <div>
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
