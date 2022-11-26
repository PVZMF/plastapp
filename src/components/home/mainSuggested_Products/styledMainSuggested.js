import styled from "@emotion/styled";

export const FlexMainSuggested = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  background-color: var(--light-banner-red);

  .banner {
    flex-basis: 20%;
    &--img {
      width: 90%;
    }
  }

  .custom_swiper {
    height: 100%;

    .swiper-pagination-bullet {
    }
    .swiper-pagination-bullet-active {
      background-color: var(--primary-black);
    }
    .slide {
      background-color: var(--primary-white);
    }
    .swiper-wrapper{
      box-sizing : border-box;
    }
  }

  &.blue {
    background-color: var(--primary-blue);
  }

  &.gray {
    background-color: var(--light-blue);
  }

  @media (max-width: 600px) {
    height: 200px
  },

`;
