import React, { useEffect, useState } from "react";
import "@styles/index.scss";
interface ITodo {
  id: number;
  text: string;
  createAt: Date;
  completed: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      text: "string001",
      createAt: new Date(),
      completed: true,
    },
  ]);

  useEffect(() => {
    setTodos((state) =>
      state.concat([
        {
          id: 2,
          text: "string002",
          createAt: new Date(),
          completed: true,
        },
        {
          id: 3,
          text: "string003",
          createAt: new Date(),
          completed: false,
        },
      ]),
    );
  }, []);

  return (
    <>
      {todos?.map(({ text, id }) => (
        <div className={"test"} key={id}>
          {text}
        </div>
      ))}
    </>
  );
};

export default Todos;
