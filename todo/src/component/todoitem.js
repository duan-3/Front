import React from "react";
// import styled from "styled-components"

const TodoItem = (props) => {
   const deleteItem = () => {
      var tmp = props.todoList.filter((element)=> element.id !== props.itemId);
      console.log(tmp);
      props.setTodoList(tmp);
      // console.log(props.todoList);
   }
   return(
      <div className="item-box">
         <input type="checkbox" defaultChecked={false} />
         {props.item}
         <button className="Xbtn" onClick={deleteItem}>x</button>
      </div>
   );
};

export default TodoItem;

// const btnStyle = styled.button`
//    color: #fff;
//    border: none;
//    padding: 5px 9px;
//    border-radius: 50%;
//    cursor: pointer;
//    margin-right: 0px;
// `;
