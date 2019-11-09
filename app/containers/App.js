import React from 'react';
import PropTypes from 'prop-types';

const App = ({children}) => {
  return (
    <>
    {children}
    </>
  );
};

App.propTypes = {
  children: PropTypes.isRequired,
};

export default App;
