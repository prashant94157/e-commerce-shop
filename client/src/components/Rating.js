import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ val, text, color }) => {
  return (
    <div className='rating'>
      <span>
        <i
          style={{ color }}
          className={
            val >= 1
              ? 'fas fa-star'
              : val >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
        <i
          style={{ color }}
          className={
            val >= 2
              ? 'fas fa-star'
              : val >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
        <i
          style={{ color }}
          className={
            val >= 3
              ? 'fas fa-star'
              : val >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
        <i
          style={{ color }}
          className={
            val >= 4
              ? 'fas fa-star'
              : val >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
        <i
          style={{ color }}
          className={
            val >= 5
              ? 'fas fa-star'
              : val >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

Rating.propTypes = {
  val: PropTypes.number,
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Rating;
