import { EPOCH_FORMATS } from 'config';

export const decompose = date => ({
  year  : date.getFullYear(),
  month : date.getMonth(),
  date  : date.getDate()
});

export const toEpoch = (epoch, epochFormat) => {

  switch(epochFormat) {

    case EPOCH_FORMATS.epochDay:
      return epoch * 24 * 60 * 60 * 1e3;

    case EPOCH_FORMATS.epochMonth:
      let year  = Math.ceil(epoch / 12) + 1970;
      let month = (epoch % 12) - 1;

      return new Date(year, month, 1, 0).valueOf();

    case EPOCH_FORMATS.epochYear:
      return epoch + 1970;

    default:
      return epoch;

  }

}
