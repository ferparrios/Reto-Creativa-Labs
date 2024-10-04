import axios from "axios";

const shortLnkApi = axios.create({
  baseURL: "https://go-shortlinks.onrender.com/",
  // baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json", 
  },
});

export const newShortenLink = async (url: any) => {
  try {
    const response = await shortLnkApi.post("/shorten", url);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
