namespace NodeJS {
  interface ProcessEnv {
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRETS: string;
    NAVER_CLIENT_ID: string;
    NAVER_CLIENT_SECRETS: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRETS: string;
  }
}

interface GitHub_User {
  login: string;
  id: string;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

interface NAVER_USER {
  email: string;
  nickname: string;
  profile_image: string;
  age: string;
  gender: string;
  id: string;
  name: string;
  birthday: string;
}

interface GOOGLE_USER {
  id: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}
