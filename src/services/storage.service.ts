import AsyncStorage from "@react-native-async-storage/async-storage";
import { Cache } from "react-native-cache";
import { ToDo } from "../types/ToDo";
const todoList: ToDo[] = [
    {
        id: 1,
        title: "Öğle yemeği hazırla",
        completed: false,
    },
    {
        id: 2,
        title: "Alışverişe git",
        completed: true,
    },
    {
        id: 3,
        title: "Spor yap",
        completed: false,
    },
    {
        id: 4,
        title: "Kitap oku",
        completed: true,
    },
    {
        id: 5,
        title: "Projeyi bitir",
        completed: false,
    },
    {
        id: 6,
        title: "Toplantıya katıl",
        completed: false,
    },
    {
        id: 7,
        title: "Raporu yaz",
        completed: true,
    },
    {
        id: 8,
        title: "Koşuya çık",
        completed: false,
    },
    {
        id: 9,
        title: "Yeni fikirler düşün",
        completed: false,
    },
    {
        id: 10,
        title: "Akşam yemeği planı yap",
        completed: false,
    },
    {
        id: 11,
        title: "Öğleden sonra kahve molası",
        completed: true,
    },
    {
        id: 12,
        title: "Ofis temizliği yap",
        completed: false,
    },
    {
        id: 13,
        title: "Alışveriş listesi oluştur",
        completed: false,
    },
    {
        id: 14,
        title: "Egzersiz yap",
        completed: false,
    },
    {
        id: 15,
        title: "Günün planını yap",
        completed: true,
    },
    {
        id: 16,
        title: "Kitap oku",
        completed: false,
    },
    {
        id: 17,
        title: "Müziği keşfet",
        completed: false,
    },
    {
        id: 18,
        title: "Yoga yap",
        completed: true,
    },
    {
        id: 19,
        title: "Araştırma yap",
        completed: false,
    },
    {
        id: 20,
        title: "Projeyi bitir",
        completed: false,
    },
];
const initialTodos = async (): Promise<ToDo[]> => {
    const jsonString = JSON.stringify(todoList);
    await cache.set("todos", jsonString);
    return todoList;
}
const cache = new Cache({
    namespace: "myapp",
    policy: {
        maxEntries: 50000, // if unspecified, it can have unlimited entries
        stdTTL: 0 // the standard ttl as number in seconds, default: 0 (unlimited)
    },
    backend: AsyncStorage
});

const addTodo = async (todo: ToDo) => {
    const todos = await getTodos();
    todos.push(todo);
    const jsonString = JSON.stringify(todos);
    await cache.set("todos", jsonString);
}

const getTodos = async (): Promise<ToDo[]> => {
    const todos = await cache.get("todos");
    return todos ? JSON.parse(todos) : [];
};

const clearTodos = async () => {
    await cache.remove("todos");
}

const clearTodoById = async (id: number) => {
    const todos = await getTodos();
    const filteredTodos = todos.filter((todo: ToDo) => todo.id !== id);
    await cache.set("todos", JSON.stringify(filteredTodos));
}
const updateTodos = async (todos: ToDo[]) => {
    const jsonString = JSON.stringify(todos);
    await cache.set("todos", jsonString);
}
export default {
    addTodo,
    getTodos,
    clearTodos,
    clearTodoById,
    initialTodos,
    updateTodos
};