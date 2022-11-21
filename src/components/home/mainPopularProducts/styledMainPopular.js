import styled from "@emotion/styled";

export const FlexMainPopular = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  background-color: rgb(105, 168, 255);

  .custom_swiper {
    font-family: swiper-icons;
    flex-basis: 80%;
    height: 100%;
    .swiper-pagination-bullet {
    }

    .swiper-pagination-bullet-active {
      background-color: var(--primary-black);
    }

    .slide {
      background-color: var(--primary-white);
    }
  }

  .banner {
    flex-basis: 20%;
    &--img {
      width: 90%;
    }
  }
`;
