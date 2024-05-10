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
    } /*console.log(fetchData(`/user/${userId}`));*/ else
        return fetchData(`/user/${userId}`);
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
async function fetchData(endpoint) {
    try {
        const promise = await fetch(`http://localhost:3000${endpoint}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const dataJson = await promise.json();
        //console.log(dataJson);
        return dataJson.data;
    } catch (error) {
        throw new Error(`Failed to fetch data from ${endpoint}`);
    }
}

export function fetchDataMocked(key, userId) {
    return key.find((element) => element.userId == userId);
}
{
    /*async function fetchData(endpoint) {
    try {
        const response = await axios.get(`http://localhost:3000${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    }*/
}
