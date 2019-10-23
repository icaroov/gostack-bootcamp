// Atribuindo o express numa variável
const express = require("express");

// Servidor
const app = express();

// Dizendo ao express para utilizar requisições em json
app.use(express.json());

/* MIDDLEWARES */

// Checa através do id se o projeto existe
function checkIdExists(req, res, next) {
  const { id } = req.params;
  const schema = projects.find(p => p.id == id);

  if (!schema) {
    return res.status(400).json({ error: "Id do not exists" });
  }

  return next();
}

// Faz uma contagem de requests feitas durante a aplicação
function logRequests(req, res, next) {
  console.count("Número de requisições");

  return next();
}

app.use(logRequests);

/* PROJECTS */

const projects = [];

// CREATE - projects
app.post("/projects", (req, res) => {
  const { id, title } = req.body;
  const schema = {
    id,
    title,
    tasks: []
  };

  projects.push(schema);

  return res.json(schema);
});

// CREATE - tasks
app.post("/projects/:id/tasks", checkIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const schema = projects.find(p => p.id == id);

  schema.tasks.push(title);

  return res.json(schema);
});

// READ - list
app.get("/projects", (req, res) => {
  return res.json(projects);
});

// UPDATE - edit
app.put("/projects/:id", checkIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const schema = projects.find(p => p.id == id);

  schema.title = title;

  return res.json(schema);
});

// DELETE
app.delete("/projects/:id", checkIdExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

app.listen(3000);
