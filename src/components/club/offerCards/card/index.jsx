import tinycolor from "tinycolor2";
import { preparedPrice, toPersianNumber } from "../../../../functions/numbers";
import { copyStrToClipboard } from "../../../../functions/clipboard";
import style from  "./card.module.css";

function OfferCard({
  minCardAmount,
  offAmount,
  requiredPrize,
  themeColor,
  offerId,
  generatedCode = "",
  className = "",
  errInGenerate,
  onClick,
}) {
  const darkThemeColor = tinycolor(themeColor).darken();

  return (
    <div className={`${style.club_offer_card} ${className}`}>
      <div
        className={style.club_offer_card_header}
        style={{ backgroundColor: themeColor }}
      >
        <div className={style.club_offer_card_min_amount}>
          <h3
            className={`${style.club_offer_card_min_amount_title} ${style.sepahbod_font}`}
            style={{ color: darkThemeColor }}
          >
            حداقل سبد خرید:
          </h3>
          <p
            className={style.club_offer_card_min_amount_content}
            style={{ backgroundColor: darkThemeColor }}
          >
            <span className={style.sepahbod_font}>
              {preparedPrice(minCardAmount)}
            </span>{" "}
            تومان
          </p>
        </div>
        <p className={`${style.club_offer_card_off_ammount} ${style.sepahbod_font}`}>
          {preparedPrice(offAmount)} تومان
        </p>
      </div>

      <div className={style.club_offer_card_content}>
        <h3
          className={`${style.club_offer_card_required_prize} ${style.sepahbod_font}`}
          style={{ color: themeColor }}
        >
          {toPersianNumber(requiredPrize)} امتیاز
        </h3>
        <div className={style.club_offer_card_code_container}>
          <p
            className={`${style.club_offer_card_copy_code} ${style.sepahbod_font}`}
            onClick={() => {
              generatedCode && copyStrToClipboard(generatedCode);
            }}
          >
            کپی کن
          </p>
          <p className={style.club_offer_card_my_code}>{generatedCode}</p>
        </div>
        <h3
          className={`${style.club_offer_card_get_code} ${style.sepahbod_font}`}
          onClick={() => onClick(offerId)}
        >
          تخفیف بگیر...
        </h3>
      </div>
      {errInGenerate && (
        <p
          style={{
            color: "red",
            marginBottom: "0 !important",
            marginTop: "10px",
            direction: "rtl",
          }}
        >
          {errInGenerate}
        </p>
      )}
    </div>
  );
}

export default OfferCard;
