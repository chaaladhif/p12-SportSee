import {
     USER_MAIN_DATA,
     USER_ACTIVITY,
     USER_AVERAGE_SESSIONS,
     USER_PERFORMANCE,
} from "./mockData";
// Variable pour déterminer si les données sont récupérées via l'API ou mockés
let isDataMocked = true;
const API_URL = "http://localhost:3000";
// Fonction pour obtenir les données de l'utilisateur
export async function getUser(userId) {
     if (isDataMocked) {
          let data = fetchDataMocked(USER_MAIN_DATA, userId);
          return data;
     } else return fetchData(`/user/${userId}`);
}
export async function getUserActivity(userId) {
     if (isDataMocked) {
          let data = fetchDataMocked(USER_ACTIVITY, userId);
          return data;
     } else return fetchData(`/user/${userId}/activity`);
}
export async function getUserAverageSessions(userId) {
     if (isDataMocked) {
          let data = fetchDataMocked(USER_AVERAGE_SESSIONS, userId);
          return data;
     } else return fetchData(`/user/${userId}/average-sessions`);
}
export async function getUserPerformance(userId) {
     if (isDataMocked) {
          let data = fetchDataMocked(USER_PERFORMANCE, userId);
          return data;
     } else return fetchData(`/user/${userId}/performance`);
}
// Fonction pour récupérer les données de l'API
async function fetchData(endpoint) {
     try {
          const promise = await fetch(`${API_URL}${endpoint}`, {
               method: "GET",
               headers: {
                    "Content-Type": "application/json",
               },
          });
          const dataJson = await promise.json();
          return dataJson.data;
     } catch (error) {
          throw new Error(`Failed to fetch data from ${endpoint}`);
     }
}
// Fonction pour récupérer les données mockés
export function fetchDataMocked(key, userId) {
     return key.find((element) => element.userId == userId);
}
