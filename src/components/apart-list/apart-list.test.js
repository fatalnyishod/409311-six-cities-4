import React from "react";
import ApartList from "./apart-list.jsx";
import renderer from 'react-test-renderer';

describe(`apart-list component snap`, () => {
  const titles = [`title-1`, `title-2`, `title-3`];

  it(`correct render`, () => {
    const tree = renderer.create(
        <ApartList titles={titles} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
