import React from 'react';
import ApartCard from './apart-card.jsx';
import renderer from 'react-test-renderer';

describe(`apart-card component snap`, () => {
  const title = `title`;

  it(`correct render`, () => {
    const tree = renderer.create(
        <ApartCard title={title} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
