import React, { useState } from 'react';
import styles from './Task.module.css';
import { Trash, Circle, CheckCircle } from 'phosphor-react';
import clipboardSVG from '../assets/clipboard.svg'

interface Task {
    id: number;
    content: string;
    completed: boolean;
}

export function Tasks() {
    // Sets the initial state of the task list
    const [tasks, setTasks] = useState([
        { id: 1, content: "Estudar React", completed: false }
    ]);

    // Function to add a new task to the list
    const addNewTask = (content: string) => {
        setTasks([...tasks, { id: Date.now(), content, completed: false }]);
    }

    // Function to count the number of tasks created
    const createdTaskCounter = () => {
        return tasks.filter(task => task).length;
    }

    // Function to count the number of completed tasks
    const completeTaskCounter = () => {
        return tasks.filter(task => task.completed).length;
    }

    // Function to mark a task as completed
    const taskCompleted = (id: number) => {
        setTasks(
            tasks.map(task => {
                if (task.id === id) {
                    return { ...task, completed: true };
                }
            return task;
            })
        )
    }

    // Function to delete task
    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const [formValido, setFormValido] = useState(false);

    // Constants for phosphor icons
    const iconCircle = <Circle size={24} />;
    const iconCheckCircle = <CheckCircle size={24} style={{color: "var(--purple)"}}/>;

    return (
        <div>
            <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    addNewTask((e.target as HTMLFormElement).task.value);
                    setFormValido(false);
                    (e.target as HTMLFormElement).task.value = "";
            }}>

            <textarea
                placeholder="Adicione uma nova tarefa"
                name="task"
                required
                onChange={(e) => {
                    const textarea = e.target as HTMLTextAreaElement;
                    if(textarea.value.trim().length === 0){
                        textarea.setCustomValidity("Informe uma task");
                        setFormValido(false);
                    }else{
                        textarea.setCustomValidity("");
                        setFormValido(true);
                    }
                }}
            />
            <button className={styles.formCreateNewTask} type="submit" disabled={!formValido}>Adicionar</button>
            </form>

            <div className={styles.info}>
                <strong>Tasks criadas <span>{createdTaskCounter()}</span></strong>
                <strong>Concluídas <span>{completeTaskCounter()}</span></strong>
            </div>

            <ul>
                {tasks.map(task => (
                    <li className={styles.task} key={task.id}>

                        <button onClick={() => taskCompleted(task.id)}>
                            {task.completed ? iconCheckCircle : iconCircle}
                        </button>

                        <p className={task.completed ? styles.tasked : styles.noTasked}>
                            {task.content}
                        </p>

                        
                        <button onClick={() => deleteTask(task.id)}><Trash size={24} /></button>
                    </li>
                ))}
            </ul>

            <div className={tasks.length === 0 ? styles.empty : styles.noEmpty}>
                <img src={clipboardSVG} alt="" />
                <p>
                    <strong>Você ainda não tem tasks cadastradas</strong>
                    <br />
                    Crie tasks e organize seus itens a fazer
                </p>
            </div>
        </div>
    );
}
                    