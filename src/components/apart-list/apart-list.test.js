import React from "react";
import ApartList from "./apart-list.jsx";
import renderer from 'react-test-renderer';

const titles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

describe(`apart-list component snap`, () => {
  const handleTitleClick = jest.fn();

  it(`correct render`, () => {
    const tree = renderer.create(
        <ApartList
          titles={titles}
          handleTitleClick={handleTitleClick}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
