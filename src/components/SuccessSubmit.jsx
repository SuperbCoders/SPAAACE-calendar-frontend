import React, { useContext } from 'react';
import { LangContext } from '../App';

const SuccessSubmit = ({ userInfo }) => {
  const translate = useContext(LangContext);

  const isEng = translate['NO'] === 'NO';

  const textSuccess = isEng
    ? translate['SubmitForm'].replace('${1}', userInfo.date)
    : translate['SubmitForm']
        .replace('${1}', userInfo.date)
        .replace('${2}', userInfo.email);

  return (
    <form className="main" id="main">
      <div className="container">
        <div className="row">
          <div className="col-3 col-mobile-6">
            <h1 className="txt-44">{textSuccess}</h1>
          </div>
        </div>
        <div className="row row-offset-160 row-offset-mobile-80">
          <div className="col-3 col-mobile-6">
            <a
              href="http://instagram.com/spaaacestudio/"
              target="_blank"
              className="txt-22 uppercase link-hover"
            >
              {translate['SubmitInstagram']}
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SuccessSubmit;
