import "index.css";
import { useState } from "react";

const ImageComponent = ({ banners }) => {
	const [selectedBanner, setSelectedBanner] = useState(banners[0]);

	const renderedBanners = items =>
		items?.map(
			banner =>
				banner && (
					<img src={banner} alt="" onClick={() => setSelectedBanner(banner)} />
				)
		);

	return (
		<div className="img-container">
			<div className="primary-img-container">
				<img src={selectedBanner} alt="" />
			</div>
			<div className="img-slider">{renderedBanners(banners)}</div>
		</div>
	);
};
export default ImageComponent;
