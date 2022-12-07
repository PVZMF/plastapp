import styled from "@emotion/styled";

export const FlexMainComments = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem clamp(1rem, 3vw, 3rem);
  background: #fff;
  margin: 0 0 1rem 0;

  .header-sugg {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem 0;
      margin: 0 0 1.5rem 0;

      h4 {
        color: #333;
        font-size: clamp(1rem, 1.5vw, 1.5rem);
      }
  }

  .comments-list {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    .title-comment {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      overflow: hidden;

      .point {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;

        h5 {
          color: #222;
          font-size: clamp(1.2rem, 3vw, 3rem);
          margin: 0 0 1rem 0;
  
          span {
            color: #888;
            font-weight: 300;
            font-size: clamp(1.3rem, 1.7vw, 1.7rem);
          }
        }
  
        p {
          color: #666;
          font-size: clamp(1rem, 1.4vw, 1.4rem);
        }

        .stars {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin: 2rem 0 0 0;

          svg {
            margin: 0 0 0 .6rem;
            color: #69a9ff;
            font-size: clamp(1.2rem, 2vw, 2rem);
          }
        }

      }

      .chart {
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        flex-direction: column;

        .line-chart {
          width: 400px;
          height: 30px;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;

          span {
            width: 3rem;
            color: #999;
            font-size: 1.2rem;
            text-align: right;
          }

          .line {
            width: 200px;
            margin: 0 .5rem;

            hr {
              width: 100%;
              border-top: 3px solid #999;
            }
          }
        }
      }

    }
  }

  .list-comments {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  .add_comment_box {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin: 2rem 0;

    label {
      color: #333;
      font-weight: 900;
      font-size: clamp(1.2rem, 1.5vw, 1.5rem);
    }

    textarea {
      width: 100%;
      max-width: 100%;
      height: clamp(10vh, 20vh, 20vh);
      max-height: clamp(10vh, 20vh, 20vh);
      font-size: clamp(.9rem, 1.2vw, 1.2rem);
      border-radius: .7rem;
      margin: 2rem 0;
      outline: none;
      padding: 1rem;
    }

    button {
      color: #fff;
      background: #69a9ff;
      padding: 1rem 2rem;
      border-radius: .7rem;
      font-size: clamp(.9rem, 1.2vw, 1.2rem);

      &:hover {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 600px) {
    .title-comment {
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      .chart {
        margin: 2rem 0;
        justify-content: center;

        .line-chart {
          width: 100%  !important;
          justify-content: flex-start !important;
      }
    }
  }
`;
