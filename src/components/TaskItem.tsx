import { FiCheck, FiTrash2 } from "react-icons/fi";
import { Task } from "../App";

import styles from "./TaskItem.module.css";

interface TaskItemProps {
  task: Task;
  onConcludeTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

export function TaskItem({
  task,
  onConcludeTask,
  onDeleteTask,
}: TaskItemProps) {
  return (
    <div className={styles.taskItem}>
      <button
        type="button"
        className={task.completed ? styles.doButton : styles.undoButton}
        onClick={() => onConcludeTask(task.id)}
      >
        <FiCheck size={8} />
      </button>
      <span
        className={
          task.completed
            ? `${styles.taskTitle} ${styles.completedTaskTitle}`
            : styles.taskTitle
        }
      >
        {task.title}
      </span>
      <button
        className={styles.deleteButton}
        onClick={() => onDeleteTask(task.id)}
      >
        <FiTrash2 />
      </button>
    </div>
  );
}
