import React, { useContext, useEffect, useState } from 'react';
import ProductList from './ProductList';
import Budget from './Budget';
import Email from './Email';
import Name from './Name';
import { requestToBooking } from '../../api/api';
import CalendarSection from './CalendarSection';
import { LangContext } from '../../App';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ setInfoUser, setSuccessSubmit }) => {
  const translate = useContext(LangContext);
  const [errorName, setErrorName] = useState(false);
  const [errorDay, setErrorDay] = useState(false);
  const [errorEmail, setErrorEmail] = useState(0);
  const [infoBooking, setInfoBooking] = useState({
    date: '',
    name: '',
    email: '',
    start: '',
    finish: '',
    note: '',
    products: [],
    price: false,
  });

  const setName = (text) => {
    setInfoBooking((prevState) => ({ ...prevState, name: text }));
  };

  const setProduct = (productId) => {
    let products = infoBooking.products;

    if (products.includes(productId)) {
      products = products.filter((item) => item !== productId);
    } else {
      products = [...products, productId];
    }

    setInfoBooking((prevState) => ({ ...prevState, products }));
  };

  const setEmail = (email) => {
    setInfoBooking((prevState) => ({ ...prevState, email }));
  };

  const setDate = ({ date, start, finish }) => {
    setInfoBooking((prevState) => ({ ...prevState, date, start, finish }));
  };

  const setPrice = (bool) => {
    setInfoBooking((prevState) => ({
      ...prevState,
      price: bool,
    }));
  };

  const submit = () => {
    if (!infoBooking.name) {
      return setErrorName(true);
    } else {
      setErrorName(false);
    }

    if (!infoBooking.date) {
       return setErrorDay(true);
    } else {
      setErrorDay(false);
    }

    if (!infoBooking.email) {
      return setErrorEmail(1);
    } else {
      setErrorEmail(0);
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(infoBooking.email)) {
      return setErrorEmail(2);
    } else {
      setErrorEmail(0);
    }

    if (errorName || errorEmail === 1 || errorEmail === 2 || errorDay) {
      return;
    }

    setErrorEmail(0);
    setErrorName(false);
    setErrorDay(false);

    requestToBooking(infoBooking)
      .then((data) => {
        console.log(data.error);
        if (data?.error) throw new Error(data.error);
        setInfoUser({
          date: infoBooking.date,
          email: infoBooking.email,
        });
        setSuccessSubmit(true);
      })
      .catch((e) =>
        toast.error(e?.message ?? 'Error', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      )
    ;
  };

  useEffect(() => {
    setErrorName(false);
  }, [infoBooking.name]);

  useEffect(() => {
    setErrorEmail(0);
  }, [infoBooking.email]);

  useEffect(() => {
    setErrorDay(false);
  }, [infoBooking.date]);

  return (
    <div className='main' id='main'>
      <ToastContainer />
      <div className='container'>
        <div className='row'>
          <div className='col-3 col-mobile-4'>
            <h1 className='txt-88 txt-44-mobile'>
              {translate['Planning a call']}
            </h1>
          </div>
        </div>
        <ProductList setProduct={setProduct} />
        <Budget setPrice={setPrice} />
        <Name setName={setName} errorName={errorName} />
        <Email setEmail={setEmail} errorEmail={errorEmail} />
        <CalendarSection setDate={setDate} errorDay={errorDay} />
        <div className='row row-offset-80'>
          <div className='col-1 d-none-mobile'>
            <span className='txt-22'>6.</span>
          </div>
          <div className='col-5'>
            <button className='btn txt-44 uppercase' onClick={submit}>
              {translate['SUBMIT']}
            </button>
          </div>
          <div className='col-1 d-none-desktop'>
            <span className='txt-22'>6.</span>
          </div>
        </div>
        <div className='row row-offset-160' />
      </div>
    </div>
  );
};

export default Form;
