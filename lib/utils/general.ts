// @ts-ignore
const compose = (f, ...rest) =>
  // @ts-ignore
  rest.length === 0 ? f : (x) => f(compose(...rest)(x));

const removeMatchedPattern =
  (rePattern: RegExp) =>
  (str: string): string =>
    str.replace(rePattern, "");

const stringToNum = (str: string): number | null => {
  if (!str || typeof str !== "string") {
    return null;
  }

  const parsedInt = parseInt(str);

  return isNaN(parsedInt) ? null : parsedInt;
};

const isStringEmpty = (str: string): boolean => {
  return typeof str !== "string" || !str;
};

const safeJSONParse = (str: string): string | null => {
  try {
    const result = JSON.parse(str);
    return result;
  } catch (e) {
    return null;
  }
};

export default {
  compose,
  removeMatchedPattern,
  stringToNum,
  isStringEmpty,
  safeJSONParse,
};
