import React, { useContext } from 'react';
import { LangContext } from '../../App';

const MonthPaginator = ({ activeDate, setActiveDate, loadData }) => {
  const translate = useContext(LangContext);

  const setNewDate = (number) => {
    const newDate = new Date(activeDate.setMonth(activeDate.getMonth() + number));

    loadData(newDate);
    setActiveDate(newDate);
  };

  return (
    <div>
      <span onClick={() => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        const activeDateYear = activeDate.getFullYear();
        const activeDateMonth = activeDate.getMonth() + 1;

        if ((activeDateYear > currentYear) || (activeDateMonth > currentMonth)) {
          setNewDate(-1);
        }
      }}
            className='txt-22' style={{
        height: '27px',
        cursor: 'pointer',
        userSelect: 'none'
      }}>{translate.months[new Date(activeDate).getMonth() - 1]}</span>
      <span onClick={() => setNewDate(0)}
            className='txt-22' style={{
        height: '27px',
        textDecoration: 'underline', cursor: 'pointer', userSelect: 'none'
      }}
      >{translate.months[new Date(activeDate).getMonth()]}</span>
      <span onClick={() => {
        setNewDate(1);
      }}
            className='txt-22' style={{
        height: '27px',
        cursor: 'pointer',
        userSelect: 'none'
      }}>{translate.months[new Date(activeDate).getMonth() + 1]}</span>
    </div>
  );
};

export default MonthPaginator;