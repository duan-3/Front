// import React, {useState} from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Todo from './component/todo.js'
// import RouteTest from './component/testroute';
import Calendar from './component/calendar.js';
// import TodoItem from './component/todoitem';

function App() {
  // const [inputValue,setInputValue] = useState('')
  // const [todoList, setTodoList] = useState([])
  // const addItem = () => {
  //   setTodoList([...todoList,inputValue])
  // };
  return (
    <BrowserRouter>
    <div className="App">
      <div className='Container'>
        <div className='title'><h1>To Do List</h1></div>
        <Calendar/>
          {/* <input value={inputValue} type="text" onChange={(event)=> setInputValue(event.target.value)} placeholder="할 일을 입력해 주세요." />
          <button onClick={addItem}>+</button>
          {todoList.map((item)=><TodoItem item = {item}/>)} */}
      <Routes>
        {/* <Route path= "/" element={< Calendar/>} /> */}
        <Route path= "/Todo" element={< Todo />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
