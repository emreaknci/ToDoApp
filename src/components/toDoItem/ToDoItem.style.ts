import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
    },
    incompleted_card: {
        flex: 1,
        padding: 16,
        backgroundColor: "#7DA453",
        borderRadius: 10,
    },
    completed_card: {
        flex: 1,
        padding: 16,
        backgroundColor: "#37474F",
        borderRadius: 10,
    },
    title:{
        color: "white",
        fontSize: 14,
    },
});