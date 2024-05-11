import axios from "axios";
import {
     USER_MAIN_DATA,
     USER_ACTIVITY,
     USER_AVERAGE_SESSIONS,
     USER_PERFORMANCE,
} from "./mockData";
let isDataMocked = false;
const API_URL = "http://localhost:3000";

export async function getUser(userId) {
     if (isDataMocked) {
          let data = fetchDataMocked(USER_MAIN_DATA, userId);
          return data;
     } else {
          let res = await fetchData(`/user/${userId}`);
          return res;
     }
}
export async function getUserActivity(userId) {
     if (isDataMocked) {
          let data = fetchDataMocked(USER_ACTIVITY, userId);
          return data;
     } else {
          let res = await fetchData(`/user/${userId}/activity`);
          return res;
     }
}

export async function getUserAverageSessions(userId) {
     if (isDataMocked) {
          let data = fetchDataMocked(USER_AVERAGE_SESSIONS, userId);
          return data;
     } else {
          let res = await fetchData(`/user/${userId}/average-sessions`);
          return res;
     }
}
export async function getUserPerformance(userId) {
     if (isDataMocked) {
          let data = fetchDataMocked(USER_PERFORMANCE, userId);
          return data;
     } else {
          let res = await fetchData(`/user/${userId}/performance`);
          return res;
     }
}
async function fetchData(endpoint) {
     try {
          const res = await axios.get(`${API_URL}${endpoint}`);
          return res?.data?.data;
     } catch (error) {
          console.log(error);
     }
}
export function fetchDataMocked(key, userId) {
     return key.find((element) => element.userId == userId);
}
