import styled from "@emotion/styled";

export const FlexDownCart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: cenetr;
  flex-direction: column;
  padding: 2rem clamp(1rem, 4vw, 4rem);
  box-sizing: border-box;

  .header-suggestion {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin: 0 0 4rem 0;

      .right {
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        flex-direction: column;

        h4 {
            color: #333;
            font-size: clamp(1rem, 1.5vw, 1.5rem);
            margin-bottom: 1rem;
        }

        h5 {
            color: #777;
            font-weight: 400;
            font-size: clamp(.9rem, 1.3vw, 1.3rem);
        }
      }

      button {
          color: #3086d1;
          font-size: clamp(1rem, 1.5vw, 1.5rem);
          padding: 0 0 .5rem 0;
          border-bottom: 2px dashed #3086d1;

          &:hover {
              color: #0971e4;
              cursor: pointer;
          }
      }
  }

  .list-suggestion {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      overflow: auto;

      .box-list {
        width: 100%;
        min-width: 1200px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }

`;
