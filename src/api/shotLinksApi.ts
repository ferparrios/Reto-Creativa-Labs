import axios from "axios";

const shortLinksApi = axios.create({
  baseURL: "https://www.urlday.com/api/v1/links",
  headers: {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export const newShortenLink = async (url: string) => {
  try {
    const apiKey =
      "9Cl21FlWMEpXqE0rVBmuNSzTQp4MnjLZQC9F5My5XEeld9qxWE0GgAPPVvCa";
    const response = await shortLinksApi.post(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    console.log("Link shortened:", response.data);
  } catch (error) {
    console.error("Error shortening the link:", error);
  }
};
