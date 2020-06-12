import React from 'react';
import Main from './main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {apartCount} = props;

  return <Main apartCount={apartCount} />;
};

export default App;
