import React, { ChangeEvent, FormEvent, useState } from "react";
import "./global.css";
import Logo from "./assets/logo.svg";
import { StylesContainer } from "./styles";
import {
  PlusCircle,
  Circle,
  CheckCircle,
  ClipboardText,
  Trash,
} from "phosphor-react";

interface TaskProps {
  id: number;
  description: string;
  completed: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [taskValue, setTaskValue] = useState("");
  const [formValid, setFormValid] = useState(false);

  const handleCreateNewTask = (description: string) => {
    setTasks([
      ...tasks,
      { id: Date.now(), description: description, completed: false },
    ]);
  };

  const handleChangeForm = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskValue(event.target.value);
    setFormValid(event.target.value.length > 0);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleCreateNewTask(taskValue.trim());
    setTaskValue("");
    setFormValid(false);
  };

  const handleCompletedTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const countCompletedTask = tasks.filter((task) => task.completed);

  return (
    <StylesContainer>
      <header>
        <img src={Logo} alt="" />
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Adicione uma nova tarefa"
          onChange={handleChangeForm}
          value={taskValue}
        />
        <button type="submit" disabled={!formValid}>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      {tasks.length ? (
        <ul>
          <div>
            <h3>
              Tarefas criadas
              <span>{tasks.length}</span>
            </h3>
            <h3>
              Tarefas concluídas
              <span>
                {countCompletedTask.length}/{tasks.length}
              </span>
            </h3>
          </div>

          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <button onClick={() => handleCompletedTask(task.id)}>
                  {task.completed ? (
                    <CheckCircle size={20} color="var(--purple)" />
                  ) : (
                    <Circle size={20} />
                  )}
                </button>

                {task.completed ? (
                  <span className="completed">{task.description}</span>
                ) : (
                  <span>{task.description}</span>
                )}

                <button onClick={() => handleDeleteTask(task.id)}>
                  <Trash size={20} />
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="NoTasks">
          <ClipboardText size={60} />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </StylesContainer>
  );
}
