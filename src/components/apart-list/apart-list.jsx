import React from "react";
import PropTypes from "prop-types";
import ApartCard from "../apart-card/apart-card.jsx";

const ApartList = (props) => {
  const {titles} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        titles.map((item, index) => (
          <ApartCard
            key={item + index}
            title={item}
          />
        ))
      }
    </div>
  );
};

ApartList.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ApartList;
