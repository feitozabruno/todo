import { ChangeEvent, FormEvent, useState } from "react";
import {
  PlusCircle,
  Circle,
  CheckCircle,
  Trash,
  ClipboardText,
} from "@phosphor-icons/react";

import logoImg from "./assets/logo.svg";

import { Container, Form, Header, NoTasks, Summary, TasksList } from "./styles";
import { GlobalStyle } from "./global";

interface TaskProps {
  id: number;
  description: string;
  completed: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const handleCreateNewTask = (description: string) => {
    setTasks([...tasks, { id: Date.now(), description, completed: false }]);
  };

  const handleCompleteTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const [formValid, setFormValid] = useState(false);
  const [formValue, setFormValue] = useState("");

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValue(event.target.value);
    setFormValid(event.target.value.trim().length > 0);
  };

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    handleCreateNewTask(formValue.trim());
    setFormValue("");
    setFormValid(false);
  };

  const countTasksCompleted = tasks.filter((task) => task.completed);

  return (
    <>
      <Header>
        <img src={logoImg} alt="logo" />
      </Header>

      <Container>
        <Form onSubmit={handleSubmitForm}>
          <input
            type="text"
            name="task"
            value={formValue}
            onChange={handleFormChange}
            placeholder="Adicione uma nova tarefa"
          />
          <button type="submit" disabled={!formValid}>
            Criar
            <PlusCircle size={16} color="var(--gray-100)" />
          </button>
        </Form>

        <Summary>
          <strong>
            Tarefas criadas <span>{tasks.length}</span>
          </strong>

          <strong>
            Tarefas concluídas{" "}
            <span>
              {countTasksCompleted.length}/{tasks.length}
            </span>
          </strong>
        </Summary>

        {!tasks.length ? (
          <NoTasks>
            <ClipboardText size={56} color="var(--gray-400)" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </NoTasks>
        ) : (
          <TasksList>
            {tasks.map((task) =>
              task.completed === true ? (
                <li className="task-complete" key={task.id}>
                  <button>
                    <CheckCircle size={24} weight="duotone" />
                  </button>
                  <span>{task.description}</span>
                  <button onClick={() => handleDeleteTask(task.id)}>
                    <Trash size={29} />
                  </button>
                </li>
              ) : (
                <li key={task.id}>
                  <button onClick={() => handleCompleteTask(task.id)}>
                    <Circle size={24} weight="duotone" />
                  </button>
                  <span>
                    <span>{task.description}</span>
                  </span>
                  <button onClick={() => handleDeleteTask(task.id)}>
                    <Trash size={29} />
                  </button>
                </li>
              )
            )}
          </TasksList>
        )}
        <GlobalStyle />
      </Container>
    </>
  );
}
