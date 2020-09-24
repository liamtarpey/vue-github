interface GoFetchParams {
  url: string;
}

/**
 * Uses the native 'fetch' API to fetch data
 * Parses the response as JSON before returning
 * NB: All errors will be caught in the component
 * @param  {object} params
 * @return {Promise}
 */
export const GoFetch = ({ url: baseUrl }: GoFetchParams): Promise<unknown> => {
  const url = baseUrl;

  if (!url) {
    return Promise.reject(new Error('MISSING_URL'));
  }

  return fetch(url)
    .then((response) => response.json());
};
