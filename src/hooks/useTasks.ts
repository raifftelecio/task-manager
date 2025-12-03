import { useContext } from "react"
import { TasksContext } from "../contexts/TaskContext"

export const useTasks = () => {
  return useContext(TasksContext)
}