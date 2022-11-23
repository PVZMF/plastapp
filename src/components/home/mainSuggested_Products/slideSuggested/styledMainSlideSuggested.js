import styled from "@emotion/styled";

export const FlexMainSlidSuggested = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 0;
  position: relative;

  .offer-notif {
    position: absolute;
    left: -10px;
    top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: clamp(.5rem, .8vw, .8rem);
    background: rgb(215, 77, 77);

    h5, p {
      color: #fff;
      font-size: clamp(.9rem, 1.3vw, 1.3rem);
    }
  }
  
  img {
    width: 100%;
    height: clamp(10rem, 13vw, 13rem);
    object-fit: cover;
  }

  .stars {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .active {
      color: rgb(215, 77, 77);
      font-size: clamp(1.3rem, 2vw, 2rem);
      margin: 0 .3rem;
    }
    .stargray {
      color: #999;
      font-size: clamp(1.3rem, 2vw, 2rem);
      margin: 0 .3rem;
    }
  }

  h2 {
    color: rgb(215, 77, 77);
    font-size: clamp(1rem, 1.5vw, 1.5rem);
  }

  .true {
    color: #555;
    font-size: clamp(.9rem, 1.3vw, 1.3rem);
  }
  .noting {
    color: rgb(215, 77, 77);
    font-size: clamp(.9rem, 1.3vw, 1.3rem);
  }

  .price-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h5 {
      color: #555;
      font-weight: 300;
      font-size: clamp(1rem, 1.5vw, 1.5rem);
      margin: 0 1rem;

      span {
        color: rgb(215, 77, 77);
        font-size: clamp(.9rem, 1.1vw, 1.2rem);
      }
    }
    del {
      color: #777;
      font-weight: 300;
      font-size: clamp(1rem, 1.5vw, 1.5rem);
      margin: 0 1rem;
    }
  }

  @media (max-width: 600px) {
    align-items: center;
  },

`;
