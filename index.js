const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// Configurar la ruta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
