import dayjs from 'dayjs';

const humanizeDate = (date: string, format: string) => dayjs(date).format(format);

const convertRating = (value: number) => {
  const rating = Math.round(value);
  let result;

  switch (rating) {
    case 1:
      result = 20;
      break;
    case 2:
      result = 40;
      break;
    case 3:
      result = 60;
      break;
    case 4:
      result = 80;
      break;
    case 5:
      result = 100;
      break;
  }

  return result;
};

export { humanizeDate, convertRating };
