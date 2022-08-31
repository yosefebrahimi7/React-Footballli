import dayjs from 'dayjs';
import jalaliday from 'jalaliday';

import { englishNumeralToPersian } from './formatting';

dayjs.extend(jalaliday);

type FormatDateOption = {
  gregorian: boolean;
  englishNumeral: boolean;
};

export const formatDate = (
  date?: number | Date | string,
  format = `dddd HH:mm - YYYY/MM/DD`,
  options?: Partial<FormatDateOption>,
) => {
  const innerFormat = options?.gregorian
    ? dayjs(date).format(format)
    : dayjs(date).calendar(`jalali`).locale(`fa`).format(format);

  return options?.englishNumeral
    ? innerFormat
    : englishNumeralToPersian(innerFormat);
};

export const getYear = () => dayjs().calendar(`jalali`).get(`year`);

export const isValidDate = (date: string, format = `YYYY-MM-DD`) =>
  dayjs(date, { jalali: true } as any)
    .calendar(`jalali`)
    .format(format) === date;

export const calculateTehranTZ = (offset = 4.5) => {
  // create Date object for current location
  const d = new Date();

  // convert to msec
  // subtract local time zone offset
  // get UTC time in msec
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;

  // create new Date object for different city
  // using supplied offset
  const nd = new Date(utc + 3600000 * offset);

  // return time as a string
  return nd;
};

export const isMorning = (provided?: number) => {
  let date = calculateTehranTZ();
  if (provided) {
    date = new Date(provided);
  }
  const time = date.getHours();

  if (time >= 1 && time <= 7) {
    return true;
  }
  return false;
};
