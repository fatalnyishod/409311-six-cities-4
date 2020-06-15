import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';


const apartTitles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

const init = () => {
  const settings = {
    apartCount: 312
  };

  ReactDOM.render(
      <App
        apartCount={settings.apartCount}
        apartTitles={apartTitles}
      />,
      document.getElementById(`root`)
  );
};

init();
