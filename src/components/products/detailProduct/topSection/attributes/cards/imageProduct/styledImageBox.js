import styled from "@emotion/styled";

export const FlexImageBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: clamp(1rem, 3vw, 3rem);
  background: #fff;
  margin: 0 0 .5rem 0;

  .right-imgbox {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    .active_img {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: clamp(24rem, 48vh, 48rem);
      margin: 0 .5rem 2rem;
      background-repeat: no-repeat;
      background-size: 100% 100% !important;


      &:hover img {
        transform: scale(1.5);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
        transition: all .4s;
        &:hover {
          transform: scale(1.5);
        }
      }

      .next-img, .prev-img {
        position: absolute;
        top: clamp(12rem, 24vh, 24rem);
        font-size: 3rem;
        font-weight: 300;
        background: #f7f7f7;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .5rem;

        &:hover {
          cursor: pointer;
        }
      }

      .next-img {
        right: 0;
      }
      .prev-img {
        left: 0;
      }
    }


    .list-img {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      overflow: auto;

      .mini-img {
        width: 100%;
        height: 100%;
        padding: .7rem;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);

        &:hover {
          cursor: pointer;
        }
      }

      .active-mini {
        width: 100%;
        height: 100%;
        padding: .7rem;
        -webkit-filter: grayscale(0%);
        filter: grayscale(0%);
      }
    }
  }

  .left-imgbox {
    width: 100%;
    min-height: 500px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 2rem 1rem 0;

    .header-detail {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      h2 {
        font-size: clamp(1rem, 1.6vw, 1.6rem);
      }

      .icons-detail {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        flex-direction: column;

        svg {
          color: #666;
          margin: 0 0 1.5rem;
          font-size: clamp(1.6rem, 2.3vw, 2.3rem);
          transition: all .2s;

          &:hover {
            cursor: pointer;
            color: #69a9ff;
          }
        }
      }
    }

    .footer-detail {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      h4 {
        color: #444;
        font-size: clamp(.9rem, 1.2vw, 1.2rem);
        display: flex;
        align-items: center;

        &:hover {
          cursor: pointer;
          color: #000;
        }

        svg {
          color: rgb(13, 173, 13);
          font-size: clamp(1.6rem, 2.3vw, 2.3rem);
          margin: 0 0 0 .7rem;
        }
      }
    }

  }

  @media (max-width: 1000px) {
    flex-direction: column;
    .left-imgbox {
      min-height: auto;

      .header-detail {
        flex-direction: column;
        padding-top: 2rem;
        .icons-detail {
          align-items: center;
          justify-content: flex-start;
          flex-direction: initial;
          margin: 1rem 0;

          svg {
            margin: 1rem .7rem;
          }
        }
    }
    }
  }
`;
