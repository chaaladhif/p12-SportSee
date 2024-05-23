// Importation des données mockées depuis le fichier "mockData.js"
import {
     USER_MAIN_DATA,
     USER_ACTIVITY,
     USER_AVERAGE_SESSIONS,
     USER_PERFORMANCE,
} from "./mockData";
// Variable pour déterminer si les données sont récupérées via l'API ou mockés
let isDataMocked = true;
const API_URL = "http://localhost:3000";
// Fonction pour extraire le score correctement
function extractScore(user) {
     return user.score || user.todayScore || 0;
}
// Fonctions pour obtenir les données de l'utilisateur
export async function getUser(userId) {
     if (isDataMocked) {
          let data = fetchDataMocked(USER_MAIN_DATA, userId);
          data.score = extractScore(data); // Ajoutez la ligne pour inclure le score correctement
          return data;
     } else {
          let data = await fetchData(`/user/${userId}`);
          data.score = extractScore(data); // Ajoutez la ligne pour inclure le score correctement
          return data;
     }
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
// Fonction pour récupérer les données de l'API accepte endpoint en arg et utilise fetch pour recuperer requete get à l'api
async function fetchData(endpoint) {
     try {
          const promise = await fetch(`${API_URL}${endpoint}`, {
               method: "GET",
               headers: {
                    "Content-Type": "application/json",
               },
          });
          //si req reussit elle parse la reponse et retourne données
          const dataJson = await promise.json();
          return dataJson.data;
     } catch (error) {
          throw new Error(`Failed to fetch data from ${endpoint}`);
     }
}
// Fonction pour récupérer les données mockés, accepte un clé et userId
export function fetchDataMocked(key, userId) {
     //cherche dans le tableau l'elt qui a userId==userId et retourne cet elt
     return key.find((element) => element.userId == userId);
}
// == est utilisé au lieu de '===' pour faire une comparaison non stricte
