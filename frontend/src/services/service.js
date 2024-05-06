import axios from "axios";
import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
} from "./mockData";
let isDataMocked = true;
const API_URL = "http://localhost:3000/user/";
export async function getUser(userId) {
    if (isDataMocked) {
        let data = fetchDataMocked(USER_MAIN_DATA, userId);
        //console.log(data);
        return data;
    } else return fetchData(`${userId}`);
}
export async function getUserActivity(userId) {
    if (isDataMocked) {
        let data = fetchDataMocked(USER_ACTIVITY, userId);
        return data.sessions;
    } else return fetchData(`${userId}/activity`);
}
export async function getUserAverageSessions(userId) {
    if (isDataMocked) {
        let data = fetchDataMocked(USER_AVERAGE_SESSIONS, userId);
        return data.sessions; // Retourne uniquement les données de session
    } else return fetchData(`${userId}/average-sessions`);
}
export async function getUserPerformance(userId) {
    if (isDataMocked) {
        let data = fetchDataMocked(USER_PERFORMANCE, userId);
        return data.data; // retourne les données de performance
    } else return fetchData(`${userId}/performance`);
}
async function fetchData(endpoint) {
    try {
        const response = await fetch(`${API_URL}${endpoint}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${endpoint}`);
        }
        const data = await response.json(); // Convertir la réponse en JSON
        return data; // Retourner les données
    } catch (error) {
        throw new Error(
            `Failed to fetch data from ${endpoint}: ${error.message}`
        );
    }
}
export function fetchDataMocked(key, userId) {
    return key.find((element) => element.userId == userId);
}
{
    /*export async function getUserAverageSessions(userId) {
    if (isDataMocked) {
        let data = fetchDataMocked(USER_AVERAGE_SESSIONS, userId);
        //console.log(USER_AVERAGE_SESSIONS);
        return data;
    } else return fetchData(`/user/${userId}/average-sessions`);
}*/
}
{
    /*export async function getUserPerformance(userId) {
    if (isDataMocked) {
        let data = fetchDataMocked(USER_PERFORMANCE, userId);
        // console.log(data);
        return data;
    } else return fetchData(`/user/${userId}/performance`);
}*/
}
