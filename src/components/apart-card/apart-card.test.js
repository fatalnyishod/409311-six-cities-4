import React from 'react';
import ApartCard from './apart-card.jsx';
import renderer from 'react-test-renderer';

describe(`apart-card component snap`, () => {
  const title = `title`;
  const handleOnTitleClick = jest.fn();

  it(`correct render`, () => {
    const tree = renderer.create(
        <ApartCard
          title={title}
          handleOnTitleClick={handleOnTitleClick}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
