import styled from "@emotion/styled";

export const FlexFooter = styled.div`
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  .gird-container {
    width: 100%;
  }
  .image--div {
    max-height: 400px;
    min-height: 200px;
    &--img {
      height: 100%;
      object-fit: cover;
    }
  }
`;
