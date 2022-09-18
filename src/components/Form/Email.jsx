import React, { useContext, useEffect, useState } from 'react';
import ErrorMessage from '../ErrorMessage';
import { LangContext } from '../../App';

const Email = ({ setEmail, errorEmail }) => {
  const translate = useContext(LangContext);
  const [inputValue, setInputValue] = useState('');
  const isError = errorEmail === 1 || errorEmail === 2;

  useEffect(() => {
    setEmail(inputValue);
  }, [inputValue]);

  return (
    <>
      <div className="row row-offset-80">
        <div className="col-1 d-none-mobile">
          <span className="txt-22">4.</span>
        </div>
        <div className="col-5">
          <span className="txt-22 uppercase">Email</span>
        </div>
        <div className="col-1 d-none-desktop">
          <span className="txt-22">4.</span>
        </div>
      </div>
      <div className="row row-offset-40 row-offset-mobile-80">
        <div className="col-2 col-offset-1 col-mobile-5 col-offset-mobile-0">
          <input
            type="text"
            style={{
              borderBottomColor: isError ? '#ff4141' : '#000',
            }}
            className="input-control"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value.trim())}
          />
          {errorEmail === 1 ? (
            <ErrorMessage text={translate['Required field']} />
          ) : null}
          {errorEmail === 2 ? (
            <ErrorMessage text={translate['Invalid email format']} />
          ) : null}
        </div>
        <div className="col-1 col-offset-1 col-offset-mobile-0 d-none-mobile">
          {inputValue?.length > 0 && (
            <span className="txt-22">{translate['OK']}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Email;
