import * as React from 'react';
import PropTypes from 'prop-types';

const App = ({children}) => {
  return <React.Fragment>{children}</React.Fragment>;
};

App.propTypes = {
  children: PropTypes.isRequired,
};

export default App;
