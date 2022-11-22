import styled from "@emotion/styled";

export const FlexMainAboutPro = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem clamp(1rem, 3vw, 3rem);
  background: #fff;
  margin: 0 0 1rem 0;

  .header-about {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem 0;

      h4 {
        color: #333;
        font-size: clamp(1rem, 1.5vw, 1.5rem);
      }
  }

  .desc {
    max-height: 100vh;
    color: #777;
    font-size: clamp(1rem, 1.3vw, 1.3rem);
    transition: all .4s ease-in-out;
    font-weight: 300;
  }

  .hide-desc {
    max-height: 0;
    color: #777;
    font-size: clamp(1rem, 1.3vw, 1.3rem);
    transition: all .4s ease-in-out;
    overflow: hidden;
    font-weight: 300;
  }

  .footer-about {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
      font-size: clamp(1rem, 1.2vw, 1.2rem);

      &:hover {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
