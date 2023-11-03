import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get('window');

export default StyleSheet.create({
    container_top: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        maxHeight: height * 0.07,

    },
    container_center: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        maxHeight: height * 0.065,
        backgroundColor: "#37474F",
        borderRadius: 10,
        alignItems: "center",

    },
    container_end: {
        flex: 1,
        flexDirection: "column",
    },
    title: {
        color: "orange",
        fontSize: 30,
        fontWeight: "bold",
    },
    toDoCount: {
        color: "orange",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "right",
    },
    subTitle: {
        flex: 1,
        color: "orange",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    
});