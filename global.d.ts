namespace NodeJS {
  interface ProcessEnv {
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRETS: string;
    NAVER_CLIENT_ID: string;
    NAVER_CLIENT_SECRETS: string;
  }
}

interface GitHub_User {
  login: String;
  id: number;
  node_id: String;
  avatar_url: String;
  gravatar_id: String;
  url: String;
  html_url: String;
  followers_url: String;
  following_url: String;
  gists_url: String;
  starred_url: String;
  subscriptions_url: String;
  organizations_url: String;
  repos_url: String;
  events_url: String;
  received_events_url: String;
  type: String;
  site_admin: boolean;
  name: String | null;
  company: String | null;
  blog: String;
  location: String | null;
  email: String | null;
  hireable: String | null;
  bio: String | null;
  twitter_username: String | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

interface NAVER_USER {
  email: String;
  nickname: String;
  profile_image: String;
  age: String;
  gender: String;
  id: String;
  name: String;
  birthday: String;
}
