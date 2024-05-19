import React, { useState } from 'react'
// import ClassCoponents from './components/ClassCoponents'
// 
import ToDoItem from './bt11+12/ToDoItem';
import EditModal from './bt11+12/EditModal';
export default function App() {
  const [active,setActive]=useState<boolean>(true)
  const removeComponent=()=>{
    console.log("đã gọi vào hàm remove");
    setActive(!active)
    
  }
  return (
    <div>
     
     {/*  
     App
     lifecycle - vòng đời của classcoponent 
     functionComponent không có vòng đời
     Vd:1 con người sẽ có vòng đời: Sinh ra  - Lớn lên - Trưởng thành - Lập gia đình - DIE 
     classComponet nó có vòng đời riêng của nó
     4 giai đoạn
     giai đoạn 1 : khởi tạo (initall)
    giai đoạn 2 :mounting (gắn vào UI)
            +thì chạy các phương thức sau 
        1.componentWillMount()
            =>thực thi 1 lần

        2.render()
            không nên setState ở trong phương thức Render này vì sao?

        3.componentDidmount()
            => thực thi 1 lần
    giai đoạn 3 :Updating (cập nhật)
           ==>có thể nhiều lần
          -khi nào xảy ra Update ?
           =>khi dữ liệu Props nhận về thay đổi hoặc dữ liệu State thay đổi thì giải đoạn Updating có thể xảy ra
          1,ShouldcomponentUpdate
          2.componetWillUpdate()
          3.render()
    giai đoạn 4 : Unmouting (gỡ bỏ khỏi uI)
    =>thực thi 1 lần

    cung cấp phương thức ComponentWillUnmount :thường dùng để xử lí các vấn đề clearTimeout để tránh rò rỉ bộ nhớ 


     */
    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      setTodos(storedTodos);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
  
    const addTodo = (todo) => {
      if (todo.name.trim() === '') {
        alert('Tên công việc không được để trống');
        return;
      }
      if (todos.some(t => t.name === todo.name)) {
        alert('Tên công việc không được phép trùng');
        return;
      }
      setTodos([...todos, todo]);
    };
  
    const deleteTodo = () => {
      setTodos(todos.filter(todo => todo !== todoToDelete));
      setIsModalOpen(false);
    };
  
    const editTodo = (updatedTodo) => {
      if (updatedTodo.name.trim() === '') {
        alert('Tên công việc không được để trống');
        return;
      }
      if (todos.some(t => t.name === updatedTodo.name && t !== todoToEdit)) {
        alert('Tên công việc không được phép trùng');
        return;
      }
      setTodos(todos.map(todo => (todo === todoToEdit ? updatedTodo : todo)));
      setIsEditModalOpen(false);
    };
  
    const toggleTodoStatus = (todo) => {
      setTodos(todos.map(t => (t === todo ? { ...t, completed: !t.completed } : t)));
    };
  
    const completedCount = todos.filter(todo => todo.completed).length;
  
    return (
      <div>
        <h1>Todo List</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          setTodoToDelete={setTodoToDelete} 
          setIsModalOpen={setIsModalOpen}
          setTodoToEdit={setTodoToEdit}
          setIsEditModalOpen={setIsEditModalOpen}
          toggleTodoStatus={toggleTodoStatus}
        />
        {isModalOpen && (
          <Modal 
            onClose={() => setIsModalOpen(false)} 
            onConfirm={deleteTodo} 
          />
        )}
        {isEditModalOpen && (
          <EditModal 
            onClose={() => setIsEditModalOpen(false)} 
            onConfirm={editTodo} 
            todo={todoToEdit}
          />
        )}
        <p>Công việc đã hoàn thành: {completedCount}/{todos.length}</p>
        {completedCount === todos.length && todos.length > 0 && (
          <p>Hoàn thành công việc</p>
        )}
      </div>
    );
  };
  

