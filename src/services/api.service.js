import API_URL from "../common/config";
export const baseUrl = "http://localhost:1337";
// export const baseUrl = "./api.json";

export const makeRequest = {
  async post(url, body) {
    // debugger;
    const request = await fetch(`${API_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const response = await request.json();
    return response;
  },
  async get(url) {
    const request = await fetch(`${API_URL}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await request.json();
    return response;
  },
};
