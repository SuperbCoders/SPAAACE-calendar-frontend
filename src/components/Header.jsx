import React, { useContext, useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';
import { en, ru } from '../helpers/dictionary';
import { LangContext } from '../App';

const Header = ({ isSuccessSubmit = false, setLang }) => {
  const translate = useContext(LangContext);
  const [showMenu, setShowMenu] = useState(false);

  const changeLang = (lang) => {
    window.history.pushState('', '', `?lang=${lang}`);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add('scroll-disabled');
    } else {
      document.body.classList.remove('scroll-disabled');
    }
  }, [showMenu]);

  return (
    <>
      <header className="header @@current" id="header">
        <a
          href="http://spaaace.io/ru/"
          className="fixed-logotype"
          id="fixed-logotype"
        >
          SPAAACE
        </a>
        <div className="header__wrapper">
          <div className="header__group">
            <ul className="header__list header__list--mobile">
              <li className="header__item header__item--active">
                <span
                  style={{
                    cursor: 'pointer',
                  }}
                  className="header__elem"
                  onClick={() => setShowMenu(true)}
                >
                  {translate['MENU']}
                </span>
              </li>
              <li className="header__item">
                <span
                  onClick={() => {
                    changeLang('ru');
                    setLang(ru);
                  }}
                  className="header__elem"
                >
                  Ru
                </span>
              </li>
              <li className="header__item header__item--active">
                <span
                  onClick={() => {
                    changeLang('en');
                    setLang(en);
                  }}
                  className="header__elem"
                >
                  En
                </span>
              </li>
            </ul>
            <ul className="header__list header__list--desktop">
              <li className="header__item @@works">
                <a href="http://spaaace.io/works/ru/" className="header__elem">
                  {translate['Works']}
                </a>
              </li>
              <li className="header__item @@studio">
                <a href="http://spaaace.io/about/ru/" className="header__elem">
                  {translate['Studio']}
                </a>
              </li>
              <li className="header__item @@matching header__item--active">
                <a
                  href="http://spaaace.io/matching/ru/"
                  className="header__elem"
                >
                  {translate['NO'] === 'NO'
                    ? translate['Do we match?']
                    : translate['MATCHING']}
                </a>
              </li>
              <li className="header__item @@contacts">
                <a
                  href="http://spaaace.io/contact/ru/"
                  className="header__elem"
                >
                  {translate['Contact us']}
                </a>
              </li>
              <li className="header__item">
                <span className="header__elem">2005⏤2022</span>
              </li>
              <li className="header__item">
                <span className="header__elem">{translate['Moscow']}</span>
              </li>
              <li
                className={`header__item ${
                  translate['NO'] === 'НЕТ' ? 'header__item--active' : ''
                }`}
              >
                <span
                  onClick={() => {
                    changeLang('ru');
                    setLang(ru);
                  }}
                  style={{ cursor: 'pointer' }}
                  className="header__elem"
                >
                  Ru
                </span>
              </li>
              <li
                className={`header__item ${
                  translate['NO'] === 'NO' ? 'header__item--active' : ''
                }`}
              >
                <span
                  onClick={() => {
                    changeLang('en');
                    setLang(en);
                  }}
                  style={{ cursor: 'pointer' }}
                  className="header__elem"
                >
                  En
                </span>
              </li>
              <li className="header__item">
                <a
                  href="http://instagram.com/spaaacestudio/"
                  target="_blank"
                  className="header__elem"
                >
                  {translate['Instagram']}
                </a>
              </li>
              <li className="header__item">
                <a
                  href="http://twitter.com/spaaacestudio/"
                  target="_blank"
                  className="header__elem"
                >
                  {translate['Twitter']}
                </a>
              </li>
              <li className="header__item" style={{ display: 'none' }}>
                <a href="#" className="header__elem">
                  Opensea
                </a>
              </li>
            </ul>
          </div>
          <span className="header__page">
            /{isSuccessSubmit ? translate['SUCCESS'] : translate['MATCHING']}/
          </span>
        </div>
      </header>
      <MobileMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        setLang={setLang}
        changeLang={changeLang}
      />
    </>
  );
};

export default Header;
