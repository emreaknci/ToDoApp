import { View, Text, Button, TouchableOpacity, Alert } from 'react-native';
import style from './ToDoItem.style';
import { ToDo } from '../../types/ToDo';

interface ToDoItemProps {
    todo: ToDo;
    onPress: any;
    onLongPress: any;
}

const ToDoItem = ({ todo, onPress,onLongPress }: ToDoItemProps) => {

    return (
        <View style={style.container}>
            {todo.completed
                ? <TouchableOpacity style={style.completed_card} onLongPress={onLongPress} onPress={onPress}>
                    <Text style={style.title}>{todo.title}</Text>
                </TouchableOpacity>
                : <TouchableOpacity style={style.incompleted_card} onLongPress={onLongPress} onPress={onPress}>
                    <Text style={style.title}>{todo.title}</Text>
                </TouchableOpacity>}
        </View>
    );
};
export default ToDoItem;