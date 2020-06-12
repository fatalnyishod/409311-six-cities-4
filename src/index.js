import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

const init = () => {
  const settings = {
    apartCount: 312
  };

  ReactDOM.render(
      <App
        apartCount={settings.apartCount}
      />,
      document.getElementById(`root`)
  );
};

init();
