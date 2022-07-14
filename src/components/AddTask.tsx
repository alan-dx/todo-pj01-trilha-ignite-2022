import React, { ChangeEvent, FormEvent } from "react";
import { Task } from "../App";
import { AddButton } from "./AddButton";

import styles from "./AddTask.module.css";
import { Input } from "./Input";

interface AddTaskProps {
  onAddTask: (task: Task) => void;
}

export function AddTask({ onAddTask }: AddTaskProps) {
  const [taskTitle, setTaskTitle] = React.useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask: Task = {
      id: Date.now(),
      completed: false,
      title: taskTitle,
    };

    onAddTask(newTask);
    setTaskTitle("");
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  return (
    <form className={styles.addTask} onSubmit={handleCreateNewTask}>
      <Input
        name="taskTitle"
        value={taskTitle}
        onChange={(event) => {
          event.target.setCustomValidity("");
          setTaskTitle(event.target.value);
        }}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <AddButton type="submit" />
    </form>
  );
}
