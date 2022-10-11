export const addZeroIfNeed = (number) => (number < 10 ? `0${number}` : number);

export const getNumberOfDaysInMonth = (today = new Date()) => {
  return new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
};

export const firstDayOfMonth = (today = new Date()) => `${today.getFullYear()}.${addZeroIfNeed(
  today.getMonth() + 1
)}.1`;

export const lastDayOfMonth = (today = new Date()) => `${today.getFullYear()}.${addZeroIfNeed(
  today.getMonth() + 1
)}.${getNumberOfDaysInMonth(today)}`;


