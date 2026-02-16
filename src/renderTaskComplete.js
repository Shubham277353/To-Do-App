import { getTasks } from "./logic";

export default function renderTaskCompletion() {
  const tasks = getTasks();
  for (const task of tasks) {
    if (task.isDone === true) {
    }
  }
}
