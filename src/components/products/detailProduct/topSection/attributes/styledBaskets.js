import styled from "@emotion/styled";

export const FlexMainBaskets = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: .5rem;
  box-sizing: border-box;

  .header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      box-sizing: border-box;

      .title {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.2rem;
          border-bottom: 4px solid #fff;

          &:hover {
            cursor: pointer;
            h5 {
                color: #69a9ff;
                font-size: 1.5rem;
            }
          }

          h5 {
              color: #7f7f7f;
              font-size: 1.5rem;
          }
      }


      .active {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.2rem;
        border-bottom: 4px solid #69a9ff;

        &:hover {
          cursor: pointer;
          h5 {
              color: #69a9ff;
              font-size: 1.5rem;
          }
        }

        h5 {
            color: #7f7f7f;
            font-size: 1.5rem;
        }
    }

  }

  .cart-list {
    width: 100%;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
