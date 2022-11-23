import styled from "@emotion/styled";

export const FlexMainShops = styled.div`
  margin-bottom: 20px;
  .custom_swiper {
    border: 2px solid hsl(220 3% 15% / 10%);
  }

  .shop_box {
    flex-direction: column;
    width: clamp(100px,40%,200px);
    padding: 15px;
    border: 1px solid hsl(220 3% 15% / 10%);

    &--title {
      width: 100%;
      text-align: center;
      font-size: 1.4rem;
    }

    &--img {}
  }
`;
