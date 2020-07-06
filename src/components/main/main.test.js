import React from 'react';
import Main from './main.jsx';
import renderer from 'react-test-renderer';

const apartTitles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

describe(`main component snap`, () => {
  const apartCount = 3;
  const handleTitleClick = jest.fn();

  it(`correct render`, () => {
    const tree = renderer.create(
        <Main
          handleTitleClick={handleTitleClick}
          apartCount={apartCount}
          apartTitles={apartTitles}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
