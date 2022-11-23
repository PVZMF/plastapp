import React from 'react'
import style from '../detailBlog.module.css';

const Comment = ({ item }) => {
  return (
    <div className={style.comment}>
        <div className={style.header}>
          <h3>{item?.name}</h3>
          <span>{item?.date}</span>
        </div>
        <p>{item?.text}</p>
    </div>
  )
}

export default Comment

Comment.defaultProps = {
    username: 'رضا رشیدی',
    text: 'بسیار مفید و عالی بود.',
}