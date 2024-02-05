class CustomModel {
    constructor() {
        this.tasks = [];
    }

    // Método para agregar una tarea
    addTask(task) {
        this.tasks.push(task);
        return this.tasks;
    }

    // Método para eliminar una tarea
    deleteTask(taskId) {
        this.tasks = this.tasks.filter((task, index) => index !== taskId);
        return this.tasks;
    }

    // Método para obtener todas las tareas
    getTasks() {
        return this.tasks;
    }
}

module.exports = CustomModel;

