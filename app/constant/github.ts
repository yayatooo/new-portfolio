import axios from "axios";

export const GITHUB_API_BASE_URL = 'https://api.github.com/graphql';
export const GITHUB_ACCOUNTS = {
  username: 'yayatooo',
  token:  process.env.GITHUB_TOKEN,
  endpoint: '/api/github?type=personal',
  type: 'personal',
  is_active: true,
};
export const GITHUB_USER_QUERY = `query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          colors
          totalContributions
          months {
            firstDay
            name
            totalWeeks
          }
          weeks {
            contributionDays {
              color
              contributionCount
              date
            }
            firstDay
          }
        }
      }
    }
  }`;


  export async function getGithubData() {
    const response = await axios.post(
      GITHUB_API_BASE_URL,
      {
        query: GITHUB_USER_QUERY,
        variables: {
          username: GITHUB_ACCOUNTS.username
        }
      },
      {
        headers: {
          Authorization: `bearer ${GITHUB_ACCOUNTS.token}`
        }
      }
    );
    return response.data?.data.user.contributionsCollection.contributionCalendar;
  }