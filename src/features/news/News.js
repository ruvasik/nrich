import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getNewsAsync, selectNews} from "./newsSlice";

export function News() {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(getNewsAsync());
  }, []);

  return (
    <div>
      news {news?.length}
    </div>
  );
}
