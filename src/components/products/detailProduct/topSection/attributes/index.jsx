import React from 'react';
import AboutProduct from './cards/aboutProduct';
import CommentsProduct from './cards/commentsProducts';
import ImageBox from './cards/imageProduct/ImageBox';
import ProductProperty from './cards/productProperty';
import SuggestionProduct from './cards/suggestionProduct';

import { FlexMainBaskets } from './styledBaskets';

const Attributes = () => {

  return (
    <FlexMainBaskets>
        <div className='cart-list'>
          <ImageBox />
          <ProductProperty />
          <AboutProduct />
          <SuggestionProduct />
          <CommentsProduct />
        </div>
    </FlexMainBaskets>
  )
}

export default Attributes;