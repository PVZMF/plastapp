import styled from "@emotion/styled";

export const MainSliderContainer = styled.div`
  .mySwiper {
    .swiper-button-next,
    .swiper-button-prev {
      color: var(--primary-white);
    }
    .swiper-pagination{
      // position: static;
      width: auto;
      left: auto;
      bottom: 2px;
      right: 20px;
    }
    .swiper-pagination-bullet{
      margin: 1px;
      width:8px;
      // height:clamp(1px,50%,10px);
    }
    .swiper-pagination-bullet-active {
      background-color: var(--primary-blue);
      padding:5px;

    }
  }
  .slide {
    cursor: pointer;
    max-height: 300px;
    overflow: hidden;
  }
`;
