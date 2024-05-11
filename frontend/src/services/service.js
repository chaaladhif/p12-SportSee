import axios from "axios";
import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
} from "./mockData";
let isDataMocked = true;
const API_URL = "http://localhost:3000";
export async function getUser(userId) {
    if (isDataMocked) {
        let data = fetchDataMocked(USER_MAIN_DATA, userId);
        return data;
    } else {
        let res = await fetchData(`/user/${userId}`).data;
        return res.data;
    }
}
export async function getUserActivity(userId) {
    /*  if (isDataMocked) {
        let data = fetchDataMocked(USER_ACTIVITY, userId);
        return data;
    } else */
    {
        let res = await fetchData(`/user/${userId}/activity`);
        console.log(res);
        return res;
    }
}
export async function getUserAverageSessions(userId) {
    if (isDataMocked) {
        let data = fetchDataMocked(USER_AVERAGE_SESSIONS, userId);
        return data;
    } else return fetchData(`/user/${userId}/average-sessions`).sessions;
}
export async function getUserPerformance(userId) {
    if (isDataMocked) {
        let data = fetchDataMocked(USER_PERFORMANCE, userId);
        return data;
    } else return fetchData(`/user/${userId}/performance`).kind;
}
{
    /*async function fetchData(endpoint) {
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
}*/
}
async function fetchData(endpoint) {
    try {
        const res = await axios.get(`http://localhost:3000${endpoint}`);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export function fetchDataMocked(key, userId) {
    return key.find((element) => element.userId == userId);
}
