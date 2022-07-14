import React from "react";
import styles from "./TasksList.module.css";

import clipBoard from "../assets/clipboard.svg";
import { TaskItem } from "./TaskItem";
import { Task } from "../App";

interface TasksListProps {
  tasks: Task[];
  onConcludeTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

export function TasksList({
  tasks,
  onConcludeTask,
  onDeleteTask,
}: TasksListProps) {
  const tasksCount = tasks.length;
  const completedTasksCount = tasks.reduce((acc, task) => {
    if (task.completed) {
      return acc + 1;
    }

    return acc;
  }, 0);

  return (
    <div className={styles.tasksList}>
      <header>
        <div className={styles.tasksIndicator}>
          <strong>Tarefas criadas</strong>
          <div>{tasksCount}</div>
        </div>
        <div className={styles.tasksIndicator}>
          <strong>Concluídas</strong>
          <div>
            {tasksCount > 0 ? `${completedTasksCount} de ${tasksCount}` : "0"}
          </div>
        </div>
      </header>
      {tasksCount === 0 ? (
        <div className={styles.empty}>
          <img src={clipBoard} />
          <div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      ) : (
        <div className={styles.list}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onConcludeTask={onConcludeTask}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}
