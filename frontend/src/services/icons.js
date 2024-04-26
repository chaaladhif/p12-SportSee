import calorie from "../../assets/calorie.svg";
import glucide from "../../assets/glucide.svg";
import protein from "../../assets/protein.svg";
import lipide from "../../assets/lipide.svg";
const icons = [
    {
        logo: calorie,
        unit: "KCal",
        title: "Calories",
        backgroundColor: "#Fbeaea",
        keyData: userData ? userData.keyData.calorieCount / 1000 : 0,
    },
    {
        logo: protein,
        unit: "g",
        title: "Proteins",
        backgroundColor: "#4AB8FF1A",
        keyData: userData ? userData.keyData.proteinCount : 0,
    },
    {
        logo: glucide,
        unit: "g",
        title: "Glucides",
        backgroundColor: "#fbf6e5",
        keyData: userData ? userData.keyData.carbohydrateCount : 0,
    },
    {
        logo: lipide,
        unit: "g",
        title: "Lipides",
        backgroundColor: "#FD51811A",
        keyData: userData ? userData.keyData.lipidCount : 0,
    },
];
