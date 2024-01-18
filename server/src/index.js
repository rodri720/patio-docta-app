const express = require('express');
const app = express();
const port = 3001;
const productRoutes = require('./controllers/postProducts'); 

//routes
app.use('/api', require('./routes/router'));
app.use(express.urlencoded({ extended: false }));

//middlewares
app.use(require( './routes/router'));
app.use(express.json()); // Para parsear el cuerpo de las solicitudes como JSON
app.use('/api', productRoutes);

app.listen(port, () => {
  console.log(`Servidor backend en http://localhost:${port}`);
});
