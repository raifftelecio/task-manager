import type { Task } from "../entities/Task"

export const tasksService = {
  async fetchTasks(): Promise<Task[]> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`)
    const data: Task[] = await response.json()
    return data
  },

  async save(body: Omit<Task, "id">): Promise<Task> {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/tasks`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    )
    const data: Task = await response.json()
    return data
  },

  async delete(id: number) {
    await fetch(
      `${import.meta.env.VITE_API_URL}/tasks/${id}`,
      {
        method: "DELETE",
      }
    )
  }

}

