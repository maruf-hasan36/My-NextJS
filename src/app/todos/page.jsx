import React from "react";

const todosPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {" "}
          <h1 className=" border border-red-200 m-5 p-6 rounded-3xl bg-amber-950 text-center">
            {todo.title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default todosPage;
