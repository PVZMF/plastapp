import { base_api_url } from 'api';
import axios from 'axios';
import { Rating } from 'react-simple-star-rating';
import { getItem } from 'lcoalStorage';
import { useState } from 'react';
import Modal from '../DetailsProduct/modal';
import { useReducer } from 'react';
import { Typography } from '@mui/material';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const initialNewCommentContent = {
    rating: 0,
    comment: '',
  },
  initialNewCommentStatus = { status: 'idle' };

const newCommentStatusReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case 'idle':
      return { status: 'idle' };
    case 'PENDING':
      return { status: 'pending' };
    case 'ERROR':
      return { status: 'error', errors: action.errors };
    case 'SUCCESS':
      return { status: 'success' };
    default:
      throw new Error('wrong type for newCommentStatusReducer');
  }
};

// const Comments = ({ id, refreshPageContent, isOpen, setIsOpen, comments }) => {
const Comments = ({ id, isOpen, setIsOpen, comments, user }) => {
  const [newCommentContent, setNewCommentContent] = useState(
      initialNewCommentContent
    ),
    [newCommentStatus, setNewCommentStatus] = useReducer(
      newCommentStatusReducer,
      initialNewCommentStatus
    );

  const newCommentForm = () => (
    <form className="comment-form" onSubmit={handleFormSubmit}>
      <Rating
        onClick={(rating) =>
          setNewCommentContent((prevValue) => ({
            ...prevValue,
            rating,
          }))
        }
        ratingValue={newCommentContent.rating}
        // allowHalfIcon
      />
      <input
        className="text-area"
        required
        value={newCommentContent.comment}
        onChange={(e) =>
          setNewCommentContent((prevValue) => ({
            ...prevValue,
            comment: e.target.value,
          }))
        }
        placeholder="نظر خود را وارد کنید"
        label="نظر خود را وارد کنید"
      />
      <button type="submit" className="comment-btn-form">
        ارسال نظر
      </button>
    </form>
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setNewCommentStatus({ type: 'PENDING' });
    const accessToken = getItem('access');

    axios
      .post(
        `${base_api_url}/addrate/${id}/`,
        { ...newCommentContent, rating: newCommentContent.rating / 20 },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        // refreshPageContent();
        setNewCommentStatus({ type: 'SUCCESS' });
        setNewCommentContent(initialNewCommentContent);
      })
      .catch((err) => {
        setNewCommentStatus({
          type: 'ERROR',
          errors: [err.response.data.detail],
        });
      });
  };

  return (
    <Modal open={isOpen} handleClose={setIsOpen}>
      <div className="comments-box">
        {comments?.length > 0 ? (
          <ul>
            {comments?.map((item) => (
              <li
                className="comment-modal-box"
                style={{ direction: 'rtl' }}
                key={item.id}
              >
                {/* <p className="comment-userName">{item.userName}</p> */}
                <p style={{ direction: 'rtl' }} className="comment-content">
                  {item.comment}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-comment-prg">
            اولین نفری باشید که برای این محصول نظر میگذارید!
          </p>
        )}
      </div>
      {user ? (
        newCommentForm()
      ) : (
        <Link to="/login" style={{ color: 'darkblue', direction: 'rtl' }}>
          برای افزودن نظر خود باید ابتدا وارد حساب خود شوید
        </Link>
      )}
      {newCommentStatus.status === 'error' &&
        newCommentStatus.errors.map((error) => (
          <Typography component="p" sx={{ color: 'red', direction: 'rtl' }}>
            {error}
          </Typography>
        ))}
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Comments);
