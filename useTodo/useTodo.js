import { useEffect, useReducer } from "react";
import { TodoReducer } from "./todoReducer";


//const initialState =[];

const init = () => {
 return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo =()=> {
  
const [todos, dispatch] = useReducer(TodoReducer,[], init);

useEffect(()=> {
    localStorage.setItem('todos',JSON.stringify(todos));
},[todos])

const handleNewTodo = (todo) => {
   const action = {
    type:'[TODO] Add Todo',
    payload: todo
   }

   dispatch(action);
}

const handleDeletTodo = (id) => {
    dispatch({
        type:'[TODO] Remove Todo',
        payload: id
    });
}

const handleToggleTodo = (id) => {
  
    dispatch({
        type:'[TODO] Toggle Todo',
        payload: id
    });
}

    const todosCount= todos.length;
    const pendingTodosCount = todos.filter(todo=> !todo.done).length;

return{
  todos,
  handleNewTodo,
  handleDeletTodo,
  handleToggleTodo,
  todosCount,
  pendingTodosCount,
}

}


