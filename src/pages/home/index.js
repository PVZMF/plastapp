import React, { Fragment } from 'react'

// Components

import MainSliderComponent from '../../components/home/mainSliderComponent'
import MainSearchComponent from '../../components/home/mainSearch/MainSearchComponent'
import MainCategoryComponent from '../../components/home/mainCategoy/MainCategoryComponent'
import MainSuggestedComponent from '../../components/home/mainSuggested/MainSuggestedComponent'
import MainNoticeBannerComponent from '../../components/home/mainNoticeBanner/MainNoticeBannerComponent'
import MainShopsComponent from '../../components/home/mainShops/MainShopsComponent'
import MainBannerComponent from '../../components/home/mainBanner/MainBannerComponnet'
import MainProductsComponent from '../../components/home/mainProducts/MainProductsComponent'
import MainFeatureBannerComponent from '../../components/home/mainFeatureBanner/MainFeatureBannerComponent'
import MainWonderfullyComponent from '../../components/home/mainWonderfully/MainWonderfullyComponent'
import MainPopularProducts from '../../components/home/mainPopularProducts/MainPopularProducts'
import MainLastBannerComponent from '../../components/home/mainLastBanner/MainLastBannerComponent'


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