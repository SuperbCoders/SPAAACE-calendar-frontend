import React, { useContext, useState } from 'react';
import { LangContext } from '../../App';

const Budget = ({ setPrice }) => {
  const translate = useContext(LangContext);
  const [isBudgetOK, setBudgetOK] = useState(false);

  const handleClick = () => {
    setBudgetOK((prevState) => !prevState);
    setPrice(!isBudgetOK);
  };

  return (
    <>
      <div className="row row-offset-80">
        <div className="col-1 d-none-mobile">
          <span className="txt-22">2.</span>
        </div>
        <div className="col-5">
          <span className="txt-22 uppercase">{translate['THE BUDGET IS']}</span>
        </div>
        <div className="col-1 d-none-desktop">
          <span className="txt-22">2.</span>
        </div>
      </div>
      <div className="row row-offset-40 row-offset-mobile-80">
        <div className="col-3 col-offset-1 col-mobile-5 col-offset-mobile-0">
          <span className="txt-44 uppercase">> 10.000 USD</span>
        </div>
        <div className="col-1">
          <label htmlFor="pp" className="true-checkbox">
            <input type="checkbox" id="pp" className="true-checkbox__input" />
            <span className="true-checkbox__value" onClick={handleClick}>
              {isBudgetOK ? translate['YES'] : translate['NO']}
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Budget;
