export const makeEnum = map => {
  let enums = {};

  for (let key in map) {

    if (
      !map.hasOwnProperty(key) ||
      typeof map[key] !== 'string'
    ) {
      console.warn('[INTL-DATEPICKER] Bad enum value passed, only strings are allowed.');
      continue;
    }

    enums[key] = Symbol(map[key]);
  }

  return Object.freeze(enums);
}
