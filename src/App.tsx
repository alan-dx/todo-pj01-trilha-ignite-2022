import React from "react";
import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { TasksList } from "./components/TasksList";

export interface Task {
  completed: boolean;
  title: string;
  id: number;
}

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  function handleConcludeTask(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTasks(newTasks);
  }

  function handleCreateTask(newTask: Task) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(taskId: number) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <AddTask onAddTask={handleCreateTask} />
        <TasksList
          tasks={tasks}
          onConcludeTask={handleConcludeTask}
          onDeleteTask={handleDeleteTask}
        />
      </main>
    </div>
  );
}

export default App;
