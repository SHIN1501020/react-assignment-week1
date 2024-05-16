import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });
  const [todoList, setTodoList] = useState([]);

  const onchangeTitleHandler = (event) => {
    setTodo({ ...todo, title: event.target.value });
  };

  const onchangeBodyHandler = (event) => {
    setTodo({ ...todo, body: event.target.value });
  };

  const onSubmitHandler = () => {
    setTodoList([...todoList, todo]);
    setTodo({ id: todo.id + 1, title: "", body: "", isDone: false });
  };

  const onDeleteHandler = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const onCompleteHandler = (id) => {
    setTodoList(todoList.map((todo) => {
      if (todo.id === id) {
        todo.isDone = true;
      }
      return todo;
    })
    );
  };

  const onCancelHandler = (id) => {
    setTodoList(todoList.map((todo) => {
      if (todo.id === id) {
        todo.isDone = false;
      }
      return todo;
    })
    );
  };


  return (
    <div className="todo">
      <h3 className="todo-title">My Todo List</h3>
      <div>
        제목
        <input type="text" value={todo.title} onChange={onchangeTitleHandler} />
        내용
        <input type="text" value={todo.body} onChange={onchangeBodyHandler} />
        <button onClick={onSubmitHandler}>추가하기</button>
      </div>

      <h1>Working</h1>
      <div className="todo-list">
        {todoList
          .filter((todo) => todo.isDone === false)
          .map((todo) => (
            <div key={todo.id} className="todo-item">
              <h3>{todo.title}</h3>
              <p>{todo.body}</p>
              <div className="todo-button">
               <button className="red" onClick={() => onDeleteHandler(todo.id)}>삭제</button>
               <button className="green" onClick={() => onCompleteHandler(todo.id)}>완료</button> 
              </div>
            
            </div>
          ))}
      </div>


      <h1>Done!</h1>

      <div className="todo-list">
        {todoList
          .filter((todo) => todo.isDone === true)
          .map((todo) => (
            <div key={todo.id} className="todo-item">
              <h3>{todo.title}</h3>
              <p>{todo.body}</p>
              <div className="todo-button">
               <button className="red" onClick={() => onDeleteHandler(todo.id)}>삭제</button>
               <button className="green" onClick={() => onCancelHandler(todo.id)}>취소</button> 
              </div>
              
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
