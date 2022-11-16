import styled from "@emotion/styled";

export const FlexMainCateogry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  width: 85%;
  margin: 0 auto;
  .category_box {
    width: calc( (100% * 1/4) - (2rem * 3) );

    &--link {
      text-align: center;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    @media screen and (max-width: 1170px) {
      width: calc( (100% * 1/4) - (1rem * 3));
    }

    .category_box--img {
      width: 60%;
    }
  }
`;
