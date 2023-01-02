import React, { useEffect, useState } from "react";
import { getOffers } from "../../../api/api";
import OfferCard from "./card";
import style from "./offerCards.module.css";

const OfferCards = ({ requestForOffer, errors, offerCodes }) => {
  let themeColors = ["#4746DF", "#E14141", "#31B840", "#B8319A"];
  const [offers, setOffers] = useState();

  useEffect(() => {
    getOffers()
      .then((results) => {
        setOffers(results);
       
      })
      .catch((error) => {
       
      });
  }, []);

 
  return (
    <div className={style.cards}>
      {offers?.map((el) => {
        return (
          <OfferCard
            minCardAmount={el["minimum_card_amount"]}
            offAmount={el["title"]}
            requiredPrize={el["needed_point"]}
            offerId={el.id}
            themeColor={
              themeColors[Math.floor(Math.random() * themeColors.length)]
            }
            // generatedCode={offerCodes[1] || null}
            generatedCode={el["discount_rate"]}
            errInGenerate={errors[1] || null}
            onClick={(data) => requestForOffer(data)}
          />
        );
      })}
      {/* <OfferCard
        minCardAmount={200000}
        offAmount={50000}
        requiredPrize={2400}
        offerId={2}
        themeColor="#E14141"
        generatedCode={null}
        errInGenerate={errors[2] || null}
        onClick={(data) => requestForOffer(data)}
      />
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
      /> */}
    </div>
  );
};

export default OfferCards;
