import styled from "@emotion/styled";

export const FlexMainShops = styled.div`
  margin-bottom: 20px;
  .custom_swiper {
    border: 2px solid hsl(220 3% 15% / 10%);
  }

  .shop_box {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: clamp(100px, 4vw, 200px);
    padding: 15px;
    border: 1px solid hsl(220 3% 15% / 10%);

    &--title {
      width: 100%;
      text-align: center;
      font-size: 1.4rem;
    }

    &--img {
      width: 100%;
      height: 8rem;
      object-fit: cover;
    }
  }
`;
