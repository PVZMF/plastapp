import React, { Fragment, useEffect, useState } from "react";

// Components
import MainSliderComponent from "../../components/home/mainSliderComponent_banner";
import MainSearchComponent from "../../components/home/mainSearch/MainSearchComponent";
import MainCategoryComponent from "../../components/home/mainCategoy/MainCategoryComponent";
import MainSuggestedComponent from "../../components/home/mainSuggested_Products/MainSuggestedComponent";
import MainNoticeBannerComponent from "../../components/home/mainNoticeBanner/MainNoticeBannerComponent";
import MainShopsComponent from "../../components/home/mainShops/MainShopsComponent";
import MainBannerComponent from "../../components/home/mainBanner/MainBannerComponnet";
import MainProductsComponent from "../../components/home/mainProducts/MainProductsComponent";
import MainFeatureBannerComponent from "../../components/home/mainFeatureBanner/MainFeatureBannerComponent";
// import MainWonderfullyComponent from '../../components/home/mainWonderfully/MainWonderfullyComponent'
import MainPopularProducts from "../../components/home/mainPopularProducts/MainPopularProducts";
import MainLastBannerComponent from "../../components/home/mainLastBanner/MainLastBannerComponent";
import WonderFullyComponent from "../../components/home/mainWonderFullyComponent";

import { getTwoelvBanners } from "../../api/api";
import { HomeLan } from "../../json/language/fa";
import ListBannerImages from "../../components/home/ListBannerImages/ListBannerImages";
import { baseUrl } from "../../api/axios";
import Storage from "../../service/Storage";
// import ad1 from "../../assets/imgs/adImgs/ad1.webp";
// import ad2 from "../../assets/imgs/adImgs/ad2.webp";
// import ad3 from "../../assets/imgs/adImgs/ad3.webp";

const Home = () => {
  const [banners, setBanners] = useState([]);
const st = Storage;
console.log("st()" , st())
  useEffect(() => {
    // setLoading(true);
    getTwoelvBanners()
      .then((results) => {
        setBanners(results.data);
      })
      .finally(() => {
        // setLoading(false);
      });
  }, []);
  // const imgList1 = [{
  //   src:ad1,link:"#"},
  //   {src:ad2,link:"#"},
  //   {src:ad3,link:"#"},
  //   {src:ad3,link:"#"}
  // ]
  // const imgList2 = [{
  //   src:ad1,link:"#"},
  //   {src:ad2,link:"#"},
  //   {src:ad3,link:"#"},
  //   {src:ad3,link:"#"}
  // ]
  // const imgList3 = [{
  //   src:ad1,link:"#"},
  //   {src:ad2,link:"#"},
  //   {src:ad3,link:"#"},
  //   {src:ad3,link:"#"}
  // ]

  const imgList1 = [
    {
      src: baseUrl + banners.first_row_first?.image,
      link: banners.first_row_first?.url,
    },
    {
      src: baseUrl + banners.first_row_second?.image,
      link: banners.first_row_second?.url,
    },
    {
      src: baseUrl + banners.first_row_third?.image,
      link: banners.first_row_third?.url,
    },
    {
      src: baseUrl + banners.first_row_fourth?.image,
      link: banners.first_row_fourth?.url,
    },
  ];
  const imgList2 = [
    {
      src: baseUrl + banners.second_row_first?.image,
      link: banners.second_row_first?.url,
    },
    {
      src: baseUrl + banners.second_row_second?.image,
      link: banners.second_row_second?.url,
    },
    {
      src: baseUrl + banners.second_row_third?.image,
      link: banners.second_row_third?.url,
    },
    {
      src: baseUrl + banners.second_row_fourth?.image,
      link: banners.second_row_fourth?.url,
    },
  ];
  const imgList3 = [
    {
      src: baseUrl + banners.third_row_first?.image,
      link: banners.third_row_first?.url,
    },
    {
      src: baseUrl + banners.third_row_second?.image,
      link: banners.third_row_second?.url,
    },
    {
      src: baseUrl + banners.third_row_third?.image,
      link: banners.third_row_third?.url,
    },
    {
      src: baseUrl + banners.third_row_fourth?.image,
      link: banners.third_row_fourth?.url,
    },
  ];

  return (
    <Fragment>
      <MainSliderComponent />
      <MainSearchComponent />
      <MainCategoryComponent />
      <MainSuggestedComponent title={HomeLan.mainSuggested_title} />
      <MainNoticeBannerComponent row={"first"} />
      <MainShopsComponent title={HomeLan.mainTopShops_title} />
      <ListBannerImages ListImg={imgList1} />
      <MainShopsComponent title={HomeLan.mainPopularShops_title} />
      <ListBannerImages ListImg={imgList2} />
      <MainProductsComponent title={HomeLan.mainAllProducts_title} />
      <MainFeatureBannerComponent />
      {/* <MainWonderfullyComponent /> */}
      <WonderFullyComponent />
      <MainBannerComponent start={8} end={12} />
      <ListBannerImages ListImg={imgList3} />
      <MainPopularProducts />
      <MainNoticeBannerComponent row={"second"} />
      <MainLastBannerComponent />
    </Fragment>
  );
};

export default Home;
