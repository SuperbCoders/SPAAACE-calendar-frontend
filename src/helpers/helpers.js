export const addZeroIfNeed = (number) => (number < 10 ? `0${number}` : number);

const today = new Date();

export const getNumberOfDaysInMonth = () => {
  return new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
};

export const firstDayOfMonth = `${today.getFullYear()}.${addZeroIfNeed(
  today.getMonth() + 1
)}.1`;

export const lastDayOfMonth = `${today.getFullYear()}.${addZeroIfNeed(
  today.getMonth() + 1
)}.${getNumberOfDaysInMonth()}`;
