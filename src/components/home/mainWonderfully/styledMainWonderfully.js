import styled from "@emotion/styled";

export const FlexMainBanner = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  align-items: center;

  .basketImg {
    aspect-ratio: 1 / 1;
    width: 60px;
  }
  .wonderImg {
    aspect-ratio: 16 / 10;
    width: 160px;
    hight: 50px;
  }
  basketImg-div {
    width: clac(100%/4);
  }
  .wonderImg_div {
    width: clac(100%/4);
  }
  .discount_div {
    background-color: #3ead07;
    border-radius: 10px;
    font-size: 10px;
    width: 100%;
    text-align: center;
    width: 100px;
    &--discountTitle {
      color: #fcfcfc;
      padding: 10px;
    }
  }

  .products-div {
    width: clac(100%/4) !important;
  }

  .goToProducts {
    background-color: white;
    border-radius: 20px;

    &--title {
      color: #3ead07;
      padding: 15px;
      &--arrow {
        width: 10px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .wonderImg {
      width: 30px;
    }
    .basketImg {
      width: 30px;
    }
  }
`;
