import { useEffect, useReducer } from "react"
import { todoReducer } from '../08-useReducer/todoReducer'

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [] ;
} 

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [] , init);

    //Cada vez que se agg se actualiza y se agg al local storage

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || []);
    }, [todos])

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        //console.log(id)
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }

    const onToggleTodo = (id) => {
        //console.log({id})
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }

    return{
        todos,
        handleDeleteTodo,
        handleNewTodo,
        onToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length ,  
    }
}