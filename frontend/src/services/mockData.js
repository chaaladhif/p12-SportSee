const USER_MAIN_DATA = [
    {
        userId: 12,
        userInfos: {
            firstName: "Karl",
            lastName: "Dovineau",
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50,
        },
    },
    {
        userId: 18,
        userInfos: {
            firstName: "Cecilia",
            lastName: "Ratorez",
            age: 34,
        },
        score: 0.3,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120,
        },
    },
];

const USER_ACTIVITY = [
    {
        userId: 12,
        sessions: [
            {
                day: "2020-07-01",
                kilogram: 80,
                calories: 240,
            },
            {
                day: "2020-07-02",
                kilogram: 80,
                calories: 220,
            },
            {
                day: "2020-07-03",
                kilogram: 81,
                calories: 280,
            },
            {
                day: "2020-07-04",
                kilogram: 81,
                calories: 290,
            },
            {
                day: "2020-07-05",
                kilogram: 80,
                calories: 160,
            },
            {
                day: "2020-07-06",
                kilogram: 78,
                calories: 162,
            },
            {
                day: "2020-07-07",
                kilogram: 76,
                calories: 390,
            },
        ],
    },
    {
        userId: 18,
        sessions: [
            {
                day: "2020-07-01",
                kilogram: 70,
                calories: 240,
            },
            {
                day: "2020-07-02",
                kilogram: 69,
                calories: 220,
            },
            {
                day: "2020-07-03",
                kilogram: 70,
                calories: 280,
            },
            {
                day: "2020-07-04",
                kilogram: 70,
                calories: 500,
            },
            {
                day: "2020-07-05",
                kilogram: 69,
                calories: 160,
            },
            {
                day: "2020-07-06",
                kilogram: 69,
                calories: 162,
            },
            {
                day: "2020-07-07",
                kilogram: 69,
                calories: 390,
            },
        ],
    },
];

const USER_AVERAGE_SESSIONS = [
    {
        userId: 12,
        sessions: [
            { day: 1, sessionLength: 30 },
            { day: 2, sessionLength: 23 },
            { day: 3, sessionLength: 45 },
            { day: 4, sessionLength: 50 },
            { day: 5, sessionLength: 0 },
            { day: 6, sessionLength: 0 },
            { day: 7, sessionLength: 60 },
        ],
    },
    {
        userId: 18,
        sessions: [
            { day: 1, sessionLength: 30 },
            { day: 2, sessionLength: 40 },
            { day: 3, sessionLength: 50 },
            { day: 4, sessionLength: 30 },
            { day: 5, sessionLength: 30 },
            { day: 6, sessionLength: 50 },
            { day: 7, sessionLength: 50 },
        ],
    },
];

const USER_PERFORMANCE = [
    {
        userId: 12,
        data: [
            { kind: "cardio", value: 80 },
            { kind: "energy", value: 120 },
            { kind: "endurance", value: 140 },
            { kind: "strength", value: 50 },
            { kind: "speed", value: 200 },
            { kind: "intensity", value: 90 },
        ],
    },
    {
        userId: 18,
        data: [
            { kind: "cardio", value: 200 },
            { kind: "energy", value: 240 },
            { kind: "endurance", value: 80 },
            { kind: "strength", value: 80 },
            { kind: "speed", value: 220 },
            { kind: "intensity", value: 110 },
        ],
    },
];

module.exports = {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
};
