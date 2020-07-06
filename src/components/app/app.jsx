import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const handleTitleClick = () => {};

const App = (props) => {
  const {apartCount, apartTitles} = props;

  return (
    <Main
      apartCount={apartCount}
      apartTitles={apartTitles}
      handleTitleClick={handleTitleClick}
    />
  );
};

App.propTypes = {
  apartCount: PropTypes.number.isRequired,
  apartTitles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
