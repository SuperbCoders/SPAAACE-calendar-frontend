import React, { useContext, useEffect, useState } from 'react';
import { addZeroIfNeed, firstDayOfMonth, lastDayOfMonth } from '../../helpers/helpers';
import { getInformationAboutBooking } from '../../api/api';
import ErrorMessage from '../ErrorMessage';
import Calendar from 'react-calendar';
import '../../styles/calendar.css';
import { LangContext } from '../../App';
import { toast, ToastContainer } from 'react-toastify';
import MonthPaginator from './MonthPaginator';
import Loader from '../Loader';

const CalendarSection = ({ setDate, errorDay }) => {
  const translate = useContext(LangContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [freeDaysList, setFreeDaysList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  let freeDay = null;

  const isFreeDay = (date) => {
    return freeDaysList.some((item) => {
      if (item.date === formatDateCustom(date)) freeDay = item;
      return item.date === formatDateCustom(date);
    });
  };

  const formatDateCustom = (date) => {
    return `${date.getFullYear()}.${addZeroIfNeed(date.getMonth() + 1)}.${addZeroIfNeed(date.getDate())}`;
  };

  const handleClick = (today) => {
    if (!isFreeDay(today)) {
      setDate({
        date: '',
        start: '',
        finish: '',
      });
    } else {
      setDate({
        date: `${today.getFullYear()}.${
          today.getMonth() + 1
        }.${today.getDate()}`,
        start: freeDay.start,
        finish: freeDay.finish,
      });
      setSelectedDate(today);
    }
  };

  function tileClassName({ date, view }) {
    if (view === 'month') {
      let isLight = false;
      if (date.getDay() === 0 || date.getDay() === 6) {
        isLight = true;
      }
      if (freeDaysList.some((item) => item.date === formatDateCustom(date))) {
        return `${isLight ? 'light ' : ''} normal`;
      }
      return `${isLight ? ' light ' : ''} throw`;
    }
  }

  const loadData = (date) => {
    getInformationAboutBooking(firstDayOfMonth(date), lastDayOfMonth(date))
      .then((data) => {
        data.forEach((item) => {
          if (!item?.booking?.length > 0) {
            setFreeDaysList((prevState) => [...prevState, item]);
          }
        });
      })
      .catch((e) => {
        toast.error(e?.message ?? 'Error', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setFreeDaysList([]);
    setLoading(true);
    loadData();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className='row row-offset-80'>
        <div className='col-1 d-none-mobile'>
          <span className='txt-22'>5.</span>
        </div>
        <div className='col-5'>
          <span className='txt-22 uppercase'>{translate['PICK A DATE']}</span>
          {errorDay ? (
            <ErrorMessage text={translate['Need to choose a day']} />
          ) : null}
        </div>
        <div className='col-1 d-none-desktop'>
          <span className='txt-22'>5.</span>
        </div>
      </div>
      <div className='row row-offset-40 row-offset-mobile-80' style={{ minHeight: '320px' }}>
        {isLoading ? <Loader /> : <>
          <div className={'col-2 col-offset-1 col-mobile-6 col-offset-mobile-0'}>
            <Calendar
              locale={translate['NO'] === 'NO' ? 'en-EN' : 'ru-RU'}
              onChange={setSelectedDate}
              value={selectedDate}
              navigationLabel={() => ''}
              showNavigation={false}
              showNeighboringMonth={false}
              onClickDay={(value) => handleClick(value)}
              tileClassName={tileClassName}
              formatShortWeekday={(locale, date) => {
                const week = locale === 'ru-RU' ? ['П', 'В', 'С', 'Ч', 'П', 'С', 'В',] : ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
                return week[date.getDay()];
              }}
            />
          </div>
          <div className='col-2 col-offset-mobile-0 d-none-mobile'>
            <div className='row' style={{
              justifyContent: 'space-between'
            }}>
              <MonthPaginator activeDate={selectedDate} setActiveDate={setSelectedDate} loadData={loadData} />
              <span
                className='txt-22'>{translate.months[new Date(selectedDate).getMonth()]} {new Date(selectedDate).getDate()}</span>
            </div>
          </div>
        </>}
      </div>
    </>
  );
};

export default CalendarSection;
