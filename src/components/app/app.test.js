import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

describe(`app component snap`, () => {
  const apartCount = 42;
  const apartTitles = [`title-1`, `title-2`, `title-3`];

  it(`correct render`, () => {
    const tree = renderer.create(
        <App apartCount={apartCount} apartTitles={apartTitles} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
