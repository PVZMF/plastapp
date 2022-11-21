import { Box } from "@mui/material";
import ItemDramatic from "components/item-dramatic";
import Slider from "components/items-slider/Slider";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { SwiperSlide } from "swiper/react";
import { containerStyles } from "./otherStoreProductsStyles";

const config = {
		sliderWithRadius: false,
		sliderHeight: "250px",
		autoplay: {
			delay: 2000,
			disableOnInteraction: true,
		},
		modules: [Autoplay],
	},
	swiperConfig = {
		navigation: false,
	};

const OtherStoreProducts = ({ otherProducts }) => {
	const renderedItems = items =>
		items?.map(item => {
			return (
				<SwiperSlide
					key={item.id}
					style={{ background: "#fff", height: "240px", width: "240px" }}
					className="slides-with-radius mini-slider cursor-pointer userselect-none">
					<Link
						to={`/product/${item.id}`}
						style={{ height: "100%", width: "100%" }}>
						<ItemDramatic
							bannerUrl={item.image1}
							title={item.name}
							desc={
								item.for_us
									? "موجود در انبار پلاست اب"
									: "موجود در انبار فروشنده"
							}
							minPrice={item.minPrice || null}
							maxPrice={item.maxPrice || null}
						/>
					</Link>
				</SwiperSlide>
			);
		});
	return (
		<Box sx={containerStyles}>
			<Slider {...config} swiperConfig={swiperConfig} autoSildesPerView>
				{renderedItems(otherProducts)}
			</Slider>
		</Box>
	);
};

export default OtherStoreProducts;
