import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

const apartTitles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

describe(`app component snap`, () => {
  const apartCount = 42;
  const handleTitleClick = jest.fn();

  it(`correct render`, () => {
    const tree = renderer.create(
        <App
          handleTitleClick={handleTitleClick}
          apartCount={apartCount}
          apartTitles={apartTitles}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
