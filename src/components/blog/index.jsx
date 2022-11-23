import React from 'react'
import { Link } from 'react-router-dom';
import CardBlog from './cardBlog'
import imgBlog from '../../assets/imgs/shop_1.jpg'
import style from './blog.module.css'

const Blog = ({ blogList }) => {
  return (
    <div className={style.blog}>
      <div className={style.title}>
        <h3>وبلاگ</h3>
      </div>

      <div className={style.listBlog}>
        {blogList.map(item => (
          <div className={style.card} key={item.id}>
            <Link to={`/blog/${item.id}`}><CardBlog item={item} /></Link>
          </div>  
        ))
        }
      </div>
    </div>
  )
}

export default Blog;

Blog.defaultProps = {
  blogList: [
    {
      id: 1,
      title: 'متن تستی 1',
      image: imgBlog,
      date: '8 روز پیش'
    },
    {
      id: 2,
      title: 'متن تستی 2',
      image: imgBlog,
      date: '8 روز پیش'
    },
    {
      id: 3,
      title: 'متن تستی 3',
      image: imgBlog,
      date: '8 روز پیش'
    },
    {
      id: 4,
      title: 'متن تستی 4',
      image: imgBlog,
      date: '8 روز پیش'
    },
    {
      id: 5,
      title: 'متن تستی 5',
      image: imgBlog,
      date: '8 روز پیش'
    },
  ]
}