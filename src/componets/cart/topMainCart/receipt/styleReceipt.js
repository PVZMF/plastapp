import styled from "@emotion/styled";

export const FlexMainReceipt = styled.div`
width: 100%;
height: 500px;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
padding: clamp(1.5rem, 3vw, 3rem);
box-sizing: border-box;
background: #fff;


.top-receipt {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
}

hr {
    width: 80%;
    border-top: 2px solid #999;
    margin: 3rem 0;
}

.title-receipt {
    color: #111;
    font-size: clamp(1.2rem, 1.7vw, 1.7rem);
    margin-bottom: 3rem;
}

.products-price {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .price {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3rem;

        h4 {
            color: #444;
            font-size: clamp(1rem, 1.4vw, 1.4rem);
            font-weight: 400;
            span {
                font-size: clamp(.8rem, 1.2vw, 1.2rem);
            }
        }
    }

    .off {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h4 {
            color: #ff5c39;
            font-size: clamp(1rem, 1.4vw, 1.4rem);
            font-weight: 400;
            span {
                font-size: clamp(.8rem, 1.2vw, 1.2rem);
            }
        }
    }
}

.send {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h5 {
        color: #444;
        font-size: clamp(1rem, 1.4vw, 1.4rem);
        font-weight: 400;
        span {
            font-size: clamp(.8rem, 1.2vw, 1.2rem);
        }
    }
}

.total-amount {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 1rem 0;

    h5 {
        color: #000;
        font-size: clamp(1.2rem, 1.6vw, 1.6rem);
        span {
            font-size: clamp(.8rem, 1.2vw, 1.2rem);
        }
    }
}

button {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 1.2rem;
    color: #fff;
    background: #69a9ff;
    font-size: clamp(1.3rem, 1.8vw, 1.8rem);
    margin: 2rem 0;
    transition: all .3s;

    &:hover {
        cursor: pointer;
        background: #1971e4;
    }
}

p {
    color: #337211;
    font-size: clamp(1rem, 1.4vw, 1.4rem);
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 0 0.5rem;
    }
}

@media (max-width: 1000px) {
  flex-direction: column;
  height: auto;

  .top-receipt, p, .title-receipt {
      display: none;
  }
}
`;
