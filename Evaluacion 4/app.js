const http = require('http');
const url = require('url');
const CustomController = require('./customController');
const CustomView = require('./customView');

const controller = new CustomController();
const view = new CustomView();

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);

    // Página de inicio
    if (reqUrl.pathname == '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(view.generateCSS());
        res.write(view.addTaskForm());
        res.write(view.deleteTaskForm());
        res.write(view.getTasks(controller.getTasks()));
        res.end();
    }

    // Agregar tarea
    else if (reqUrl.pathname == '/add-task' && req.method === 'POST') {
        let body = '';
        req.on('data', function (chunk) {
            body += chunk;
        });
        req.on('end', function () {
            const task = body.split('=')[1];
            controller.addTask(task);
            res.writeHead(302, {'Location': '/'});
            res.end();
        });
    }

    // Eliminar tarea
    else if (reqUrl.pathname == '/delete-task' && req.method === 'POST') {
        let body = '';
        req.on('data', function (chunk) {
            body += chunk;
        });
        req.on('end', function () {
            const taskId = parseInt(body.split('=')[1]);
            controller.deleteTask(taskId);
            res.writeHead(302, {'Location': '/'});
            res.end();
        });
    }

    // Página no encontrada
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404 No Encontrado</h1>');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('El servidor está corriendo en http://localhost:3000');
});

/* Ejecute el codigo con node app.js y siga el localhost:3000, a continuacion, se le abrira el tema libre
y muy basico pero siguiendo los patrones que usted pidio, para la tarea ingrese un nombre y presione añadir
tarea luego ingrese el ID con que se registro esa tarea y automaticamente se borrara*/