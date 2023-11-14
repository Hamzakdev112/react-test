import axios from "axios";

export async function fetchData() {
  try {
    const { data } = await axios.get("https://reqres.in/api/users?page=1");
    return data;
  } catch ({ message }) {
    return Promise.reject({ message });
  }
}
