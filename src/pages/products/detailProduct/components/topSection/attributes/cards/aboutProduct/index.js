import React, { useState } from 'react';

import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

import { FlexMainAboutPro } from './styledAboutPro';

const AboutProduct = ({ description }) => {

    const [showMore, setShowMore] = useState(false);
    const SelectMore = () => setShowMore(!showMore);

  return (
    <FlexMainAboutPro>
        <div className='header-about'>
            <h4>درباره محصول</h4>
        </div>

        <p className={showMore ? 'desc' : 'hide-desc'}>{description}</p>

        <div className='footer-about'>
            {showMore ?
            <button onClick={SelectMore}>کمتر <BsChevronUp /></button>
            :
            <button onClick={SelectMore}>بیشتر <BsChevronDown /></button>
            }
        </div>

    </FlexMainAboutPro>
  )
}

export default AboutProduct;

AboutProduct.defaultProps = {
    description: 'گردوی برداشت امسال800 گرمگردوی تازه و ارگانیک عاری از هرگونه سموم کشاورزی از باغ های بناب مرند به علت تعطیلی غرفه تا مهر ماه تعداد 12 بسته زیر قیمت خرید',
}