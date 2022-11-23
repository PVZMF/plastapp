import React from 'react'
import OfferCard from './card'
import style from './offerCards.module.css'

const OfferCards = ({ requestForOffer, errors, offerCodes }) => {
  return (
    <div className={style.cards}>
      <div className={style.row}>
        <OfferCard
          minCardAmount={100000}
          offAmount={30000}
          requiredPrize={1800}
          offerId={1}
          themeColor="#4746DF"
          generatedCode={offerCodes[1] || null}
          errInGenerate={errors[1] || null}
          onClick={(data) => requestForOffer(data)}
        />
        <OfferCard
          minCardAmount={200000}
          offAmount={50000}
          requiredPrize={2400}
          offerId={2}
          themeColor="#E14141"
          generatedCode={null}
          errInGenerate={errors[2] || null}
          onClick={(data) => requestForOffer(data)}
        />
      </div>
      <div className={style.row}>
        <OfferCard
          minCardAmount={300000}
          offAmount={70000}
          requiredPrize={3000}
          offerId={3}
          themeColor="#31B840"
          generatedCode={null}
          errInGenerate={errors[3] || null}
          onClick={(data) => requestForOffer(data)}
        />
        <OfferCard
          minCardAmount={300000}
          offAmount={900000}
          requiredPrize={3800}
          offerId={4}
          themeColor="#B8319a"
          generatedCode={null}
          className="last-child"
          errInGenerate={errors[4] || null}
          onClick={(data) => requestForOffer(data)}
        />
      </div>
    </div>
  )
}

export default OfferCards