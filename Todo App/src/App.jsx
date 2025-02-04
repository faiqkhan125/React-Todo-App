import { useState , useRef } from "react"

const App = () => {
  const [todo , setTodo] = useState([]);
  const todoVal = useRef()

  const addTodo = (event)=>{
    event.preventDefault();
    todo.push(todoVal.current.value)
    setTodo([...todo]);
    console.log(todo);

    todoVal.current.value = ""

  }

  const deleteTodo = (index)=>{
    console.log("todo deleted" , index);
    todo.splice(index , 1);
    setTodo([...todo]);

  }
  const editTodo = (index)=>{
    console.log("todo edited" , index);
    const editedVal = prompt("enter value");
    todo.splice(index , 1 , editedVal);
    setTodo([...todo]);

  }
  return (
    <>
    <h1 className="text-center">Todo App</h1>
    <form onSubmit={addTodo}>
      <input type="text" placeholder="enter todo" ref={todoVal} />
      <button type="submit">click</button>
    </form>
    <ul>
      {/* key ma index dena is not a good practice */}
      {todo.map((item , index)=>{
        return <div key={index}>
          <li >{item}</li>
          <button onClick={()=> deleteTodo(index)}>delete</button>
          <button onClick={()=> editTodo(index) }>edit</button>
          {/* <button type="button" className="btn btn-primary">Primary</button> */}
        </div>
      })}
    </ul>

    </>
  )
}

export default App