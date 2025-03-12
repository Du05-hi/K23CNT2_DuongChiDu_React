import { useEffect, useReducer } from "react";
 import { todoReducer } from "../reducers/DcdTodoReducer";

 import DcdAddToDo from './components/DcdAddToDo';


 import DcdTodoItem from './components/DcdTodoItem';

 
 function DcdTodoList() {
   const [todos, dispatch] = useReducer(todoReducer, [], () => {
     const storedTodos = localStorage.getItem("todos");
     return storedTodos ? JSON.parse(storedTodos) : [];
   });
 
   useEffect(() => {
     localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos]);
 
   return (
     <div>
       <h2>Danh Sách Công Việc</h2>
       <DcdAddTodo dispatch={dispatch} />
       <ul>
         {todos.map(todo => (
           <DcdTodoItem key={todo.id} todo={todo} dispatch={dispatch} />
         ))}
       </ul>
     </div>
   );
 }
 
 export default DcdTodoList;