import styled from "@emotion/styled";

export const FlexTopCart = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem clamp(1rem, 4vw, 4rem);
  box-sizing: border-box;

  .attributes {
    width: 64%;
    margin: .2rem;
  }
  .receipt {
    width: 34%;
    margin: .2rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    .attributes {
      width: 100%;
    }
    .receipt {
      width: 100%;
      position: fixed;
      left: 0;
      bottom: 0;
      margin: 0;
    }
  }

`;
