import styled from "@emotion/styled";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: clamp(1rem, 3vw, 3rem);
  background: #fff;
  margin: 0 0 .5rem 0;

  .top-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 clamp(2rem, 4vw, 4rem) 0;

    h3 {
      color: #303030;
      font-size: clamp(1rem, 1.4vw, 1.4rem);
    }

    h2 {
      color: #4c4c4c;
      font-size: clamp(.9rem, 1.2vw, 1.2rem);
    }
  }

  .data-product {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .right {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      img {
        width: 150px;
        height: 150px;
        margin: 0 0 0 2rem;
      }

      .box-data {
        width: 100%;
        height: 120px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;

        h2 {
          color: #303030;
          font-size: clamp(.9rem, 1.3vw, 1.3rem);
        }

        .counter {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;

          .number {
            width: clamp(7rem, 8vw, 8rem);
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #b2b2b2;
            border-radius: .5rem;
            background: #f5f5f5;

            span {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #7f7f7f;
              font-size: clamp(1.5rem, 2vw, 2rem);

              &:hover {
                cursor: pointer;
              }
            }

            h5 {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #333;
              font-size: clamp(1.2rem, 1.6vw, 1.6rem);
            }
          }

          button {
            color: #333;
            font-size: 2rem;
            margin: 0 1rem 0 0;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }

    .left {
      width: 30%;
      height: 120px;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      flex-direction: column;
      
      button {
        color: #333;
        font-size: clamp(1.2rem, 1.4vw, 1.4rem);
      }

      del {
        color: #9c9c9c;
        font-weight: 300;
        font-size: clamp(1rem, 1.2vw, 1.2rem);
        margin: .6rem 0;
      }

      .price {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        p {
          color: #000;
          font-size: clamp(1.2rem, 1.7vw, 1.7rem);

          span{
            color: #4c4c4c;
            font-size: clamp(1rem, 1.2vw, 1.2rem);
          }
        }

        h5 {
          color: #ff5c39;
          font-weight: 300;
          font-size: clamp(1rem, 1.2vw, 1.2rem);
          margin: 0 1rem;
        }
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;


    .data-product {
      flex-direction: column;
      .right {
        width: 100%;
        img {
          width: 80px;
          height: 80px;
        }
        .box-data {
          height: 80px;
          margin: 1.5rem 0 1rem 0;

        }
      }

      .left {
        width: 100%;
        height: auto;
        margin: 1.5rem 0 1rem 0;
      }
    }


  }
`;
