import React, { useEffect } from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import BoxOff from '../../../assets/imgs/basket.png'
import TextOff from '../../../assets/imgs/wonder.png'
import pro1 from '../../../assets/imgs/pro1.jpg'
import pro2 from '../../../assets/imgs/pro2.jpg'
import style from './wonderFullyComponent.module.css'
import { Link } from 'react-router-dom';

const WonderFullyComponent = ({ products }) => {

    function findMax(array) {
        var max = 0, a = array.length, counter;
        for (counter = 0; counter < a; counter++) {
            if (array[counter].percent > max) {
                max = array[counter].percent
            }
        }
        return max
    }
    const MaxPresent = findMax(products);

  return (
    <div className={style.wonderfully}>
        <div className={style.wonderfully_box}>
            <div className={style.title}>
                <img src={BoxOff} alt='شگفتانه پلاست اپ' className={style.boxOff} />
                <img src={TextOff} alt='شگفتانه پلاست اپ' className={style.textOff} />
                <h4>تا {MaxPresent} % تخفیف</h4>
            </div>

            <div className={style.productsList}>
                {products.map((item, index) => {
                    if (index <= 4) {
                        return (
                        <Link key={index + 'wonderfully'}>
                            <div className={style.product_box}>
                                <img src={item.img} alt={item.img} />
                                <p>{item.percent}%</p>
                            </div>
                        </Link>
                    )}
                })}
            </div>

            <Link to='/product'>
                <button className={style.more}>بیش از {products.length} کالا <BsArrowLeft /></button>
            </Link>
        </div>
    </div>
  )
}

export default WonderFullyComponent;

WonderFullyComponent.defaultProps = {
    off: 51,
    products: [
        {
            id: 1,
            img: pro1,
            name: 'testname',
            percent: 30,
        },
        {
            id: 2,
            img: pro2,
            name: 'testname',
            percent: 50,
        },
        {
            id: 3,
            img: pro1,
            name: 'testname',
            percent: 20,
        },
        {
            id: 4,
            img: pro2,
            name: 'testname',
            percent: 10,
        },
        {
            id: 5,
            img: pro2,
            name: 'testname',
            percent: 15,
        },
        {
            id: 6,
            img: pro1,
            name: 'testname',
            percent: 57,
        },
        {
            id: 7,
            img: pro2,
            name: 'testname',
            percent: 40,
        },
    ],
}