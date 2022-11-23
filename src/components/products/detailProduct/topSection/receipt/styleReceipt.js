import styled from "@emotion/styled";

export const FlexMainReceipt = styled.div`
width: 100%;
min-height: 500px;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
box-sizing: border-box;
background: transparent;
position: sticky;
top: 0;


.top-receipt {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    padding: 2.5rem 2rem;
    margin: 0 0 2rem 0;

    .title {
        color: #444;
        font-size: clamp(1rem, 1.5vw, 1.5rem);
    }

    .profile {
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        margin: 1.5rem 0;

        img {
            width: 10rem;
            height: 10rem;
            border-radius: .7rem;
            margin: 0 0 0 1rem;
        }

        .box-profle {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;

            h4 {
                color: #222;
                font-size: clamp(1rem, 1.3vw, 1.3rem);
                margin: 0 0 1rem 0;
            }
            
            h5 {
                color: #555;
                font-size: clamp(1rem, 1.1vw, 1.1rem);
                margin: 0 0 2rem 0;
            }
        }
    }

    .btns-receipt {
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-evenly;
        margin: 2rem 0;

        .dialogue {
            width: clamp(7rem, 12vw, 12rem);
            color: #69a9ff;
            border: 2px solid #69a9ff;
            background: #fff;
            font-size: clamp(1rem, 1.4vw, 1.4rem);
            padding: .7rem clamp(1rem, 2vw, 2rem);
            border-radius: .6rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .more-data {
            width: clamp(7rem, 12vw, 12rem);
            color: #444;
            border: 2px solid #444;
            background: #fff;
            font-size: clamp(1rem, 1.4vw, 1.4rem);
            padding: .7rem clamp(1rem, 2vw, 2rem);
            border-radius: .6rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}

.down-receipt {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background: #fff;
    padding: 2.5rem 2rem;

    .send-items {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 0 0 4rem 0;

        .send-box {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            &:nth-child(2) {
                border-inline: 1px solid #999;
            }

            h5 {
                color: #999;
                font-weight: 300;
                font-size: clamp(1rem, 1.2vw, 1.2rem);
                margin: 0 0 1rem 0;
            }
            h4 {
                color: #333;
                font-weight: 300;
                font-size: clamp(1rem, 1.4vw, 1.4rem);
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

    .buy {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        border-radius: 1.2rem;
        color: #fff;
        background: #69a9ff;
        font-size: clamp(1.3rem, 1.5vw, 1.5rem);
        margin: 2rem 0;
        transition: all .3s;

        &:hover {
            cursor: pointer;
            background: #1971e4;
        }

        svg {
            margin: 0 0 0 1.5rem; 
        }
    }
}


@media (max-width: 1000px) {
    width: 100%;
    min-height: 20px;
    flex-direction: column;
    height: auto;

    .top-receipt, p, .title-receipt {
        display: none;
    }

    .down-receipt {
        bottom: 0;

        .send-items {
            display: none;
        }
    }
}
`;
