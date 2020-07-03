import React from 'react';
import Main from './main.jsx';
import renderer from 'react-test-renderer';

describe(`main component snap`, () => {
  const apartCount = 42;
  const apartTitles = [`title-1`, `title-2`, `title-3`];

  it(`correct render`, () => {
    const tree = renderer.create(
        <Main apartCount={apartCount} apartTitles={apartTitles} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
