import React, { FormEvent, ChangeEvent, useState } from "react";
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

interface TasksProps {
  id: number;
  description: string;
  completed: boolean;
}

export function App() {
  // Define o estado inicial da lista de tarefas
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  // Função para adicionar uma nova tarefa à lista
  const handleCreateNewTask = (description: string) => {
    setTasks([...tasks, { id: Date.now(), description, completed: false }]);
  };

  // Função para marcar uma tarefa como completa
  const handleCompleteTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  // Função para excluir uma tarefa
  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Função e Estado para validar o formulário
  const [formValidate, setFormValidate] = useState(false);
  const [taskValue, setTaskValue] = useState("");

  const handleTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskValue(event.target.value);
    setFormValidate(event.target.value.trim().length > 0);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleCreateNewTask(taskValue.trim());
    setTaskValue("");
    setFormValidate(false);
  };

  // Função para contar o número de tarefas concluídas
  const taskComplete = tasks.filter((task) => task.completed);

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
          value={taskValue}
          onChange={handleTaskChange}
        />
        <button type="submit" disabled={!formValidate}>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      {tasks.length !== 0 ? (
        <ul>
          <div>
            <h3>
              Tarefas criadas
              <span>{tasks.length}</span>
            </h3>
            <h3>
              Tarefas concluídas
              <span>
                {taskComplete.length}/{tasks.length}
              </span>
            </h3>
          </div>

          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <button onClick={() => handleCompleteTask(task.id)}>
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
