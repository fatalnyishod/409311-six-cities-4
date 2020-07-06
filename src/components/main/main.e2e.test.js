import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const apartTitles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

describe(`main component`, () => {
  it(`title click`, () => {
    const apartCount = 3;
    const handleTitleClick = jest.fn();
    const main = mount(
        <Main
          apartCount={apartCount}
          apartTitles={apartTitles}
          handleTitleClick={handleTitleClick}
        />
    );

    const titles = main.find(`.place-card__name-link`);
    expect(titles).toHaveLength(apartTitles.length);
    titles.at(0).simulate(`click`);
    expect(handleTitleClick).toHaveBeenCalledTimes(1);
  });
});
