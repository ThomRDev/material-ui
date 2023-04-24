import axios from "axios";

const GithubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
});

export default GithubApi;
