import styled from "@emotion/styled";

export const FlexMainTikesList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: clamp(1rem, 2vw, 2rem);
  background: #f1f3fa;
  min-height: 70vh;
  overflow: hidden;

  a {
    width: 100%;
  }

  .box-ticket {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: clamp(1rem, 2vw, 2rem) clamp(2rem, 4vw, 4rem);
    background: #fff;

    .header-tikes {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem 0;
      border-bottom: 1px solid #e2dfdf;
      padding: clamp(1rem, 2vw, 2rem) 0;
  
      h4 {
        color: #578ebe;
        font-size: clamp(1rem, 1.6vw, 1.6rem);
      }
    }
  }

  .search-ticket {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: clamp(1rem, 2vw, 2rem) 0;

    @media (max-width: 600px) {
      align-items: flex-start;
      justify-content: center;
      flex-direction: column !important;
      gap: 1rem;
    }

    input {
      color: #333;
      width: clamp(20rem, 40vw, 40rem);
      border: 1px solid #e2dfdf;
      padding: clamp(.5rem, 1vw, 1rem);
      font-size: clamp(1rem, 1.4vw, 1.4rem);

      &::placeholder {
        font-size: clamp(1rem, 1.4vw, 1.4rem);
      }
    }

    button {
      color: #fff;
      background: #428bca;
      padding: clamp(.5rem, 1vw, 1rem) clamp(.7rem, 1.3vw, 1.3rem);
      font-size: clamp(1rem, 1.4vw, 1.4rem);
    }
  }

  .box-list-ticket {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: clamp(1rem, 2vw, 2rem) 0;
    overflow: auto;
  }

  .list-ticket {
    width: 100%;
    min-width: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: clamp(1rem, 2vw, 2rem) .5rem;

    .notFound {
      width: 100%;
      margin: 2rem 0;
      padding: 1.3rem;
      border: 1px solid #333;
      display: flex;
      align-items: center;
      justify-content: center;

      h3 {
        color: orange;
        font-weight: 300;
        font-size: clamp(1.3rem, 1.8vw, 1.8rem);
      }
    }

    .link-ticket {
      width: 100%;
    }

    .ticket {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: clamp(1rem, 1.3vw, 1.3rem);
      border: 1px solid #e2dfdf;
      margin: 0 0 1rem 0;

      &:hover {
        cursor: pointer;
        background: #f5f3f3;
        border: 1px solid #abaaaa;
      }

      div {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;

        &:nth-child(1) {
          width: 100%;
        }

        .status1 {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: #f99705;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 0 0 1rem;

          svg {
            color: #333;
            font-size: 2rem;
          }
        }
        .status2 {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: #cec9c9;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 0 0 1rem;

          svg {
            color: #333;
            font-size: 2rem;
          }
        }
      }

      h4 {
        color: #8e8e8e;
        font-weight: 300;
        font-size: clamp(1rem, 1.4vw, 1.4rem);
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .titles {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: clamp(1rem, 1.3vw, 1.3rem);

      div {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        &:nth-child(1) {
          width: 100%;
        }

        h5 {
          color: #333;
          font-weight: 300;
          font-size: clamp(.8rem, 1.4vw, 1.4rem);
        }
    }

  }


  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
