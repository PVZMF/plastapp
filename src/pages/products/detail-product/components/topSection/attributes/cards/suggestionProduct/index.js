import React, { useState } from 'react';

import { BiLike, BiDislike } from 'react-icons/bi';
import { BsQuestionCircle } from 'react-icons/bs';

import { FlexMainSuggPro } from './styledSuggPro';

const SuggestionProduct = () => {

    const [selected, setSelected] = useState(null);
    const SelectBtn = (id) => {
        if(id === selected) {
            setSelected(null)
        } else {
            setSelected(id)
        }
    };

  return (
    <FlexMainSuggPro>
        <div className='header-sugg'>
            <h4>خرید این محصول را به دیگران...</h4>
        </div>

        <div className='btns'>
            <button onClick={() => SelectBtn(1)} className={selected === 1 ? 'like' : ''}>
                <BiLike /> پیشنهاد می‌کنم
            </button>
            <button onClick={() => SelectBtn(2)} className={selected === 2 ? 'dont-now' : ''}>
                <BsQuestionCircle /> مطمئن نیستم
            </button>
            <button onClick={() => SelectBtn(3)} className={selected === 3 ? 'dislike' : ''}>
                <BiDislike /> پیشنهاد نمی‌کنم
            </button>
        </div>

    </FlexMainSuggPro>
  )
}

export default SuggestionProduct;