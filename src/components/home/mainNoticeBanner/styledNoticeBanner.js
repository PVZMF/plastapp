import styled from "@emotion/styled";

export const FlexMainNoticeBanner = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 1.5rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .banner {
    flex-basis: 50%;
    overflow: hidden;
    margin-bottom: 3.5rem;
    &--img {
      object-fit: cover;
    }
  }
`;
