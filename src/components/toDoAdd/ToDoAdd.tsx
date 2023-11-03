import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import style from "./ToDoAdd.style";
import { useState } from "react";



type ToDoAddProps = {
    onAddToDo?: any;
};

const ToDoAdd = ({ onAddToDo }: ToDoAddProps) => {
    const [inputText, setInputText] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    const handleButtonClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
        }, 0);
        const newTodo = {
            id: inputText.length + 1,
            title: inputText,
            completed: false,
        };
        onAddToDo(newTodo);
        setInputText('');
    };

    const buttonStyle = isClicked ? style.buttonClicked : style.button;
    return (
        <View style={style.container}>
            <TextInput
                style={style.input}
                onChangeText={(text) => { setInputText(text) }}
                placeholderTextColor={"#808080"}
                placeholder="Yapılacak birşey yaz.." value={inputText} />
            <TouchableOpacity onPress={handleButtonClick}>
                <Text style={buttonStyle}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ToDoAdd;