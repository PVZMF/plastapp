import styled from "@emotion/styled";

export const FlexMainProduct = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem clamp(1rem, 3vw, 3rem);
  background: #fff;
  margin: 0 0 .5rem 0;

  .header-property {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;

      h4 {
          color: #333;
          font-size: clamp(1rem, 1.5vw, 1.5rem);
      }

      .down-icon {
          color: #666;
          font-size: clamp(1.5rem, 2vw, 2rem);
          transition: all .3s;

          &:hover {
            cursor: pointer;
          }
      }

      .up-icon {
        color: #666;
        font-size: clamp(1.5rem, 2vw, 2rem);
        transform: rotate(180deg);
        transition: all .3s;

        &:hover {
          cursor: pointer;
        }
      }
  }

  .hide-property {
    width: 100%;
    max-height: 0;
    transition: all .4s ease-in-out;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0;
    li {
        width: 100%;
        padding: 1.2rem 0;

        h5 {
            color: #666;
            font-weight: 300;
            font-size: clamp(1rem, 1.3vw, 1.3rem);
        }
    }
  }

  .list-property {
    width: 100%;
    max-height: 100vh;
    transition: all .4s ease-in-out;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 2rem 0;

    li {
        width: 100%;
        padding: 1.2rem 0;

        h5 {
            color: #666;
            font-weight: 300;
            font-size: clamp(1rem, 1.3vw, 1.3rem);
        }
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
