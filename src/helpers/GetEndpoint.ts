import { Endpoints, API_KEY, BASE_URL } from '@/constants/Github';
import { hasKey } from '@/helpers/HasKey';

/**
 * Gets token param to append to endpoint
 * @param  {string} endpoint
 * @return {string} token param
 */
const getTokenParam = (endpoint: string) => {
  const divider = endpoint.includes('?') ? '&' : '?';
  return `${divider}token=${API_KEY}`;
};

/**
 * Constructs and returns an endpoint based on a value type
 * @param  {string} type
 * @param  {object} replacements
 * @return {string} endpoint
 */
export const GetEndpoint = (type: string, replacements: object = {}): string => {
  const endpointBase = hasKey(Endpoints, type) ? Endpoints[type] : null;
  if (!endpointBase) {
    throw new Error('NO_ENDPOINT_FOUND');
  }

  let endpoint = endpointBase;
  const replacementsList = Object.entries(replacements);
  if (replacementsList.length) {
    replacementsList.forEach(([key, value]) => {
      endpoint = endpoint.replace(`{${key}}`, value);
    });
  }

  return `${BASE_URL}/${endpoint}${getTokenParam(endpoint)}`;
};
