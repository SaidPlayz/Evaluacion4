class CustomView {
    // Método para generar HTML para agregar una tarea
    addTaskForm() {
        return `
            <form action="/add-task" method="POST" class="task-form">
                <input type="text" name="task" placeholder="Introduce una tarea" required>
                <button type="submit" class="task-button">Añadir tarea</button>
            </form>
        `;
    }

    // Método para generar HTML para eliminar una tarea
    deleteTaskForm() {
        return `
            <form action="/delete-task" method="POST" class="task-form">
                <input type="number" name="taskId" placeholder="Introduce el ID de la tarea" required>
                <button type="submit" class="task-button">Eliminar tarea</button>
            </form>
        `;
    }

    // Método para generar HTML para obtener todas las tareas
    getTasks(tasks) {
        let tasksHtml = '<ul class="task-list">';
        tasks.forEach((task, index) => {
            tasksHtml += `<li class="task-item">${index}: ${task}</li>`;
        });
        tasksHtml += '</ul>';
        return tasksHtml;
    }

    // Método para generar CSS
    generateCSS() {
        return `
            <style>
                body {
                    background-color: #f0f0f0;
                    font-family: Arial, sans-serif;
                    padding: 20px;
                }
                .task-form {
                    margin-bottom: 20px;
                }
                .task-button {
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    padding: 5px 10px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;
                    cursor: pointer;
                }
                .task-list {
                    list-style-type: none;
                    padding: 0;
                }
                .task-item {
                    margin-bottom: 10px;
                }
            </style>
        `;
    }
}

module.exports = CustomView;

