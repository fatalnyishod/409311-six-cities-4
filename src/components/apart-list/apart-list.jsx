import React from "react";
import PropTypes from "prop-types";
import ApartCard from "../apart-card/apart-card.jsx";

const ApartList = (props) => {
  const {titles, handleTitleClick} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        titles.map((item, index) => (
          <ApartCard
            key={item + index}
            title={item}
            handleOnTitleClick={handleTitleClick}
          />
        ))
      }
    </div>
  );
};

ApartList.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleTitleClick: PropTypes.func.isRequired
};

export default ApartList;
