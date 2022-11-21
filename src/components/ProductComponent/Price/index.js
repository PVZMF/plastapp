import { commafy } from "functions/numbers";

const Price = ({ productPrice }) => {
	return (
		<>
			<div className="price-container">
				<p>قیمت</p>
				<div>
					<div className="discount-container">
						{/* <p className="discount">3%</p> */}
						<p className="discounted-price">{commafy(productPrice)} تومان</p>
					</div>
					{/* <div className="discount-container">
            <p className="discounted-price">7.699.000</p>
            <p className="price-unit">ریال</p>
          </div> */}
				</div>
			</div>
			<div className="btn-container-large">
				<button className="add-product--large">افزودن به سبد</button>
			</div>
		</>
	);
};

export default Price;
