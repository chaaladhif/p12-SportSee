import axios from "axios";
import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
} from "./mockData";
const API_URL = "http://localhost:3000";
let isDataMocked = true;
export async function getUser(userId) {
    if (isDataMocked) {
        let data = fetchDataMocked(USER_MAIN_DATA, userId);
        //console.log(USER_MAIN_DATA);
        return data;
    } else return fetchData(`/user/${userId}`);
}

export async function getUserActivity(userId) {
    //console.log(userId);
    if (isDataMocked) {
        let data = fetchDataMocked(USER_ACTIVITY, userId);
        // console.log(data);
        return data.sessions;
    } else return fetchData(`/user/${userId}/activity`);
}

export async function getUserAverageSessions(userId) {
    if (isDataMocked) {
        let data = fetchDataMocked(USER_AVERAGE_SESSIONS, userId);
        //console.log(USER_AVERAGE_SESSIONS);
        return data;
    } else return fetchData(`/user/${userId}/average-sessions`);
}

export async function getUserPerformance(userId) {
    if (isDataMocked) {
        let data = fetchDataMocked(USER_PERFORMANCE, userId);
        // console.log(data);
        return data;
    } else return fetchData(`/user/${userId}/performance`);
}

async function fetchData(endpoint) {
    try {
        const response = await axios.get(`${API_URL}${endpoint}`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch data from ${endpoint}`);
    }
}
function fetchDataMocked(key, userId) {
    //console.log(key, userId);
    return key.find((element) => element.userId === userId);
}
