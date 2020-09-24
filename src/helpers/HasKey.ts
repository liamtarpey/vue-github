/**
 * Implicitly cheks for prescence of a key in an object
 * @param  {object} obj
 * @param  {string} key
 * @return {string}
 */
export function hasKey<O>(obj: O, key: keyof O): key is keyof O {
  return key in obj;
}
