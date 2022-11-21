import React from 'react';

import { TiMessages } from 'react-icons/ti';
import { BsStarFill } from 'react-icons/bs';
import { BiLike } from 'react-icons/bi';

import { FlexMainCardComments } from './styledCardComment';

const CardComment = ({ item }) => {
  return (
      <FlexMainCardComments>
        <div className='card-comment'>
            <div className='header-commnet'>
                <div className='profile-comment'>
                    <img src={item?.image} />
                    <div className='name-user'>
                        <h5>{item?.name}</h5>
                        <div className='stars-user'>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                        </div>
                    </div>
                </div>
                <span>{item?.date}</span>
            </div>

            <p className='comment'>{item?.comment}</p>

            <div className='btns-comment'>
                <button><BiLike /> مفید بود</button>
                <button><TiMessages /> مشورت</button>
            </div>
        </div>
      </FlexMainCardComments>
  )
}

export default CardComment;