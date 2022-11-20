import styled from "@emotion/styled";

export const FlexMainBanner = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-top: 90px;

  gap: 20px;
  justify-content: center;
  align-items: center;
  .banner {
    flex-basis: 30%;
    overflow: hidden;
    &--img {
      object-fit: cover;
    }
  }
`;
