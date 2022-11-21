import { toPersianNumber } from "functions/numbers";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Modal from "../modal";
const NameDetail = ({ productName, productRate, productComments }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen((p) => !p);
  };

  return (
    <div>
      <Modal open={isOpen} handleClose={setIsOpen}>
        <div className="comments-box">
          <ul>
            {productComments?.map((item) => (
              <li className="comment-modal-box" key={item.id}>
                {/* <p className="comment-userName">{item.userName}</p> */}
                <p className="comment-content">{item.comment}</p>
              </li>
            ))}
          </ul>
        </div>
        <form className="comment-form">
          <p className="comment-form-title">نظر خود را وارد کنید</p>
          <div>
            <input
              className="rate-input"
              type="number"
              min="0"
              max="5"
              required
              defaultValue={0}
            ></input>
            <label>امتیاز</label>
          </div>
          <textarea
            className="text-area"
            required
            placeholder="نظر خود را وارد کنید"
          ></textarea>
          <button type="submit" className="comment-btn-form">
            ارسال نظر
          </button>
        </form>
      </Modal>
      <h3 className="product-title">{productName}</h3>
      <div className="rate">
        <AiFillStar className="star" />
        <p>{toPersianNumber(productRate)}</p>
        <p className="number-of-rate">{"(9)"}</p>
        <p className="comment-btn" onClick={showModal}>
          دیدگاه {productComments.length}
        </p>
      </div>
    </div>
  );
};
export default NameDetail;
