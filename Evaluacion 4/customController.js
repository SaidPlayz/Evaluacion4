const CustomModel = require('./customModel');

class CustomController {
    constructor() {
        this.model = new CustomModel();
    }

    // Método para agregar una tarea
    addTask(task) {
        const tasks = this.model.addTask(task);
        return tasks;
    }

    // Método para eliminar una tarea
    deleteTask(taskId) {
        const tasks = this.model.deleteTask(taskId);
        return tasks;
    }

    // Método para obtener todas las tareas
    getTasks() {
        const tasks = this.model.getTasks();
        return tasks;
    }
}

module.exports = CustomController;
