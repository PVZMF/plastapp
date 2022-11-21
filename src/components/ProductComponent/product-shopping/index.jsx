import './index.scss';
import { Avatar, Button } from '@mui/material';
import { toPersianNumber } from 'functions/numbers';

function ProductShopping({
  ownerName,
  ownerProfileUrl,
  ownerLastVisit,
  category,
  setCommentsStatus,
}) {
  const lastActivityInMs =
      new Date().getTime() - new Date(ownerLastVisit).getTime(),
    lastActivityInDay = lastActivityInMs / (1000 * 3600 * 24);

  const renderedLastActivity = () => {
    let result;
    if (lastActivityInDay < 0.0001) {
      result = 'آنلاین';
    } else if (lastActivityInDay < 1) {
      result = 'کمتر از یک روز';
    } else {
      result = `${toPersianNumber(Math.ceil(lastActivityInDay))} روز پیش`;
    }
    return result;
  };

  return (
    <div className="product-shopping-container">
      <h4>غرفه‌دار</h4>
      <div className="product-shopping-card">
        <div className="product-shopping-card-information">
          <Avatar
            src={ownerProfileUrl}
            variant="square"
            sx={{
              width: '60px',
              height: '60px',
              borderRadius: '5px',
              marginLeft: '10px',
            }}
          >
            {!ownerProfileUrl && ownerName}
          </Avatar>
          <div>
            <h5>{ownerName}</h5>
            <p>{category}</p>
          </div>
        </div>
        <div>
          <Button
            sx={{
              padding: '5px 40px',
              color: '#69a9ff',
              bgcolor: 'transparent',
              border: '5px solid #69a9ff',
              fontSize: '19px',
            }}
            onClick={() => setCommentsStatus(true)}
          >
            نظرات کاربران
          </Button>
        </div>
      </div>
      <p>آخرین بازدید: {renderedLastActivity()}</p>
    </div>
  );
}

export default ProductShopping;
