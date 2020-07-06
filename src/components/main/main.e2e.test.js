import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`main component`, () => {
  it(`title click`, () => {
    const apartTitles = [`title-1`];
    const titleClick = jest.fn();
    const main = mount(
        <Main
          apartTitles={apartTitles}
          titleClick={titleClick}
        />
    );

    const titles = main.find(`h2.place-card__name`).children(`a`);
    titles.at(0).simulate(`click`);
    expect(titleClick).toHaveBeenCalledTimes(1);
  });
});
