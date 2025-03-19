/*const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

// 1) MIDDLEWARE DE LOGS
app.use((req, res, next) => {
  const currentDate = new Date().toISOString();
  const logMessage = `${currentDate} - ${req.method} ${req.originalUrl}\n`;

  // Este console.log DEBE verse en la consola donde inicias el servidor
  console.log("=== MIDDLEWARE ACTIVADO ===");
  console.log(logMessage);

  // Guardar el log en un archivo vitacoras.txt
  const logFile = path.join(__dirname, "vitacoras.txt");
  fs.appendFile(logFile, logMessage, (err) => {
    if (err) {
      console.error("Error escribiendo en vitacoras.txt:", err);
    }
  });

  next();
});

// 2) Habilitar JSON en Express
app.use(express.json());

// 3) Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Hola desde Express!");
});

// 4) Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
*/
/*


const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

// Ruta del archivo de logs
const logFile = path.join(__dirname, "bitacoras.txt");
/*
// Middleware para registrar cada petición
app.use((req, res, next) => {
  const currentDate = new Date().toISOString();
  //agergar caracter pipe
  const logMessage = `${currentDate} - ${req.method} ${req.originalUrl}\n`;

  console.log("Middleware de logs iniciado")
  // Mostrar el log en consola
  console.log(logMessage);

  // Guardar el log en el archivo "vitacoras.txt"
  fs.appendFile(logFile, logMessage, (err) => {
    if (err) {
      console.error("Error escribiendo en el archivo de logs:", err);
    }
  });

  next();
});//*
// Middleware para registrar cada petición con delimitadores pipe
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  // Usamos pipe para separar: Timestamp|Método|URL|IP:|DirecciónIP
  const logMessage = `${timestamp}|${req.method}|${req.originalUrl}|IP:|${req.ip}\n`;

  // Mostrar el log en la consola
  console.log(logMessage);

  // Guardar el log en el archivo (se crea automáticamente si no existe)
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error("Error escribiendo en bitacoras.txt:", err);
    }
  });

  next();
});



// Resto de tus rutas y configuración
app.use(express.json());

let usuarios = [
  { id: 1, nombre: "Juan", edad: 25 },
  { id: 2, nombre: "Maria", edad: 30 },
  { id: 3, nombre: "Carlos", edad: 28 },
  { id: 4, nombre: "fer", edad: 40 },

];

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  usuario
    ? res.json(usuario)
    : res.status(404).json({ mensaje: "Usuario no encontrado" });
});

app.post("/usuarios", (req, res) => {
  const nuevoUsuario = { id: usuarios.length + 1, ...req.body };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

app.put("/usuarios/:id", (req, res) => {
  let usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  if (usuario) {
    Object.assign(usuario, req.body);
    res.json(usuario);
  } else {
    res.status(404).json({ mensaje: "Usuario no encontrado" });
  }
});

app.delete("/usuarios/:id", (req, res) => {
  usuarios = usuarios.filter(u => u.id !== parseInt(req.params.id));
  res.json({ mensaje: "Usuario eliminado" });
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));







*/

const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

// Ruta del archivo de logs
const logFile = path.join(__dirname, "vitacoras.txt");

// Middleware para registrar cada petición con delimitadores pipe
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  // Usamos pipe para separar: Timestamp|Método|URL|DirecciónIP
  const logMessage = `${timestamp}|${req.method}|${req.originalUrl}|${req.ip}\n`;

  // Mostrar el log en la consola
  console.log(logMessage);

  // Guardar el log en el archivo (se crea automáticamente si no existe)
  fs.appendFile(logFile, logMessage, (err) => {
    if (err) {
      console.error("Error escribiendo en bitacoras.txt:", err);
    }
  });

  next();
});

// Resto de las rutas y configuración
app.use(express.json());

let usuarios = [
  { id: 1, nombre: "Juan", edad: 25 },
  { id: 2, nombre: "Maria", edad: 30 },
  { id: 3, nombre: "Carlos", edad: 28 },
  { id: 4, nombre: "Fer", edad: 40 },
];

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  usuario ? res.json(usuario) : res.status(404).json({ mensaje: "Usuario no encontrado" });
});

app.post("/usuarios", (req, res) => {
  const nuevoUsuario = { id: usuarios.length + 1, ...req.body };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

app.put("/usuarios/:id", (req, res) => {
  let usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if (usuario) {
    Object.assign(usuario, req.body);
    res.json(usuario);
  } else {
    res.status(404).json({ mensaje: "Usuario no encontrado" });
  }
});

app.delete("/usuarios/:id", (req, res) => {
  usuarios = usuarios.filter((u) => u.id !== parseInt(req.params.id));
  res.json({ mensaje: "Usuario eliminado" });
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
