import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-547d4.cloudfunctions.net/api",
  // baseURL: "http://localhost:5001/clone-547d4/us-central1/api", // Cloud function
});

export default instance;
