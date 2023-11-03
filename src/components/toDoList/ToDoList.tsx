import { View, Text, FlatList, Alert } from 'react-native';
import style from './ToDoList.style';
import ToDoItem from '../toDoItem/ToDoItem';
import { useEffect, useState } from 'react';
import storageService from '../../services/storage.service';
import { ToDo } from '../../types/ToDo';


interface ToDoListProps {
  newToDo: ToDo;
}

const ToDoList = ({ newToDo }: ToDoListProps) => {
  const [toDoList, setToDoList] = useState<ToDo[]>([]);
  const [incompletedToDoCount, setIncompletedToDoCount] = useState<number>(0);
  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await storageService.getTodos()
      setIncompletedToDoCount(todos.filter(todo => !todo.completed).length);
      setToDoList(todos);
    };
    fetchTodos();
  }, []);
  useEffect(() => {
    if (newToDo) {
      addNewToDo(newToDo);
    }

  }, [newToDo]);

  const handlePress = (todoItem: ToDo) => {
    const newToDoList = [...toDoList];
    const todoIndex = toDoList.findIndex(todo => todo.id === todoItem.id);
    newToDoList[todoIndex].completed = !newToDoList[todoIndex].completed;
    updateTodos(newToDoList);
  }

  const handleDelete = (todoItem: ToDo) => {
    const updatedToDoList = toDoList.filter(todo => todo.id !== todoItem.id);
    updateTodos(updatedToDoList);
  }

  const addNewToDo = (newToDo: ToDo) => {
    if (newToDo) {
      if (newToDo.title.length <= 0) return;
      newToDo.id = toDoList.length > 0 ? toDoList[toDoList.length - 1].id + 1 : 1;
      const updatedToDoList = [...toDoList, newToDo];
      updateTodos(updatedToDoList);
    }
  }
  function updateTodos(list: ToDo[]) {
    setToDoList(list);
    storageService.updateTodos(list);
    setIncompletedToDoCount(list.filter(todo => !todo.completed).length);
  }
  function clearAll() {
    Alert.alert(
      "Tümünü sil",
      "Tümünü silmek istediğinize emin misiniz?",
      [
        {
          text: "İptal",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Sil", onPress: () => updateTodos([]) }
      ]
    );
  }
  return (
    <>
      <View style={style.container_top}>
        <Text style={style.title}>Yapılacaklar</Text>
        <Text style={style.toDoCount}>{incompletedToDoCount}</Text>
      </View>
      {toDoList.length > 0 && <View style={style.container_center}>
        <Text style={style.subTitle} onPress={clearAll}>Tümünü Sil</Text>
      </View>}
      <FlatList
        data={toDoList}
        renderItem={({ item }) => <ToDoItem todo={item} onLongPress={() => handleDelete(item)} onPress={() => handlePress(item)} />}
        style={style.container_end}
      />
    </>
  );
};

export default ToDoList;