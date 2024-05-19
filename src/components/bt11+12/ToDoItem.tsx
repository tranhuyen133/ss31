import React from 'react'

export default function ToDoItem() {
    const TodoItem = ({ todo, setTodoToDelete, setIsModalOpen, setTodoToEdit, setIsEditModalOpen, toggleTodoStatus }) => {
        const handleDelete = () => {
          setTodoToDelete(todo);
          setIsModalOpen(true);
        };
      
        const handleEdit = () => {
          setTodoToEdit(todo);
          setIsEditModalOpen(true);
        };
  return (
    <div>
       <li>
      <input 
        type="checkbox" 
        checked={todo.completed || false} 
        onChange={() => toggleTodoStatus(todo)} 
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.name}
      </span>
      <button onClick={handleEdit}>Sửa</button>
      <button onClick={handleDelete}>Xóa</button>
    </li>
    </div>
  )
}
}
