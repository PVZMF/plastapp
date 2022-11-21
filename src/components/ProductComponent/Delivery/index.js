const Delivery = () => {
  return (
    <div className="btn-and-container">
      <div className="delivery-container">
        <p className="delivery-title">نحوه ارسال</p>
        <div className="radio-btn-container">
          <div className="radio-keeper">
            <input type="radio" name="delivery" />
            <label>دریافت حضوری</label>
          </div>
          <div className="radio-keeper">
            <input type="radio" name="delivery" />
            <label>ارسال توسط پلاست اپ</label>
          </div>
          <div className="radio-keeper">
            <input type="radio" name="delivery" />
            <label>ارسال توسط پست</label>
          </div>
        </div>
      </div>
      <button className="add-product">افزودن به سبد</button>
    </div>
  );
};

export default Delivery;
