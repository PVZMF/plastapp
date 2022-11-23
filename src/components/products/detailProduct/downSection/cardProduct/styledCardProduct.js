import styled from "@emotion/styled";

export const FlexCardProduct = styled.div`
width: 300px;
height: 400px;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
padding: clamp(1rem, 1.5vw, 1.5rem);
box-sizing: border-box;
margin: 1rem;
background: #fff;

.image {
    width: 100%
    overflow: hidden;
    img {
        object-fit: cover;
    }
}

.product-data {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    h3 {
        color: #222;
        font-weight: 400;
        font-size: clamp(1rem, 1.2vw, 1.2rem);
        margin: 1.5rem 0 0 0;
    }

    .location {
        width: 100%;
        display:flex;
        align-items: center;
        justify-content: flex-start;
        margin: 1.5rem 0;

        svg {
            color: #555;
            margin: 0 0 0 .5rem;
            font-size: 1.5rem;
        }
        p {
            color: #555;
            font-size: 1rem;
        }
    }

    .down-items {
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        button {
            color: #fff;
            background: #69a9ff;
            padding: .6rem 1rem .3rem;
            font-size: 1.4rem;
            border-radius: .5rem;

            &:hover {
              cursor: pointer;
              background: #0971e4;
            }
        }

        .added {
          color: #fff;
          background: rgb(3, 154, 33);
          padding: .6rem 1rem .3rem;
          font-size: 1.4rem;
          border-radius: .5rem;
          &:hover {
            cursor: default;
            background: rgb(3, 154, 33);
          }
        }

        .price-box {
          height: 70px;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          flex-direction: column;

          .offer {
              margin: 1.5rem 0;
              span {
                  color: #ff5c39;
                  background: #ffe7db;
                  padding: .4rem;
                  font-size: 1.2rem;
                  border-radius: .5rem;
                  margin: 0 .5rem 0 0;
              }
          }

          del {
              color: #999;
              font-size: 1.3rem;
          }
          h5 {
              color: #333;
              font-size: 1.5rem;

              span {
                  color: #444;
                  font-size: 1.1rem;
              }
          }
        }
    }
}

@media (max-width: 1000px) {
  flex-direction: column;
}

`;
