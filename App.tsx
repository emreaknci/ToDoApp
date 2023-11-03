import { View, Text } from 'react-native';
import ToDoList from './src/components/toDoList/ToDoList';
import style from './App.style';
import ToDoAdd from './src/components/toDoAdd/ToDoAdd';
import { useState } from 'react';
import { ToDo } from './src/types/ToDo';
const App = () => {
  const [newToDo, setNewToDo] = useState<ToDo>(null as any);

  const addNewToDo = (newToDo: ToDo) => {
    if (newToDo.title.length <= 0) console;
    setNewToDo(newToDo);
  };

  return (
    <View style={style.container}>
      <ToDoList newToDo={newToDo} />
      <ToDoAdd onAddToDo={addNewToDo} />
    </View>
  );
};

export default App;

