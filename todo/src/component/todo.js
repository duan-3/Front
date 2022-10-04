import React, {useState} from 'react'
import TodoItem from './todoitem';


const Todo = () => {
   const [inputValue,setInputValue] = useState("")
   const [todoList, setTodoList] = useState([])
   const addItem = () => {
    setTodoList([...todoList,{
      id : Date.now()+Math.random(),
      title : inputValue,
      completed : false
   }])
   };
   return(
      <div className='todo-box'>
         <h1>Todo</h1>
         <input value={inputValue.data} type="text" onChange={(event)=> setInputValue(event.target.value)} placeholder="할 일을 입력해 주세요." />
         <button onClick={addItem}>+</button>
         {todoList.map((item)=><TodoItem key = {item.id} itemId = {item.id} item = {item.title} todoList = {todoList} setTodoList={setTodoList}/>)}
         {console.log(todoList)}
      </div>
   );
};

export default Todo;