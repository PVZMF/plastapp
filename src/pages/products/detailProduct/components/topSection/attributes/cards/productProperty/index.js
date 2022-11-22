import React, { useState } from 'react'

import { BsChevronUp } from 'react-icons/bs';

import { FlexMainProduct } from './styledProProperty'

const ProductProperty = ({ list }) => {

    const [showMore, setShowMore] = useState(false);
    const SelectMore = () => setShowMore(!showMore);
  return (
    <FlexMainProduct>
        <div className='header-property'>
            <h4>ویژگی های محصول</h4>
            <BsChevronUp className={showMore ? 'down-icon' : 'up-icon'} onClick={SelectMore} />
        </div>

        <ul className={showMore ? 'list-property' : 'hide-property'}>
            {list.map((item, index) => (
                <li key={index + "property"}>
                    <h5>{item.title}: <span>{item.value}</span></h5>
                </li>
            ))}
        </ul>
    </FlexMainProduct>
  )
}

export default ProductProperty;

ProductProperty.defaultProps = {
    list: [
        {
            title: 'وزن خالص',
            value: '800 گرم',
        },
        {
            title: 'شیوه نگهداری',
            value: 'درجای خشک وخنک',
        },
        {
            title: 'سایر توضیحات',
            value: 'دارای فسفر .مناسب برای تقویت حافظه',
        },
        {
            title: 'زمان ماندگاری',
            value: '1سال',
        },
    ],
}