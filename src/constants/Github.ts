export const BASE_URL = 'https://api.github.com';
export const API_KEY = '7497df361ff41d409d4d94b299ba46055abc16d1';

interface EndpointsProps {
  user: string;
  users: string;
  repositories: string;
}

export const Endpoints: EndpointsProps = {
  user: 'users/{query}',
  users: 'search/users?q={query}',
  repositories: 'search/repositories?q={query}',
};
