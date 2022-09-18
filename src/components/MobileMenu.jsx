import React, { useContext } from 'react';
import { LangContext } from '../App';
import { en, ru } from '../helpers/dictionary';

const MobileMenu = ({ showMenu, setShowMenu, setLang, changeLang }) => {
  const translate = useContext(LangContext);

  return (
    <div
      className={`mobile-menu ${showMenu ? 'mobile-menu--active' : ''}`}
      id="mobile-menu"
    >
      <div className="mobile-menu__wrapper">
        <div className="mobile-menu__main">
          <ul className="mobile-menu__list">
            <li className="mobile-menu__item">
              <a
                href="http://spaaace.io/works/ru/"
                className="mobile-menu__link"
              >
                {translate['Works']}
              </a>
            </li>
            <li className="mobile-menu__item">
              <a
                href="http://spaaace.io/about/ru/"
                className="mobile-menu__link"
              >
                {translate['Studio']}
              </a>
            </li>
            <li className="mobile-menu__item">
              <a
                href="http://spaaace.io/matching/ru/"
                className="mobile-menu__link"
              >
                {translate['NO'] === 'NO'
                  ? translate['Do we match?']
                  : translate['MATCHING']}
              </a>
            </li>
            <li className="mobile-menu__item">
              <a
                href="http://spaaace.io/contact/ru/"
                className="mobile-menu__link"
              >
                {translate['Contact us']}
              </a>
            </li>
          </ul>
          <ul className="mobile-menu__list">
            <li className="mobile-menu__item">
              <span className="mobile-menu__text">2005⏤2022</span>
            </li>
            <li className="mobile-menu__item">
              <span className="mobile-menu__text"> {translate['Moscow']}</span>
            </li>
          </ul>
          <ul className="mobile-menu__list mobile-menu__list--flex">
            <li
              className="mobile-menu__item"
              onClick={() => {
                setLang(ru);
                changeLang('ru');
              }}
            >
              <span className="mobile-menu__link">Ru</span>
            </li>
            <li
              className="mobile-menu__item mobile-menu__item--active"
              onClick={() => {
                setLang(en);
                changeLang('en');
              }}
            >
              <span className="mobile-menu__link">En</span>
            </li>
          </ul>
          <ul className="mobile-menu__list">
            <li className="mobile-menu__item">
              <a
                href="http://instagram.com/spaaacestudio/"
                target="_blank"
                className="mobile-menu__link"
              >
                {translate['Instagram']}
              </a>
            </li>
            <li className="mobile-menu__item">
              <a
                href="http://twitter.com/spaaacestudio/"
                target="_blank"
                className="mobile-menu__link"
              >
                {translate['Twitter']}
              </a>
            </li>
            <li className="mobile-menu__item" style={{ display: 'none' }}>
              <a href="#" className="mobile-menu__link">
                Opensea
              </a>
            </li>
          </ul>
        </div>
        <div className="mobile-menu__bottom">
          <a href="http://spaaace.io/ru/" className="mobile-menu__logotype">
            SPAAACE
          </a>
          <button className="mobile-menu__close" aria-label="Закрыть">
            <svg
              className="mobile-menu__close-icon"
              onClick={() => setShowMenu(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 44 44"
                id="icon-close"
              >
                <path
                  d="M22 20.17L3.698 1.868l-1.83 1.83L20.17 22 1.868 40.302l1.83 1.83L22 23.83 40.3 42.132l1.83-1.83L23.832 22l18.3-18.302-1.83-1.83L22 20.17z"
                  fill="#000"
                />
              </svg>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
