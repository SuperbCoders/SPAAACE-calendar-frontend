import './styles/vendor.min.css';
import './styles/app.min.css';
import Header from './components/Header';
import BackgroundVideo from './components/BackgroundVideo';
import SuccessSubmit from './components/SuccessSubmit';
import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import { en, ru } from './helpers/dictionary';

export const LangContext = React.createContext(null);

function App() {
  const [isSuccessSubmit, setSuccessSubmit] = useState(false);
  const [lang, setLang] = useState(null);
  const [userInfo, setInfoUser] = useState({
    date: '',
    email: '',
  });

  useEffect(() => {
    let name = new URL(document.location).searchParams.get('lang');

    if (name === 'ru') {
      setLang(ru);
    } else if (name === 'en') {
      setLang(en);
    } else {
      setLang(en);
    }
  }, []);

  if (!lang) return null;

  return (
    <>
      <LangContext.Provider value={lang}>
        <Header setLang={setLang} isSuccessSubmit={isSuccessSubmit} />
        {isSuccessSubmit ? (
          <SuccessSubmit userInfo={userInfo} />
        ) : (
          <Form setInfoUser={setInfoUser} setSuccessSubmit={setSuccessSubmit} />
        )}
        <BackgroundVideo />
      </LangContext.Provider>
    </>
  );
}

export default App;
