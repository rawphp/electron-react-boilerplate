import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions/counter';
import styles from './Counter.css';
import routes from '../routes.json';

const Counter = ({ counter }) => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };

  const decrement = () => {
    dispatch(actions.decrement());
  };

  const incrementAsync = (delay = 1000) => {
    setTimeout(() => {
      dispatch(actions.increment());
    }, delay);
  };

  const incrementIfOdd = () => {
    if (counter % 2 === 0) {
      return;
    }

    dispatch(actions.increment());
  };

  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <div className={`counter ${styles.counter}`} data-tid="counter">
        {counter}
      </div>
      <div className={styles.btnGroup}>
        <button
          className={styles.btn}
          onClick={increment}
          data-tclass="btn"
          type="button"
        >
          <i className="fa fa-plus" />
        </button>
        <button
          className={styles.btn}
          onClick={decrement}
          data-tclass="btn"
          type="button"
        >
          <i className="fa fa-minus" />
        </button>
        <button
          className={styles.btn}
          onClick={incrementIfOdd}
          data-tclass="btn"
          type="button"
        >
          odd
        </button>
        <button
          className={styles.btn}
          onClick={incrementAsync}
          data-tclass="btn"
          type="button"
        >
          async
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default Counter;
