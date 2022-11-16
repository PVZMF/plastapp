import React, { Fragment } from 'react'

// Components
import MainSliderComponent from '../../componets/home/mainSliderComponent'
import MainSearchComponent from '../../componets/home/mainSearch/MainSearchComponent'
import MainCategoryComponent from '../../componets/home/mainCategoy/MainCategoryComponent'
import MainSuggestedComponent from '../../componets/home/mainSuggested/MainSuggestedComponent'
import MainNoticeBannerComponent from '../../componets/home/mainNoticeBanner/MainNoticeBannerComponent'
import MainShopsComponent from '../../componets/home/mainShops/MainShopsComponent'
import MainBannerComponent from '../../componets/home/mainBanner/MainBannerComponnet'
import MainProductsComponent from '../../componets/home/mainProducts/MainProductsComponent'
import MainFeatureBannerComponent from '../../componets/home/mainFeatureBanner/MainFeatureBannerComponent'
import MainWonderfullyComponent from '../../componets/home/mainWonderfully/MainWonderfullyComponent'
import MainPopularProducts from '../../componets/home/mainPopularProducts/MainPopularProducts'
import MainLastBannerComponent from '../../componets/home/mainLastBanner/MainLastBannerComponent'

import { HomeLan } from "../../json/language/fa";

const Home = () => {
  return (
    <Fragment>
      <MainSliderComponent />
      <MainSearchComponent />
      <MainCategoryComponent />
      <MainSuggestedComponent title={HomeLan.mainSuggested_title} />
      <MainNoticeBannerComponent row={"first"} />
      <MainShopsComponent title={HomeLan.mainTopShops_title} />
      <MainBannerComponent start={0} end={4} />
      <MainShopsComponent title={HomeLan.mainPopularShops_title} />
      <MainBannerComponent start={4} end={8} />
      <MainProductsComponent title={HomeLan.mainAllProducts_title} />
      <MainFeatureBannerComponent />
      <MainWonderfullyComponent />
      <MainBannerComponent start={8} end={12} />
      <MainPopularProducts />
      <MainNoticeBannerComponent row={"second"} />
      <MainLastBannerComponent />
    </Fragment>
  )
}

export default Home